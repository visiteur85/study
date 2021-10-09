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
// 
// Домашнее задание No3 «Циклы»
// 1.Вывести в консоль сумму всехцелыхчисел от 50 до 
// 100.

// 2.Вывести в консоль таблицу умножения на 7.
// 7 x 1 = 7
// 7 x 2 = 14
// ...
// 7 x 9 = 63

// const number = 7;
// for (let i = 1; i <= 10; i++) {
//     let multiply = number * i;
//     console.log(`${number}*${i}=${multiply}`)
// };

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
// let newObj = Object.assign({}, obj, {cost: 10} ); // здесь мы добавили еще одно значение

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

//2.2.1 Что такое Массив

// let nums  = [10, 20, 30, 45, 66];
// let input  = +prompt("Введите двухзначное число:");
// let index = nums.indexOf(input);
// if (index > -1) {
//     alert(nums[index]);
// }
// else {alert("такого нет")}

//2.2.2 добавление и удаление элементов
//запросить у пользователя 5 значений и добавить их в массив
// let arr = [];
// for (let i = 0; i < 5; i++) {
//     let input = prompt("введите значение");
//     arr.push(input);
// }
// alert(arr);

// 2.2.3 Изменение массива
//создать массив из пяти числе. запросить у пользоваеля ввод пяти чисел, разделенных запятой.
//вывести в консоль новый масси, в ключающий в себя все элементы исходного массива и числа, введенные юзером
// let nums = [11, 12, 13, 14, 15];
// let input = prompt("Введите 5 чисел");
// let userArr = input.split(",");
// let newArr = nums.concat(userArr)
// alert(newArr); 

//2.2.4 Перебор массива

//Перебираем весь массив и четные элементы делим на два
// let arr = [12, 23, 56, 78, 98];
// arr = arr.map (function (el) {
//     let newValue;

//     if (el % 2 == 0) {
//        newValue = el / 2; 
//     } else newValue = el;
//     return newValue
// })
// alert(arr);

// Задать массив из 5 числе. запросить у пользователя ввод числа. вывести в консоль новый массив,
// сформированный из элементов исходного массива меньших введенного числа.

// let arr = [23, 9, 85, 36, 99];
// let input  = +prompt("Введите число:");
// let filtered = arr.filter(function (el)
// {return el < input});
// alert(filtered);

//2.2.5 Деструктуризация массива
// В массиве olimpisc есть три часа - кол во золотых, серебряных и бронзовых медалей. Записать в отдельное переменные кол во золотых и бронзовых м
// медалей. если в массиве нет соответствующего значения, то записать в переменную 0
// let olimpisc = [12, 23, 45];
// let [gold = 0, , bronze = 0] = olimpisc;

//2.3.1 Что такое функция

//написать функцию calc , которая принимает на вход число и степень, в которую нужно возвести это число.

// function calc(num, exp) { 
//     let res = 1;
//     for (let i = 1; i <= exp; i++) {
//         res = res * num;}
//         return  res
//     }

//     let result = calc(2, 10);
//     alert(result);

// 2.3.2 Область функции
// 2.3.3 Замыкания
// function outer() {
//     let message = "Hello"
//     return function () {
//         alert(message)
//     }
// }
// const value = outer();
// const message = "Hi"
// value()
//2.3.4 Ассинхронные операции

// function counter(from, to) {
//     let  number = from;
//     const id = setInterval(() => {
//         console.log(number);

//         if (number == to) {
//             clearInterval(id);
//          } else {
//                 number++;
//             }
//         }, 1000);
//     }
//     counter(4, 8);


//2.3.5 Колбэк функции
// const request = (cb) => {
//     console.log("request");
//     cb ({ text: "Error"});

//     setTimeout(() => {
//         console.log("response");
//         const data = {text: "Hello"};

//         cb(null, data);
//     }, 2000);
// }
// request((err, data) => {
//     if (!err) {
//         console.log("Hello callback!", data);
//     } else {
//         console.error(err);
//     }
//     }
// );

//2.3.6 Промис
// напишем ассинхронную операцию, которая имитирует запрос и ответ сервера
// const request = new Promise((resolve, reject) => {
//     console.log("request");

//     setTimeout(() => {
//     console.log("response");
//     resolve();
//     }, 2000);
// });

// request.than (()) => {
//     console.log("resolved");
// },
// () => {
//     console.log("rejected")
// };

//2.3.7 Контекст вызова функции
// создать объект со свойствами a break. Добавить в объект методы sun and Mul, которые выводят в консоль сумму и произведение полей а и б 
// . добавить метод Write  который принмает два числа и запиcывает из в a и b
// const calc = {
//     a: 5,
//     b: 6,
//     sum() {
//         console.log(this.a + this.b);
//     },
//     mul() {
//         console.log(this.a * this.b);
//     },
//     write(a, b) {
//         this.a = a;
//         this.b = b;
//     }
// };
// calc.write(10, 23);
// console.log(calc);
//2.3.8 Изенение контекста функции

//Dom
//3.1.2 
// const el = document.querySelector(".last");
// console.log(el);
// el.style.color = "green"

//3.1.3 Изменение элементов
// const input = prompt("Ввдите текст:");
// const el = document.querySelector(".el");
// запросить у пользователя ввод сообщения. показать это сообщение  на странице,
// а через 2 секунды скрыть его.
// const input = prompt("Введите сообщение:");
// const messageEL = document.createElement("p");
// messageEL.innerText = input;

// const messageBox = document.querySelector(".messages");
// messageBox.append(messageEL);

// //теперь нужно сделать, чтобы сообщение скрывало через 2 сек
// setTimeout(hideMessage, 2000);

// function hideMessage() {
//     messageEL.hidden = true;

// }

//3.2.1 что такое событие
//сверстать страницу с полем ввода, кнопкой и пустым маркированным списком.
// написать программу, будет обрабатывать нажатие на кнопку, считывать занчение из поля 
// ввода и добавлять пунск с этим текстом в маркированный список.

// function buttonClick() {
//     const text = getInputText();
//     addElementToList(text);
//     clearInput();
// }
// function getInputText() {
//     const input = document.querySelector(".text-field");
//     return input.value;
// }
// function addElementToList(text) {
//     const listItem = document.createElement("li");
//     listItem.innerText = text;
//     const list = document.querySelector(".list");
//     list.append(listItem);

// }
// function clearInput() {
//     const input = document.querySelector(".text-field");
//     input.value = "";

// }

// 3.2.2 обработка событий

// Сверстать страницу, содержащую текст и кнопку. Написать программу, кторая при нажатии
// на кнопку скрывает такст.
// const button = document.querySelector('.button');
// button.addEventListener("click", hideText);

// function hideText() {
//     const text = document.querySelector('.text');
//     text.hidden = true;
//     const button = document.querySelector(".button");
//     button.removeEventListener("click", hideText);
//     button.addEventListener("click", showText);
//     }
//     function showText() {
//         const text = document.querySelector(".text");
//         text.hidden = false;

//         const button = document.querySelector(".button");
//     button.removeEventListener("click", showText);
//     button.addEventListener("click", hideText);

//     }

//              Встроенные инструменты