//39

var myArray = [18, 64, 99];
myArray[0] = 45;
//40
var myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
        [10, 11, 12], 13, 14
    ]
];


var myData = myArray[2][1];
//41 Manipulate Arrays With push()
myArray.push(["dog", 3])
//42 Manipulate Arrays With pop()
var removedFromMyArray = myArray.pop();

//43 Manipulate Arrays With shift()
let removedFromMyArray = myArray.shift();

//44 Manipulate Arrays With unshift()
myArray.unshift(["Paul", 35]);

//45 Shopping List
let myList = [
    ["cereal", 3],
    ["milk", 2],
    ["bananas", 3],
    ["juice", 2],
    ["eggs", 12]
];
//46 Write Reusable JavaScript with Functions
function reusableFunction() {
    console.log("Hi World");
}

reusableFunction();

//47 Passing Values to Functions with Arguments
function functionWithArgs(a, b) {
    console.log(a + b);
}

functionWithArgs(10, 5)

//48Global Scope and Functions