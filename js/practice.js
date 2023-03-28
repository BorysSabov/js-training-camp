// let - можно изменять
// cost-нельщя изменять
// let x = 6;

// x = 7;

// const y = 8;

// console.log(x, y);

// типы string number booleam null undefined

// let empty;

// console.log(typeof null);

// string

// let str = 'HHH';
// str.toLowerCase();
// console.log(str.toLowerCase());
// console.log(str.length);

//number
// let num = 10;
// console.log(typeof num);
// let test = "Some test here";
// alert(test);
// boolean false-values| false | null | undefined | "" | 0 | NaN

// операторы сравнения < > >= <= == === != !==
// console.log(5 === "5");
// console.log(5 == "5");
// // 1 не равно 7
// console.log(1 != 7);

// console.log(5 !== "5");
// console.log(undefined == null);
// console.log(undefined === null);

//  Методы
// Number
// Number.parseInt() парсит из строки целое число.
// Number.parseFloat() парсит из строки дробное число.
// Number.isNaN(val). Он проверяет, является ли указанное значение NaN или нет.
// const valueX = "10.25";
// const valueY = "some text";
// console.log(Number(valueX));
// console.log(Number(valueY));
// console.log(parseInt(valueX));
// console.log(parseInt(valueY));
// console.log(parseInt(valueX));
// console.log(parseFloat(valueX));
// console.log(Number.isNaN(valueY));

// Логические операторы && -и до первого false||- или до первого true !-не
// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && "kiwi");

// console.log(true && 0 && "kiwi");

// console.log(true || 3);

// Math.floor(num) - возвращает наибольшее целое число,
// меньшее, либо равное указанному
// console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - возвращает наименьшее целое число,
// большее, либо равное указанному числу.
// console.log(Math.ceil(1.2)); // 2

// Math.round(num) - возвращает значение числа,
// округлённое до ближайшего целого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - возвращает наибольшее число из набора
// console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - возвращает наименьшее число из набора
// console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - возведение в степень
// console.log(Math.pow(2, 4)); // 16

// Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
// console.log(Math.random()); // случайное число между 0 и 1
// console.log(Math.random() * (10 - 1) + 1); // псевдослучайное число от 1 до 10
// Методы
// indexOf() позиция на которой находиться первое совпадение (если нет вернет -1)
// includes() Проверяет входит ли подстрока в строку, возвращает буль (Регистр важен)
// endsWith() Позволяет определить, заканчивается ли строка символами (подстрокой) указанными в скобках, возвращая true или false.
// replace() и replaceAll() Возвращают новую строку, в которой первое (replace) или все совпадения (replaceAll) подстроки заменены на указанное значение.
// slice()Метод строк slice(startIndex, endIndex) используется для создания копии части или всей строки. Он делает копию элементов строки от startIndex и до, но не включая endIndex и возвращает новую строку, не изменяя оригинал.
//
// Приведение типов
// Запомните 6 ложных (falsy) значений, приводящихся к false в логическом преобразовании: 0, NaN, null, undefined, пустая строка и false. Абсолютно все остальное приводится к true.
//
// Логические операторы
// Логическое «И» &&    Если хотябы один из операндов будет приведён к false, результатом выражения будет его значение. То есть логическое «И» запинается на лжи и возвращает то на чём запнулось или последний операнд.
// При выполнении логического «И», правый операнд может не вычисляться, в случае если левый был приведен к false.
// Логическое or  ||    Оператор || приводит все операнды к булю и возвращает значение одного из них.Левый операнд если его можно привести к true, и правый в остальных случаях.
// Логическое not  !    Логическое «НЕ» это унарный оператор - выполняющий операцию над одним операндом справа.
//

// Инструкция if...else

let cost = 10;
let task = "done";

if (task === "done") {
  cost;
} else {
  cost = 0;
}
console.log(cost);
if (task === "not ready") {
  cost;
} else {
  cost = 0;
}
console.log(cost);
// Тернарный оператор: условие ?  :
cost = 10 <= 18 ? "Yes" : "No";
console.log(cost);

/////////////////////////////////////Занятие с ментором
// https://www.youtube.com/watch?v=Nv3Kn7TMMjk обьекты видео подробно

// бэк для этой функции https://6251bfb67f7fa1b1ddde85d8.mockapi.io/api/contacts
// function updateNumber(array) {
//   const emptyArr = array
//     .filter(({ number }) => !number)
//     .map((contact) => ({
//       ...contact,
//       number: "911",
//     }));

//   const arr = array.filter(({ number }) => number);

//   return [...emptyArr, ...arr];
// }
