const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "rv_university"
});

db.connect(err => {
  if (err) {
    console.log("❌ Database connection failed:", err);
  } else {
    console.log("✅ Database connected");
  }
});

//  TEST ROUTE
app.get("/", (req, res) => {
  res.send("UCIS backend running");
});

// REGISTER USER
app.post("/api/users/register", async (req, res) => {
  const { username, password, role } = req.body;

  // validation
  if (!username || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const query =
      "INSERT INTO users (username, password, role) VALUES (?, ?, ?)";

    db.query(query, [username, hashedPassword, role], (err, result) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(409).json({ message: "Username already exists" });
        }
        console.error(err);
        return res.status(500).json({ message: "Database error" });
      }

      res.status(201).json({
        id: result.insertId,
        username,
        role
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//  LOGIN USER
app.post("/api/users/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }

  const query = "SELECT * FROM users WHERE username = ?";

  db.query(query, [username], async (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }

    if (!results || results.length === 0) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const user = results[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // SUCCESS LOGIN RESPONSE
    res.status(200).json({
      id: user.id,
      username: user.username,
      role: user.role
    });
  });
});

//START SERVER 
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
