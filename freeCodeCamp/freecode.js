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

//Assignment with a Returned Value
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}
changed = change(10);
var processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);

//Stand in Line
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    return arr.shift(); 
    return item;
    // Only change code above this line
    
  }
  
  // Setup
  var testArr = [1,2,3,4,5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

  //Understanding Boolean Values
  function welcomeToBooleans() {

    // Only change code below this line
  
    return true; // Change this line
  
    // Only change code above this line
  }

  //Use Conditional Logic with If Statements
  function ourTrueOrFalse(isItTrue) {
    if (isItTrue) { 
      return "Yes, it's true";
    }
    return "No, it's false";
  }
  
  function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
      return "Yes, that was true";
    }
    return "No, that was false";
    }
    console.log(trueOrFalse(true));

    //Comparison with the Equality Operator
    function testEqual(val) {
        if (val == 12) { // Change this line
          return "Equal";
        }
        return "Not Equal";
      }
      
      // Change this value to test
      console.log(testEqual(10));

      //Comparison with the Strict Equality Operator
      // Setup
function testStrict(val) {
    if (val === 7) { 
      return "Equal";
    }
    return "Not Equal";
  }
   
  testStrict(10);

  //Practice comparing different values
  // Setup
function compareEquality(a, b) {
    if (a === b) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  
  console.log(compareEquality(10, "10"));

  //Comparison with the Inequality Operator
  function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  // Change this value to test
  console.log(testNotEqual(10));

  //Comparison with the Strict Inequality Operator
  // Setup
function testStrictNotEqual(val) {
    // Only Change Code Below this Line
    
    if (val !== 17) {
  
    // Only Change Code Above this Line
  
      return "Not Equal";
    }
    return "Equal";
  }
  
  // Change this value to test
  console.log(testStrictNotEqual(10));

  //Comparison with the Greater Than Operator
  function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
    
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  // Change this value to test
  console.log(testGreaterThan(10));

  //Comparison with the Greater Than Or Equal To Operator
  function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
      return "20 or Over";
    }
    
    if (val >= 10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  // Change this value to test
  console.log(testGreaterOrEqual(10));

  //Comparison with the Greater Than Or Equal To Operator
  function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
      return "20 or Over";
    }
    
    if (val >= 10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  // Change this value to test
  console.log(testGreaterOrEqual(10));
                                                    //Comparison with the Less Than Operator
  function testLessThan(val) {
    if (val < 25) {  // Change this line
      return "Under 25";
    }
  
    if (val < "55") {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);
                                                    //Comparison with the Less Than Or Equal To Operator
  function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

                                                  //Comparisons with the Logical And Operator
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);


                                            //Comparisons with the Logical Or Operator
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20 ) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);

                                                  //Introducing Else If Statements
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
  
}

// Change this value to test
testElseIf(7);

                                      //Golf Code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0]
  } else if (strokes <= par - 2) {
    return names[1]
  } else if (strokes == par - 1) {
    return names[2]
  } else if (strokes == par) {
    return names[3]
  } else if (strokes == par + 1) {
    return names[4]
  } else if (strokes == par + 2) {
    return names[5]
  } else if (strokes >= par + 3) {
    return names[6]
  }
}