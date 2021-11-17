// Import the functions you need from the SDKs you need
//import { initializeApp, database } from "firebase/app";
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

var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");

function send() {
    var t = document.querySelector("#text");
    firebase.database().ref(room_name).push({
        name: user_name,
        message: t,
        likes: 0
    });
    t.value = "";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  location.replace("index.html");
}