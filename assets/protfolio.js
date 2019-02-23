// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyA1qrFcc8jZkp3lG6Rlv7JFPDLTLBz1whg",
    authDomain: "portfolio-email-input.firebaseapp.com",
    databaseURL: "https://portfolio-email-input.firebaseio.com",
    projectId: "portfolio-email-input",
    storageBucket: "",
    messagingSenderId: "934575408051"
};

firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding trains
$("#add-comment-btn").on("click", function(event) {
event.preventDefault();

// Grabs user input
var empName = $("#name-input").val().trim();
var emailInput = $("#email-input").val().trim();
var comInput = $("#comments-input").val().trim();

// console.log(empfrequency);
// Creates local "temporary" object 
var newEmp = {
  name: empName,
  email: emailInput,
  comments: comInput,
};

// Uploads train data to the database
database.ref().push(newEmp);


// alert("train successfully added");

// Clears all of the text-boxes
$("#name-input").val("");
$("#email-input").val("");
$("#comments-input").val("");

});