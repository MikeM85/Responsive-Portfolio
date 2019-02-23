// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyBXXGnt7d6ghP47Jbl5O0H-t9wm3p7bWNQ",
    authDomain: "mondayssuck-8d907.firebaseapp.com",
    databaseURL: "https://mondayssuck-8d907.firebaseio.com",
    projectId: "mondayssuck-8d907",
    storageBucket: "mondayssuck-8d907.appspot.com",
    messagingSenderId: "591121740036"
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

// Uploads data to the database
database.ref().push(newEmp);
console.log(newEmp.name);
console.log(newEmp.email);
console.log(newEmp.comments)

// Clears all of the text-boxes
$("#name-input").val("");
$("#email-input").val("");
$("#comments-input").val("");

});

// // 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
// database.ref().on("child_added", function(childSnapshot) {
//     // console.log(childSnapshot.val());
    
//     // Store everything into a variable.
//     var empName = childSnapshot.val().name;
//     var emailInput = childSnapshot.val().email;
//     var comInput = childSnapshot.val().comments
// })