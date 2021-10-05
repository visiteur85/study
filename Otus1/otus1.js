// 1.1.3 Вывод текстовых сообщений
// alert("Hello word");
// prompt("Сколько вам лет");
// confirm("все хорошо?");

// //1.3.1 строки
// let firstName = "Pavel";
// let lastName = "Kryvaltsevich";
// alert("Hello, " +  firstName + (" ") + lastName);

// let firstName = "Pavel";
// let lastName = "Kryvaltsevich";
// alert(`Hello, ${firstName} ${lastName}`);

// let name = prompt("введите ваше имя");
// alert(`Привет, ${name}`);

// let name = "Pavel";
// alert(name.length);

//1.3.2 - числа
// let kbite  = 15;
// let bit = kbite * 1024 * 8;
// alert(bit);

// let miles = prompt("Введите расстояние в милях");
// let km = miles * 1.6;
// alert(+km.toFixed(2));

// let number = 2;
// let string = "a";
// alert(number * string);
//результат будет NaN

// 1.3.4 опредедение типа данных
// let value;
// let double = typeof typeof value;
// alert(double); вернется string, typeof всегда возвращает строку

//Домашнее задание
// let a = 1;
// let b = 2;
// alert(a + b);

// let a = "привет"; 
// let b = "как дела";
// let c = a + b;
// alert(c.length);

// Задача: написать программу, которая запрашивает у пользователя ввод 
// трёхзначного числа, а потом выводит в консоль сумму цифр введённого 
// числа. 
// const​ num = prompt(​'Enter the number: '​); 
// Теперь нужно получить цифры числа. Мы будем считать, что пользователь 
// всегда вводит корректное значение. Третья цифра — остаток от деления 
// исходного числа на 10. 
// const​ num = prompt(​'Enter the number: '​); 
// const​ digit3 = num % ​10​;
// Первая цифра — исходное число минус остаток от деления на 100, результат 
// разделить на 100.
// const​ num = prompt(​'Enter the number: '​); 
// const​ digit3 = num % ​10​; 
// const​ digit1 = (num - num % ​100​)/​100​; 
// Теперь осталось найти среднюю цифру. Для этого вычтем из исходного числа 
// первую цифру, умноженную на 100, и третью цифру, результат разделим на 10. 
// let num = prompt("Введите число: ");
// let number3 = num % 10;
// let number1 = (num - num % 100)/100;
// let number2 = (num - number1 * 100 - number3)/10;
// alert(number1 + number2 + number3);

// игра fizzBuzz
// for (var i = 1; i <= 100; i++) {
//     if (i % 15 === 0) alert("FizzBuzz");
//     else if (i%3 === 0) alert("Fizz");    
//     else if (i%5 === 0) alert("Buzz");    
//     else alert(i);    
// }

//1.4.2 логические выражения
// let number  = prompt("введите число");
// let compare = (number >= 10) && (number <= 99) || (number <= -10);
// alert(compare);

//Условия 
// 1.5.1 Операторы if/else
// let age = prompt("введите ваш возраст:");
// if (age < 18) {alert("Вход запрещён!!!")
// };

// let age = prompt("Введите ваш возраст:")
// if (age < 18) {
//     alert("Повзрослей")
// } else if (age > 75) {
//     alert("Пора на пенсию")
// } else {
//     alert("Добр пожаловать)")
// }

// 1.5.2 Оператор ?

// let sym = prompt("M for male or F for female");
// let gender = (sym === "M") ? "male" : "female";
// alert(gender);

// 1.5.3 Оператор switch

// let city = prompt("Enter city name:");
// let cost;
// if (city === "Moscow") {
//     cost = 3500;
//     alert(cost);
// } else if (city === "Kazan" || city === "ST. Petersburg") {
//     cost = 5000;
//     alert(cost);
// } else {
//     alert("ALL ticketsare sold");
// };

// let num = +prompt("Введите число");
// switch(num) {
//     case 0:
//         alert(0)
//         break;
//     case 1: 
//         alert(1)
//     break;
//     case 2:
//     case 3:
//         alert("2,3")
//         break;
// }

//Домашнее задание 2.
// 1.Впеременныхa и b хранятся числа. Вывести в 
// консоль наибольшее из них.
// let a = +prompt("Введите число:");
// let b = +prompt("Введите число 2:");
// if (a > b) {
//     alert(a);
// }
// else if (b > a) {
//     alert(b);
// }
// else {alert("Числа равны")};

// 2.Запросить у пользователя ввод числа от 1 до 12. 
// Вывести в консоль название месяца, соответствующее
// let number  = +prompt("Введите число от 1 до 12:");
// switch(number) {
//     case 1:
//         alert("Январь")
//         break;
//     case 2:
//         alert("Февраль")
//         break;
//     case 3:
//             alert("Март")
//             break;
//     case 4:
//             alert("Апрель")
//             break;
//     case 5:
//         alert("Май")
//         break;
//     case 6:
//         alert("Июнь")
//         break;
//     case 7:
//             alert("Июль")
//             break;
//     case 8:
//             alert("Август")
//             break;
//     case 9:
//         alert("Сентябрь")
//         break;
//     case 10:
//         alert("Октябрь")
//         break;
//     case 11:
//             alert("Ноябрь")
//             break;
//     case 12:
//             alert("Декабрь")
//             break;
// }

// *Впеременныхcircle и square хранятся площади круга 
// и квадрата соответственно. Написать программу, 
// которая определяет, поместится ли круг в квадрат.

// let circle  = +prompt("введите площадь круга:");
// let square = +prompt("Введите площадь квадрата:");
// let sideSquare = Math.sqrt(square);
// let diametrCircle = (Math.sqrt(circle / Math.PI)) * 2;
// let result  = (diametrCircle <= sideSquare) ? "Поместится" : "Не поместится";
// alert(result);

//1.6.1 цикл while
// let sum = 0;
// let number = 1;
// while (number <= 100) {
//     sum = sum + number;
//     number++;
// }
// alert(sum);

// 1.6.2 Цикл do while
// 1.6.3 цикл for
//программа выводит факториал числа, введенного с клавиатуры
// let input = +prompt("Введите число");
// let factorial = 1;
// for (let i =1; i <=input; i++) {
// factorial = factorial * i;
// }
// alert(factorial);

// 1.6.4. Прерывание цикла 
//программа которая по очереди запрашивает у пользователя числа и вычисляет их сумму. если пользователь вводит вместо числа знак=, сумма вы
//водится в консоль
// let sum = 0;
// while (true) {
//     const input = prompt("Введите число или знак =");
//     if (input == '=') {
//         break;
//     }else {
//         sum = sum + Number(input);
//     }
// }
// alert(sum)

//2.1.1 Что такое Объекты

// let car = {
//     model: "Audi",
//     color: "Red",
//     year: 2012
// }
// const input = prompt("Введите свойство:");
// const value = car[input];

// if (value) {
//     alert(value);
// }
// else {
//     alert("Такого свойства нет");
// }

//2.1.2Добавление и удаление свойств
// let car = {
//          model: "Audi",
//          color: "Red",
//          year: 2012
//      }
//      const input = prompt("введите свойство");
//      const hasProp = input in car;
//      if (hasProp) {
//          delete car[input];
//      }
//      else {
//          car[input] = null
//      }

//2.1.3 Копирование объекта

// let obj = {
//     number: 1001,
//     place: "A101",
//     weight: 25
// }
// let newObj = Object.assign({}, obj, {cost: 10} );

//2.1.4 Деструктуризация объекта
// Написать программу которая запишет свойство name в переменную name, свойство years в переменную age, свойство height в переменную height/
// если свойства нет, то в качестве значения записать null
// let person = {
//     names: "Sam",
//     years: 25
// };
// let {names, years: age, height = null} = person;
// alert(names);
// alert(age);
// alert(height);