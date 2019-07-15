
/*
console.log("Lets make sure JavaScript is working.");
var name = "Garrett"; //Replace this with your first name
console.log("The unicode characters of your name are:")
for (var i = 0; i < name.length; i++){
	console.log(name.charCodeAt(i));
}
console.log("Copy and paste these values for activity credit.")
*/

/* 
Write a JavaScript program that declares a function but calls it before it is declared. 
Because of function hoisting this will work in JavaScript. 
Go prove it!

Also write a function which is assigned to a variable. 
Call it before it is assigned and prove that this does not work.

*/


var deepEqual = function (x, y) {
  if (x === y) {
    return true;
  }
  else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
    if (Object.keys(x).length != Object.keys(y).length)
      return false;

    for (var prop in x) {
      if (y[prop] !=null)
      {  
        if (!deepEqual(x[prop], y[prop]))
          return false;
      }
      else
        return false;
    }

    return true;
  }
  else 
    return false;
}

function deepEqual2 (obj1, obj2) {
	// first check whether the type of obj1 and obj2 are same. If not, return false.
	if(obj1 != null && obj2 != null && typeof obj1 == "object" && typeof obj2 == "object") {
		let obj1Length = Object.keys(obj1).length;
		let obj2Length = Object.keys(obj2).length;

		// then, compare the length of obj1 and obj2 properties. If they are not equal, return false.
		if(obj1Length === obj2Length) {
		let isEqual = true;

		// Then, loop to go through each property in obj1
		for(var prop in obj1) {

		// if the property exist in obj2, then go through each of the property and compare their values
		if(obj2[prop] != null) {
		// isEqual will store the result of deepEqual of every properties in obj1 and obj2
		isEqual = isEqual && deepEqual2(obj1[prop], obj2[prop]);
	} else {
		// the property of obj1 does not exist in obj2, return false.
		return false;
	}
}

// return isEqual
return isEqual;
} else {

// the length og obj1 and obj2 properties are not same, return false.
return false;
}
} else {

// if obj1 and obj2 are not properties, then do === to compare them.
return obj1 === obj2;
}

// return true
return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(obj);

console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));