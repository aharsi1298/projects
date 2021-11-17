function login() {
  localStorage.setItem("user_name", document.getElementById("username").value);
  window.location = "kwitter_page.html";
}