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
        return "Odd"
    }
}

//4 
function squareArea(A) {
    var circum = 4 * A;
    var radius = circum / (2 * Math.PI);
    var area = Math.pow(radius, 2);
    return Math.round(area * 100) / 100
}