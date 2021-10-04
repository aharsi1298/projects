var p1n = localStorage.getItem("player1_name");
var p2n = localStorage.getItem("player2_name");
var p1s = 0;
var p2s = 0;

document.getElementById("player1_name").innerHTML = " " + p1n + " - ";
document.getElementById("player2_name").innerHTML = " " + p2n + " - ";
document.getElementById("player1_score").innerHTML = p1s;
document.getElementById("player2_score").innerHTML = p2s;

var actual_answer;

var question_turn = "player1";
var answer_turn = "player2";

document.getElementById("questioner").innerHTML = `Questioner - ${p1n}`;
document.getElementById("answerer").innerHTML = `Answerer - ${p2n}`;

function send() {
  var number1 = document.getElementById("num1").value;
  var number2 = document.getElementById("num2").value;
  actual_answer = parseInt(number1) * parseInt(number2);

  var question_number = `<h4>${number1} &times; ${number2}</h4>`;
  var input_box = "<br />Answer : <input type='text' id='input_check_box'>";
  var check_button = "<br /><br /><button class='btn btn-info' onclick='check()'>Check</button>";
  var row = question_number + input_box + check_button;

  document.getElementById("output").innerHTML = row;

  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}

function check() {
  var get_answer = document.getElementById("input_check_box").value;
  if(get_answer == actual_answer) {
    if(answer_turn == "player1") {
      var update_p1s = p1s + 1;
      document.getElementById("player1_score").innerHTML = update_p1s;
    } else {
      var update_p2s = p2s + 1;
      document.getElementById("player2_score").innerHTML = update_p2s;
    }
  }
  if(question_turn == "player1") {
    question_turn = "player2";
    answer_turn = "player1";
    document.getElementById("questioner").innerHTML = `Question Turn - ${p2n}`;
    document.getElementById("answerer").innerHTML = `Answer Turn - ${p1n}`;
  } else {
    question_turn = "player1";
    answer_turn = "player2";
    document.getElementById("questioner").innerHTML = `Question Turn - ${p1n}`;
    document.getElementById("answerer").innerHTML = `Answer Turn - ${p2n}`;
  }
  document.getElementById("output").innerHTML = "";
}