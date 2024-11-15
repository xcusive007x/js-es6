// switch case

var expression = 'cat';

switch(expression){
    case 'dog':
        console.log('🐕 This is a dog');
        break;
    case 'cat':
        console.log('🐈 This is a cat');
        break;
    case 'Tiger':
        console.log('🐅 This is a tiger');
        break;
    default:
        console.log('Undefined animal type');
}

// function date
var day = new Date().getDay();

switch(day) {
    case 0:
        console.log("Sunday");
        document.body.style.backgroundColor = "red";
        break;
    case 1:
        console.log("Munday");
        document.body.style.backgroundColor = "yellow";
        break;
    case 2:
        console.log("Tuesday");
        document.body.style.backgroundColor = "pink";
        break;
    case 3:
        console.log("Wednesday");
        document.body.style.backgroundColor = "blue";
        break;
    default:
        console.log("Invid day");
        document.body.style.backgroundColor = "brown";
}
