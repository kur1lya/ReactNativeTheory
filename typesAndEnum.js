/*

████████╗██╗░░░██╗██████╗░███████╗░██████╗  ░█████╗░███╗░░██╗██████╗░  ███████╗███╗░░██╗██╗░░░██╗███╗░░░███╗░██████╗
╚══██╔══╝╚██╗░██╔╝██╔══██╗██╔════╝██╔════╝  ██╔══██╗████╗░██║██╔══██╗  ██╔════╝████╗░██║██║░░░██║████╗░████║██╔════╝
░░░██║░░░░╚████╔╝░██████╔╝█████╗░░╚█████╗░  ███████║██╔██╗██║██║░░██║  █████╗░░██╔██╗██║██║░░░██║██╔████╔██║╚█████╗░
░░░██║░░░░░╚██╔╝░░██╔═══╝░██╔══╝░░░╚═══██╗  ██╔══██║██║╚████║██║░░██║  ██╔══╝░░██║╚████║██║░░░██║██║╚██╔╝██║░╚═══██╗
░░░██║░░░░░░██║░░░██║░░░░░███████╗██████╔╝  ██║░░██║██║░╚███║██████╔╝  ███████╗██║░╚███║╚██████╔╝██║░╚═╝░██║██████╔╝
░░░╚═╝░░░░░░╚═╝░░░╚═╝░░░░░╚══════╝╚═════╝░  ╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░  ╚══════╝╚═╝░░╚══╝░╚═════╝░╚═╝░░░░░╚═╝╚═════╝░

    В этом разделе ты узнаешь:
- что такое константы и переменные
- почему TypeScript является строго типизированным языком
- какие типы данных имеются в TypeScript и как с ними работать
- как проверить тип переменной
- что такое Enums и Tuple

    Внимательно изучи соответствующий материал официальной документации и переходи к парктическим заданиям:
--> https://www.typescriptlang.org/docs/handbook/basic-types.html <--
--> https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases <--
*/
/*
        Задание 1
    ~ Объявить переменные ВСЕХ возможных типов и присвоить им значения.
    ~ Присвоить ранее объявленной переменной значение другого типа (Что будет в этом случае? Будет ли ошибка компиляции?) ....будет ошибка
    ~ Вывести в консоль значение каждой переменной с указанием ее имени (формат сообщения '<name> = <value>')
*/
// //1. type string
// let someText: string = "decription";
// console.log(someText);
// //2. type number
// let someNumber: number = 23;
// console.log(someNumber);
// //3. type bigint
// // let someBigint: bigint = 110n;
// //4. type boolean
// let bool: boolean = true;
// console.log(bool);
// //5. type array
// let arr: string[] = ["red", "blue", "green"];
// console.log(arr)
// //6. type tuple
// let arrTuple: [boolean, number];
// arrTuple = [false, 0];
// console.log(arrTuple)
// //Error
// // arrTuple = ["ss", 0, ];
// //7. type enum
// enum Car {
//   Hummer,
//   Kia,
//   Subaru,
// }
// let c: Car = Car.Kia;
// console.log(c);
// //8. type uknown
// let something: unknown = "string";
// something = false;
// console.log(something);
// //Error
// // something.fun()
// //9. type any   ..без проверки типов и свойств
// let notSure: any = "something";
// notSure = true;
// console.log(notSure);
// // notSure.func();
// //10.type void  без возвращения значений
// function empty():void {
//   console.log("empty func");
// }
// console.log(empty());
// //11. type undefined and null
// let u: undefined = undefined;
// let n: null = null;
// console.log(u,n);
// //12. type never  -?
// // function nev(): never {
// //   while (true) {}
// // }
// // console.log(nev());      ...infinity cicle
// //13. type object
// const proto = {};
// Object.create(proto); //Ok
// Object.create(null); //Ok
// console.log(proto);
// // Object.create(undefined); //Error
// //14. type assertions
// let value: unknown = "four";
// let sameValue: number = (value as string).length;
// console.log(value)
// console.log(sameValue)
/*
        Задание 2
    ~ Написать функцию принимающую в качестве аргументов два числа, которая возвращает их сумму
    ~ Объявить три константы a = 5, b = 7, eight = '8'
    ~ Написать проверку типов аргументов функции и в случае передачи константы eight выводить ошибку "Incorrect input!"
*/
// const a: number = 5;
// const b: number = 7;
// const eight: string = "8";
// function sum(x, y) {
//   if (typeof x === "string" || typeof y === "string") {
//     console.log("Incorrect input !");
//   } else {
//     console.log(x + y);
//   }
// }
// sum(a, b);
/*
        Задание 3
    ~ Объявить переменную A типа any и задать ей значение 'example'
    ~ Написать функцию, которая проверит, что А не является чем-то из следующего списка null, undefined, NaN, '', 0, false
*/
// let A: any = 'example';
// function examination() {
//   if ( A ) {
//     console.log("work");
//   }
// }
// examination();
/*
        Задание 4
    ~ Написать функцию combine с аргументами, которые могут быть как типа number так и string.
    ~ Третим аргументом передаем параметр со значениями 'as-number' или 'as-string'.
    ~ При значении 'as-number' выводить сумму чисел, при 'as-string' объединение строк.
*/
// function combine(x: any, y: any, z: string) {
//   if (z === "as-number") {
//     console.log(x + y);
//   } else if (z === "as-string") {
//     console.log(x + ' ' + y);
//   }
// }
// combine('mama','mia','as-string')
/*
        Задание 5   ???
    ~ Объявить переменную A типа any и задать ей значение 'example'. Объявить константу типа Tuple с кодом ошибки и ее текстом
    ~ Написать функцию, которая проверит, что А не является чем-то из следующего списка null, undefined, NaN, '', 0, false
    ~ Если условие не выполняется вывести код и текст ошибки консоль
    ~ Проверить работу функции присвоив переменной А значение undefined
*/
// let A: any = 'undefined';
// let errText: [number, string];
// errText = [23, "ss"];
// function examination() {
//   try {
//     if (A) {
//       console.log("work");
//     }
//   } catch (e) {
//     console.log(e.name);
//   }
// }
// examination()
/*
        Задание 6
    ~ Создать объект person cо свойствами: имя, возраст, пол, роль (Администратор, Автор, Модератор). Например (Jon, 19 years, men, Author).
    ~ Для свойства Роль использовать enum.
    ~ Вывести в консоль название свойства и его значение. Каждое свойство на новой строке.
*/
// enum Role {
//   administrator,
//   author,
//   moderator,
// }
// let person: object = {
//   name: "Jon",
//   age: 19,
//   sex: "Men",
//   role: Role[1],
// };
// for (let key in person) {
//   console.log(key + ': ' + person[key]);
// }
/*
        Задание 7
    ~ Перечислению (Enum) Роль с предыдущего задания присвоить текстовые значения.
    ~ Создать несколько объектов подобных объекту person с Задания 6 c разными ролями.
    ~ Написать функцию которая принимает массив объектов и выводит в консоль сообщения следующего вида "My name is {name}. I am {role}" для каждого объекта.

*/
var Role;
(function (Role) {
    Role["administrator"] = "administrator";
    Role["author"] = "author";
    Role["moderator"] = "moderator";
})(Role || (Role = {}));
var person1 = {
    name: "Jon",
    age: 19,
    sex: "Men",
    role: Role['administrator']
};
var person2 = {
    name: "Kate",
    age: 21,
    sex: "Woman",
    role: Role['author']
};
var person3 = {
    name: "Karl",
    age: 18,
    sex: "Men",
    role: Role['moderator']
};
var arr = [person1, person2, person3];
console.log(Role[0]);
function someText(arr) {
    arr.forEach(function (element) {
        console.log("my name is " + element.name + ". I am " + element.role);
    });
}
someText(arr);
/*
        Задание 8 ????
    ~ Используйте функцию с Задания 2 для сложения двух чисел.
    ~ Написать функцию addAndHandle, которая будет возвращать результат вычисления в качестве Callback.
    ~ Явно указать тип возвращаемого значения для функций
    ~ Итоговый вызов функции должен иметь следующий вид:
        addAndHandle(10, 20, (result) => {
            console.log(result)
        })

*/
function sum(x, y) {
    if (typeof x === "string" || typeof y === "string") {
        console.log("Incorrect input !");
    }
    else {
        console.log(x + y);
    }
}
function addAndHandle() {
}
/*
        Задание 9
    ~ Написать функцию, с возвращаемым значением типа never
*/
function never() {
    while (true) { }
}
/*
        Задание 10
    ~ Создать вычисляемое перечисление с городами (Харьков, Киев, Львов, Одесса) и их почтовыми индексами.
    ~ Написать функцию. которая возвращает индекс города.
    ~ Вывести в консоль города с индексами.
*/
//Добавить код сюда...
/*
        Задание 11
    ~ Создай 5 строк с названием стран
    ~ Если в названии страны встречается буква А, выведи ее нзавание в консоль
*/
//Добавить код сюда...
/*
        Задание 12
    ~ Объявить несколько массивов типа number и заполнить их разным количеством элементов.
    ~ Объявить Tuple в который можно передать любой из объявленных массивов и текстовое значение.
    ~ Создать функцию в качестве аргумента которой созданный Tuple. Вывести в консоль текстовое значение из Tuple и количество элементов массива цифр
*/
//Добавить код сюда...
/*
        Задание 13
    ~ Написать метод without, который будет принимать объект со свойствами разных типов и тип.
    ~ Метод without должен вернуть копию объекта, но уже без свойств переданного типа .
*/
//Добавить код сюда...
/*
        Задание 14
    ~ Написать функцию isEmpty, которая проверяет пустой ли объект, независимо от его вложенности. Должен венуть true для объектов { a: { b: undefined }, { a: { b: [] } }, {}, { a: { b: [ { c: [] } ] } }
*/
//Добавить код сюда...
//# sourceMappingURL=TypesAndEnums.js.map
