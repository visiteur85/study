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