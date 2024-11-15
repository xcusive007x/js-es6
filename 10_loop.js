// for loop
var num;
for(num = 1; num <= 10; num++){
    if(num > 5){
        console.log("Middle");
        break;
    }
    console.log(num);
}

// while loop
var i = 1;
while(i <= 10){
    if(i > 5){
    console.log("Middle");
    break;
    }
    console.log(i)
    i++;
}

var star = 0;
while(star <= 10){
    console.log('*'.repeat(star));
    star++;
}