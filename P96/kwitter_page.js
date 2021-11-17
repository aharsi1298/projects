  // Import the functions you need from the SDKs you need
//  import { initializeApp, database } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDHKy8XC5UNC_03CPd_hESPuslHqeTxBLc",
    authDomain: "letschat-88dcc.firebaseapp.com",
    databaseURL: "https://letschat-88dcc-default-rtdb.firebaseio.com",
    projectId: "letschat-88dcc",
    storageBucket: "letschat-88dcc.appspot.com",
    messagingSenderId: "529701256331",
    appId: "1:529701256331:web:4c57a6679e881ad6c6e88e"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

function addRoom() {
  var room_name = document.getElementById("roomname").value;
  localStorage.setItem("room_name", room_name);
  firebase.database().ref("/rooms").push(room_name);
  window.location = "kwitter_room.html";
}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("roomsList").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      var ul = document.createElement("ul");
      for(var rmnm in Room_names) {
        ul.chilren.push(`<li>${rmnm}</li>`);
      }
      //End code
    });
  });
}
getData();

function redirectToRoomName() {
  localStorage.setItem("room_name", room_name);
  location = "kwitter_room.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  location.replace("index.html");
}