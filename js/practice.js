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
// console.log(num % 3);

// boolean false-values| false | null | undefined | "" | 0 | NaN

// операторы сравнения < > >= <= == === != !==
// console.log(5 === "5");
// console.log(5 == "5");
// 1 не равно 7
// console.log(1 != 7);
//
// console.log(5 !== "5");
// console.log(undefined == null);
// console.log(undefined === null);


// Логические операторы && -и до первого false||- или до первого true !-не
// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && "kiwi");

// console.log(true && 0 && "kiwi");

// console.log(true || 3);





/////////////////////////////////////Занятие с ментором 
// https://www.youtube.com/watch?v=Nv3Kn7TMMjk обьекты видео подробно

// бэк для этой функции https://6251bfb67f7fa1b1ddde85d8.mockapi.io/api/contacts
function updateNumber(array) {
    const emptyArr = array
        .filter(({ number }) => !number)
        .map(contact => ({
            ...contact,
            number: '911',
        }));

    const arr = array.filter(({ number }) => number);

    return [...emptyArr, ...arr];
}