function addUser() {
    localStorage.setItem("player1_name", document.getElementById("p1n").value);
    localStorage.setItem("player2_name", document.getElementById("p2n").value);
    window.location = "game_page.html";
}