const user = JSON.parse(localStorage.getItem("loggedInUser"));

if (!user) {
  alert("Please login first");
  window.location.href = "login.html";
}


document.getElementById("profileName").innerText = user.username;
document.getElementById("profileRole").innerText = "Role: " + user.role;


function toggleProfile() {
  document.getElementById("profileBox").classList.toggle("show");
}


function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}




window.onclick = function (e) {
  if (!e.target.classList.contains("profile-icon")) {
    document.getElementById("profileBox").classList.remove("show");
  }
};
