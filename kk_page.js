// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDEJ9bOg8OZRrhwE-rJBRJI7HKOk1X1qc0",
    authDomain: "login-b48ce.firebaseapp.com",
    databaseURL: "https://login-b48ce-default-rtdb.firebaseio.com",
    projectId: "login-b48ce",
    storageBucket: "login-b48ce.appspot.com",
    messagingSenderId: "320480901146",
    appId: "1:320480901146:web:51114467c9d5d6e962f9a3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    room_name_kk = localStorage.getItem("room_name_kk");
    user_name_kk = localStorage.getItem("user_name_kk");

function logout(){
      localStorage.removeItem("user_name_kk");
      localStorage.removeItem("room_name_kk");
      window.location = "index.html"
}

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name_kk).push({
            name : user_name_kk,
            message : msg,
            like : 0
      });
      document.getElementById("msg").value = "";
}