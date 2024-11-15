var person;
var people = "";
var fullname = "Sakchai Srimakorn";
var age = 35;
var weight = 45.50;
var height = 167;
var stat = true;
var opt = false
var stock = null;

// check type
console.log("person type = " + typeof(person));
console.log("people type = " + typeof(people));
console.log("fullname type = " + typeof(fullname));
console.log("age type = " + typeof(age));
console.log("weight type = " + typeof(weight));
console.log("height type = " + typeof(height));
console.log("stat type = " + typeof(stat));
console.log("opt type = " + typeof(opt));
console.log("stock type = " + typeof(stock));

// display value
console.log("person value = " + person);
console.log("people value = " + people);
console.log("fullname value = " + fullname);
console.log("age value = " + age);
console.log("weight value = " + weight);
console.log("height value = " + height);
console.log("stat value = " + stat);
console.log("opt value = " + opt);
console.log("stock value = " + stock);

// type Boolean
console.log(Boolean(null));  // false
console.log(Boolean(0));    // false
console.log(Boolean(""));   // false
console.log(Boolean("0"));  // false
console.log(Boolean(false));    // false
console.log(Boolean(true));     // true
console.log(Boolean(undefined));    // false
console.log(Boolean({}));   // true
console.log(Boolean([]));   // true
console.log(Boolean(3-3));  // false
console.log(Boolean(10>9)); // true
console.log(Boolean(new Date()));   // true


// operator
console.log(age + 10);
console.log(fullname + age);
console.log('fullname' + age);
console.log(weight * height);
console.log(1 + 1);
console.log(1 + '1');
console.log('1' + '1');
console.log(1 / '1');
console.log(1/0);
console.log(0/1);
console.log(0/0);

console.log("-----------------");

// NaN : not a number
console.log(NaN == NaN);
console.log(NaN === NaN);


console.log(Math.pow(2,1024));
console.log(37/Infinity);
console.log(Infinity+30);

// special
console.log({} + {});
console.log([] + []);




