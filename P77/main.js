alert("After reading the page, open the console")

console.log("var firstname = \"Ranbir\";");
console.log("var lastname = \"Kapoor\";");
console.log("type 'next()' to go to the next step")

var oldstep = 0;
var step = 0;

var next = () => {step++;}

var firstname = "Ranbir";
var lastname = "Kapoor";

var a;
var b;

setInterval(() => {
  if(oldstep === step) {
    return;
  } else if(oldstep !== step) {
    oldstep = step;
    nextStep();
  }
}, 1000);

function nextStep() {
  switch(step) {
    case 1:
      console.log("var a = 5;");
      a = 5;
      break;
    case 2:
      console.log("var b = 10;");
      b = 10;
      break;
    case 3:
      console.log("console.log(firstname.concat(lastname));");
      console.log(firstname.concat(lastname));
      break;
    case 4:
      console.log("console.log(a + b);");
      console.log(a + b);
      break;
    case 5:
      console.log("console.log(a);");
      console.log(a);
      break;
    case 6:
      console.log("console.log(a * b); \/\/ * means multiplication");
      console.log(a * b);
      break;
    case 7:
      console.log("console.log(b / a); \/\/ / means division");
      console.log(b / a);
      break;
    default:
      console.log("All things are done!");
  }
}