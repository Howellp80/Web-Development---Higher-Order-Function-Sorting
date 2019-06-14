
// Automobile constructor...
function Automobile( year, make, model, type ){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
}


// prints year, make, model, and optionally the type of car based on bool flag
Automobile.prototype.logMe = function(bool){
    if (bool)
        console.log(this.year + " " + this.make + " " + this.model + " " + this.type);
    else
        console.log(this.year + " " + this.make + " " + this.model);
}


// returns a value represtnting the type of automobile
Automobile.prototype.getType = function(){
    switch(this.type.toLowerCase()) {
    
    case "roadster":
        return 5;
    
    case "pickup":
        return 4;
        
    case "suv":
        return 3;
            
    case "wagon":
        return 2;
            
    default: // all other types
        return 1;
    } 
}


// prints all of the automobiles with logMe function
function printArr(array, bool){
    array.forEach(function(element){
        element.logMe(bool);
    });
}


// make some Automobiles...
var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];


/*This function sorts arrays using an arbitrary comparator. You pass it a comparator 
and an array of objects appropriate for that comparator and it will return a new array 
which is sorted with the largest object in index 0 and the smallest in the last index*/

function sortArr( comparator, array ){
    array.sort(comparator);
    return array;    
}


/*For all comparators if cars are 'tied' according to the comparison rules then the order 
of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older 
cars.*/
function yearComparator( auto1, auto2){
    if (auto1.year > auto2.year)
        return false;
    else
        return true;
}


/*This compares two automobiles based on their make. It should be case insensitive and 
makes which are alphabetically earlier in the alphabet are "greater" than ones that come 
later.*/
function makeComparator( auto1, auto2){
    if (auto1.make.toLowerCase() < auto2.make.toLowerCase())
        return false;
    else
        return true;
}


/*This compares two automobiles based on their type. The ordering from "greatest" to 
"least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). It 
should be case insensitive. If two cars are of equal type then the newest one by model 
year should be considered "greater".*/
function typeComparator( auto1, auto2){
    auto1.type.toLowerCase(); 
    auto2.type.toLowerCase();

//console.log(auto1.getType());
//console.log(auto2.getType());

    if (auto1.getType() > auto2.getType())
        return false;
    else if (auto2.getType() > auto1.getType())
        return true;
    else
        return yearComparator(auto1, auto2);
}




// apply the sorts and print everything
console.log("*****");
var yearSort = sortArr(yearComparator, automobiles);
printArr(yearSort, false);
console.log("\n");

var makeSort = sortArr(makeComparator, automobiles);
printArr(makeSort, false);
console.log("\n");

var typeSort = sortArr(typeComparator, automobiles);
printArr(typeSort, true);
console.log("*****");







/*Your program should output the following to the console.log, including the opening and 
closing 5 stars. All values in parenthesis should be replaced with appropriate values. 
Each line is a seperate call to console.log.

Each line representing a car should be produced via a logMe function. This function 
should be added to the Automobile class and accept a single boolean argument. If the 
argument is 'true' then it prints "year make model type" with the year, make, model and 
type being the values appropriate for the automobile. If the argument is 'false' then the 
type is ommited and just the "year make model" is logged.

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

