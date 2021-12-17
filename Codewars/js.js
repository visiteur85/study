//1 //this kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(number) {
    // your code........
    if (number % 2 == 0) {
        return number = number * 8;

    } else {
        return number = number * 9;

    }

};



//2 Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
    const elements = {};
    const arr = []
    for (let i = 0; i < a.length; i++) {
        if (!elements[a[i]]) arr.push(a[i]);
        elements[a[i]] = true
    }
    return arr;
}

//3 Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    };
}

//4 
function squareArea(A) {
    var circum = 4 * A;
    var radius = circum / (2 * Math.PI);
    var area = Math.pow(radius, 2);
    return Math.round(area * 100) / 100
}

//  5. 
function greet(language) {
    const countries = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso',
        IP_ADDRESS_INVALID: 'Welcome',
        IP_ADDRESS_NOT_FOUND: 'Welcome',
        IP_ADDRESS_REQUIRED: 'Welcome'
    };
    return countries[language]
};
//6Sum of positive
function positiveSum(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] > 0) {
       sum += arr[i];
     }
    }
   return sum;
   }
   //7 Removing Elements
   function removeEveryOther(arr){
    let newArr=[];
  for (let i = 0; i < arr.length; i+=2){
    newArr.push(arr[i]);
    }
  return newArr;
  }

  //Palindrome Strings
  function isPalindrome(line) {
    return (''+line) === (''+line).split('').reverse().join('');
  }
  //Century From Year
  function century(year) {
    let result = 0;  for (let i = 0; i < year; i++) {
      if (i % 100 === 0) {
        result++;
      }
    }
    return result;
  }

                    //My head is at the wrong end!
function fixTheMeerkat(arr) {
return arr.reverse(); 
}

//Function 1 - hello world
function greet() {
    return "hello world!"
  }

  //Convert a Boolean to a String
  function booleanToString(b){
    return b.toString();
   }

    //Area or Perimeter

    const areaOrPerimeter = function(l , w) {
        if (l===w) {return l*w}
        {return 2 * (l+w)}
      };

      //Is it a palindrome?

      function isPalindrome(x) {
 
        if (x.toLowerCase() === x.toLowerCase().split("").reverse().join(""))
        { return true}
        else {return false};}
      
        //Multiplication table for number
        function multiTable(n) {
            return [...Array(10)].map((_,i)=>`${i+1} * ${n} = ${n*i+n}`).join('\n')
          }
          //How old will I be in 2099?
          function  calculateAge(a,b) {
            if (a>b&&+a-b==1)return `You will be born in ${+a-b} year.`
            else if (a<b&&+b-a==1)return `You are ${b-a} year old.`
            else if (a>b)return `You will be born in ${+a-b} years.`
            else if (a<b) return `You are ${b-a} years old.`
            return 'You were born this very year!'
          }

//Function 2 - squaring an argument
function square(num) {
  return num * num;
}

//fr(weight){
 let a=weight-2
 let b=weight%2
 if (a>1&&b==0)return true
 return false
}

//Enumerable Magic #25 - Take the First N Elements

function take(arr, n) {
  return arr.slice(0, n);
}

//Safen User Input Part I - htmlspecialchars
function htmlspecialchars(formData) {
  return formData.replace(/&/g, "&amp;")
                 .replace(/"/g, "&quot;")
                 .replace(/</g, "&lt;")
                 .replace(/>/g, "&gt;");
}

//Define a card suit
function defineSuit(card) {
  if (card.includes('♣')) return 'clubs'; if (card.includes('♠')) return 'spades';
  if (card.includes('♥')) return 'hearts'; if (card.includes('♦')) return 'diamonds';
}
//Hex to Decima
function hexToDec(hexString){
  return  parseInt(hexString, 16);
 }

 //Did she say hallo?

 function validateHello(greetings) {
  
  let res =/(hello|ciao|salut|hallo|hola|ahoj|czesc)/i.test(greetings) 
   return res
 }

 //Is n divisible by x and y?
 function isDivisible(n, x, y) {
  if ( n % x == 0 && n % y == 0) {
    return true
  }
  else {return false}
}

//Return Negative
function makeNegative(num) {
  return -num
}

//Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
  if (bool === true) {
    return "Yes"
  }
  else {return "No"}
}

//Basic Mathematical Operations
function basicOp(operation, value1, value2)
{
  if (operation == "+") {return value1 + value2 }
  else if (operation == "-") {return value1 - value2 }
  else if (operation == "*") {return value1 * value2 }
  else { return value1 / value2}
}

//Parse nice int from char problem
function getAge(inputString){
  // return correct age (int). Happy coding :) 
    return +inputString[0]
  }

  //Beginner Series #1 School Paperwork
  function paperwork(n, m) {
    if (n < 0 || m< 0)
      {return 0}
    else {return n * m}
  }
  //String repeat
  function repeatStr (n, s) {
    return s.repeat(n);
  }
  //Reversed Strings
  function solution(str){
    return str.split("").reverse().join("")
  }
  //Third Angle of a Triangle
  function otherAngle(a, b) {
    return 180 - (a+b);
  }
  //Remove exclamation marks
  function removeExclamationMarks(s) {
    let str = s
    let arr = str.split("")
    let newArr = arr.filter(f=>f!=="!")
    let newstr = newArr.join("")
    return newstr;
  }git

  //Beginner - Lost Without a Ma
  function maps(x){
    return x.map(m=>m*2)
    }

    //Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
    if (bool === true) {
        return "Yes"
    }
    else {return "No"}
}

//Grasshopper - Messi goals function
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}
//Type of sum
function typeOfSum(a, b) {
    return typeof(a + b);

}

//Transportation on vacation
function rentalCarCost(d) {

    let day = d >= 3 && d < 7 ? 20 : 0, // day discount
        week = d >= 7 ? 50 : 0; // week discount

    return (d * 40) - day - week;
}
//Student's Final Grade
function finalGrade (exam, projects) {
    if (exam > 90 | projects > 10)
    {return 100};K
    if (exam > 75 && projects <= 5.75)
    {return 90};
}

//Simple multiplication
function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9
}
//String ends with?
function solution(str, ending){
    return str.endsWith(ending);
}
//Remove String Spaces
function noSpace(x){
    return x.split(' ').join('');
}
//Remove First and Last Character
function removeChar(str){
    return str.slice(1, -1)

};
//Perimeter sequence
function perimeterSequence(a,n) {
    return a*n*4
}
//Opposite number
//Number of Decimal Digits
function digits(n) {
    return n.toString().length
}
//Largest Square Inside A Circle
function areaLargestSquare(r) {
    return 2*r*r; //code here
}
//Fake Binary
function fakeBin(x){
    return x.replace(/[1234]/g, '0').replace(/[56789]/g, '1')
}
//Even or Odd
function even_or_odd(number) {
    return  number % 2 === 0 ? "Even" : "Odd"

}
//Convert to Binary
function toBinary(n){
    return Number(n.toString(2));
}

//Convert a String to a Number!
var stringToNumber = function(str){

    return +str;
}
//Convert a Number to a String!
function numberToString(num) {
    return num.toString()
}
//Century From Year
function century(year) {
    const result = String(year / 100).split('.')
    return result.length === 2 ? Number(result[0]) + 1 : Number(result[0])
        ;
}
//Capitalization and Mutability
function capitalizeWord(word) {
    return `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`;

}
//Can we divide it?
function isDivideBy(number, a, b) {
    if (number % a === 0 && number % b === 0) {
        return true;
    } else {
        return false;
    }
}
//Keep Hydrated!
function litres(time) {
    return Math.floor(time * 0.5);
}