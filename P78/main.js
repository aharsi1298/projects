var i = -1;

var info = [
  {
    "name": "Aharsi Majumdar(me)"
  },
  {
    "name": "Moumita Majumdar(mother)"
  },
  {
    "name": "Anirban Majumdar(father)"
  },
  {
    "name": "Swapna Raychaudhury(maternal grandmother)"
  },
  {
    "name": "Chandan Raychaudhury(maternal grandfather)"
  },
  {
    "name": "Arpita Raychaudhury(maternal aunt)"
  },
  {
    "name": "Sharmishtha Basu(maternal aunt)"
  },
  {
    "name": "Kaushik Basu(uncle)"
  },
  {
    "name": "Ishana Basu(cousin)"
  },
  {
    "name": "Geeta Majumdar(paternal grandmother)"
  },
  {
    "name": "Amaresh Chandra Majumdar(paternal grandfather)"
  },
  {
    "name": "Abhijit Majumdar(paternal uncle)"
  },
  {
    "name": "Sonali Majumdar(aunt)"
  },
  {
    "name": "Aryaveer Majumdar(cousin)"
  },
  {
    "name": "Arushi Majumdar(cousin)"
  }
];

function update() {
  i = ((i === 14) ? 0 : i + 1);
  document.getElementById("name").innerHTML = info[i].name;
}