const prompt = require('prompt-sync')();

console.log("Welcome to Quiz");
console.log("How much you know About Harshii?");
let correctAnswers=0;
const totalQuestions =3;
const answer1 = prompt("What is Harshi Favourite food?");
const correctAnswer1 = "BIRYANI";
if(answer1.toUpperCase() === correctAnswer1){
    console.log("You are correct");
    correctAnswers++;
}else{
    console.log("You are wrong");
    
}
const answer2 = prompt("What is Harshi Favourite color?");
const correctAnswer2 = "RED";
if(answer2.toUpperCase() === correctAnswer2){
    console.log("You are correct");
    correctAnswers++;
}else{
    console.log("You are wrong");
    
}
const answer3 = prompt("What is Harshi Favourite place?");
const correctAnswer3 = "HOME";
if(answer3.toUpperCase() === correctAnswer3){
    console.log("You are correct");
    correctAnswers++;
}else{
    console.log("You are wrong");
    
}
console.log("You have",correctAnswers,"Correct!");
console.log("You scored",Math.round((correctAnswers/totalQuestions)*100),"%");



