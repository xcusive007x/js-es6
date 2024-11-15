// normal condition

var age = 18;
if(age <= 18) {
    var txt = "Children";
}else if(age <= 20) {
    var txt = "Young";
}else {
    var txt = "Old";
}
console.log(txt);

// program Grade

var score = prompt("Enter Score:", 0);

if(score >= 80 && score <= 100) {
    var grade = "A";
}else if(score >= 70 && score < 80){
    var grade = "B";
}else if(score >= 60 && score < 70){
    var grade = "C";
}else if(score >= 50 && score < 60){
    var grade = "C";
}else if(score < 50){
    var grade = "F"
}else {
    var grade = "Invalid Data";
}
console.log("Your Grade is "+ grade);

// ternary condition

// var age = 18;
// var y = (age <20)? "Young": "old";

// console.log(y);

var state = false;
var opt = state? 1: 2;
console.log(opt)