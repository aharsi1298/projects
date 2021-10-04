function send() {
  var number1 = document.getElementById("num1").value;
  var number2 = document.getElementById("num2").value;
  var actual_answer = parseInt(number1) * parseInt(number2);

  var question_number = `<h4>${number1} &times; ${number2}</h4>`;
  var input_box = "<br />Answer : <input type='text' id='input_check_box'>";
  var check_button = "<br /><br /><button class='btn btn-info' onclick='check()'>Check</button>";
  var row = question_number + input_box + check_button;

  document.getElementById("output").innerHTML = row;

  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}