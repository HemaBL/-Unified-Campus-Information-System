console.log("✅ login.js loaded");

document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  console.log("✅ Login clicked");

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const res = await fetch("https://unified-campus-information-system.onrender.com/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();

  console.log(data);
  alert(data.message);

  if (res.ok) {
    localStorage.setItem("loggedInUser", JSON.stringify(data.user));
    window.location.href = "dashboard.html";
  }
});