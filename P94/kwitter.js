function login() {
  localStorage.setItem("username", document.getElementById("username").value);
  window.location = "kwitter_page.html";
}