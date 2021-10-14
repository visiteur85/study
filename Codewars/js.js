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
      