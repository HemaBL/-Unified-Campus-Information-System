document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

 
  const user = JSON.parse(localStorage.getItem("user_" + username));

  if (!user) {
    alert("User not found. Please register first.");
    return;
  }

  let correctPassword = "";

  if (user.role === "student") {
    correctPassword = "student@123";
  } 
  else if (user.role === "faculty") {
    correctPassword = "faculty@123";
  } 
  else if (user.role === "admin") {
    correctPassword = "admin@123";
  } 
  else if (user.role === "guest") {
    correctPassword = "guest@123";
  }

  if (password !== correctPassword) {
    alert("Incorrect password for " + user.role);
    return;
  }

 
  localStorage.setItem("loggedInUser", JSON.stringify(user));

  alert("Login successful!");
  window.location.href = "dashboard.html";
});