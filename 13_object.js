
// สร้าง object

var person = {
    firstName: "Sakchai",
    lastName: "Srimakorn",
    age: 35,
    gender: "male",
    fullname: function(){
        return this.firstName + " " + this.lastName;
    }
}

// method1
console.log(person.firstName);

// method2
console.log(person["lastName"]);

//method3
console.log(person.fullname());

// Object nested
var user = {
    id: "1", 
    email: "sakchaisr@gmail.com",
    personInfo: {
        name: "Sakchai",
        address: {
            line1: "A101",
            line2: "B202",
            city: "Lampang",
            zipcode: "52100"
        }
    }
}
console.log(user.personInfo.name);
console.log(user.personInfo.address.city);

