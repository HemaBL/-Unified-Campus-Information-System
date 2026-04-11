const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// REGISTER
app.post("/api/register", (req, res) => {
  const { username, password, role } = req.body;

  if (password !== "rvu@123") {
    return res.status(400).json({ message: "Invalid registration key" });
  }

  const rolePasswords = {
    student: "student@123",
    faculty: "faculty@123",
    admin: "admin@123",
    guest: "guest@123"
  };

  const finalPassword = rolePasswords[role];

  if (!finalPassword) {
    return res.status(400).json({ message: "Invalid role selected" });
  }

  const query = "INSERT INTO users (username, password, role) VALUES (?, ?, ?)";

  db.query(query, [username, finalPassword, role], (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "DB error" });
    }

    res.json({ message: "Registration successful" });
  });
});

// LOGIN
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const query = "SELECT * FROM users WHERE username = ?";

  db.query(query, [username], (err, results) => {
    if (err) return res.status(500).json({ message: "DB error" });

    if (results.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = results[0];

    if (password !== user.password) {
      return res.status(400).json({ message: "Wrong password" });
    }

    res.json({
      message: "Login successful",
      user
    });
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});