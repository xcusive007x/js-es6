// function non parameter
function wakeup(){
    console.log("Hey! Wake up");
}
// call function
// wakeup();

// function have parameter
function sayHello(name){
    console.log("Hello " + name);
}
// sayHello("Sakchai");

// function have multipameter

function calArea(w,h){
    var area = w * h;
    return area;
}

console.log("พื้นที่คือ: " + calArea(4,2) + "ตรม.");

// function Expression เก็บฟังก์ชัน ลงในตัวแปร

var action = function(a, b){
    return a *b;
}

var result = action(3,6);

console.log("result = " + result);