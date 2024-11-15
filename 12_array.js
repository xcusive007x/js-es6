// Basic array
var fruits = ["Apple", "Banana", "Orange", "Mango"];
var names = new Array("John", "Joe", "Jack", "Jane");

console.log(typeof(fruits));
console.log(typeof(names));

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2], names[4] );

fruits[0] = "Longgon";
console.log(fruits);

for(var i =0; names[i]; i++){
    console.log(names[i]);
}

//  loop แบบ foreach

function myfruits(value){
    console.log(value);
}

fruits.forEach(myfruits);


