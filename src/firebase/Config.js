import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyADrSZlhq3zvExtuOFhITsVnxg10G8MiNo",
    authDomain: "react-chat-1da38.firebaseapp.com",
    databaseURL: "https://react-chat-1da38.firebaseio.com",
    projectId: "react-chat-1da38",
    storageBucket: "react-chat-1da38.appspot.com",
    messagingSenderId: "511702088131",
    appId: "1:511702088131:web:d275b2c5c791978c11a576"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;