const firebaseConfig = {
    apiKey: "AIzaSyAL4NE0DzwPJ2x23ryPjB7yLBZ_BDGKadc",
    authDomain: "kwitter-5ea34.firebaseapp.com",
    databaseURL: "https://kwitter-5ea34-default-rtdb.firebaseio.com",
    projectId: "kwitter-5ea34",
    storageBucket: "kwitter-5ea34.appspot.com",
    messagingSenderId: "997938773821",
    appId: "1:997938773821:web:90d6891227993d3489cf54"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function addaddRoom()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
    });
  }