function Automobile(year, make, model, type) {
  this.year = year; //integer (ex. 2001, 1995)
  this.make = make; //string (ex. Honda, Ford)
  this.model = model; //string (ex. Accord, Focus)
  this.type = type; //string (ex. Pickup, SUV)
  this.logMe = function(bool) {
    if (bool) {
      console.log(this.year + ' ' + this.make + ' ' + this.model + ' ' + this.type)
    } else {
      console.log(this.year + ' ' + this.make + ' ' + this.model)
    }

  }
}

var automobiles = [
  new Automobile(1995, "Honda", "Accord", "Sedan"),
  new Automobile(1990, "Ford", "F-150", "Pickup"),
  new Automobile(2000, "GMC", "Tahoe", "SUV"),
  new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
  new Automobile(2005, "Lotus", "Elise", "Roadster"),
  new Automobile(2008, "Subaru", "Outback", "Wagon")
];

/*This function sorts arrays using an arbitrary comparator. You pass it a comparator and an array of objects appropriate for that comparator and it will return a new array which is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr(comparator, origArray) {
  let array = origArray.concat();
  var length = array.length;

  for (var i = 0; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;
    while (j >= 0 && comparator(array[j], temp)) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;

}


/*A comparator takes two arguments and uses some algorithm to compare them. If the first argument is larger or greater than the 2nd it returns true, otherwise it returns false. Here is an example that works on integers*/
function exComparator(int1, int2) {
  if (int1 > int2) {
    return true;
  } else {
    return false;
  }
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator(auto1, auto2) {
  if ((auto1.year) > (auto2.year)) {
    return true;
  } else {
    return false;
  }
}


/*This compares two automobiles based on their make. It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator(auto1, auto2) {
  if ((auto1.make.toLowerCase()) > (auto2.make.toLowerCase())) {
    return true;
  } else {
    return false;
  }
}

/*This compares two automobiles based on their type. The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). It should be case insensitive. If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator(auto1, auto2) {
	
  let auto1Type = auto1.type.toLowerCase();
  let auto2Type = auto2.type.toLowerCase();
  
  let changeToNum = function(a){
  	if(a=='roadster')
    	return 0;
    else if (a=='pickup')
    	return 1;
    else if (a=='suv')
    	return 2;
    else if (a=='wagon')
    	return 3;
    else 
    	return 4;
  }
  
  let newA1 = changeToNum(auto1Type)
  let newA2 = changeToNum(auto2Type)
  
   if(newA1 == newA2){
        return yearComparator(auto2, auto1);
    }else if(newA1 > newA2){
        return true;
    }else{
        return false;
    }
}

function printArr(arry, type) {
  arry.forEach(function(x) {
    x.logMe(type)
  })
}

var yearAuto = sortArr(yearComparator, automobiles);
var makeAuto = sortArr(makeComparator, automobiles);
var typeAuto = sortArr(typeComparator, automobiles);

console.log('*****');
console.log('The cars sorted by year are: ')
printArr(yearAuto, false)

console.log('\n')
console.log('The cars sorted by make are:')
printArr(makeAuto, false)

console.log('\n')
console.log('The cars sorted by type are:')
printArr(typeAuto, true)
console.log('*****');


/*Your program should output the following to the console.log, including the opening and closing 5 stars. All values in parenthesis should be replaced with appropriate values. Each line is a seperate call to console.log.

Each line representing a car should be produced via a logMe function. This function should be added to the Automobile class and accept a single boolean argument. If the argument is 'true' then it prints "year make model type" with the year, make, model and type being the values appropriate for the automobile. If the argument is 'false' then the type is ommited and just the "year make model" is logged.

*****
The cars sorted by year are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)

The cars sorted by make are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)

The cars sorted by type are:
(year make model type of the 'greatest' car)
(...)
(year make model type of the 'least' car)
*****

As an example of the content in the parenthesis:
1990 Ford F-150 */
