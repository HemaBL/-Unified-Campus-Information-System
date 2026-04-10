document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("newUsername").value.trim();
  const password = document.getElementById("newPassword").value.trim();
  const role = document.getElementById("role").value;

  if (!username || !password || !role) {
    alert("Please fill all fields");
    return;
  }


  if (password !== "rvu@123") {
    alert("Invalid Registration Password (Use: rvu@123)");
    return;
  }


  const user = { username, role };
  localStorage.setItem("user_" + username, JSON.stringify(user));

  alert("Registration successful. Please login.");
  window.location.href = "login.html";
});