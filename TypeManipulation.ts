/*
████████╗██╗░░░██╗██████╗░███████╗
╚══██╔══╝╚██╗░██╔╝██╔══██╗██╔════╝
░░░██║░░░░╚████╔╝░██████╔╝█████╗░░
░░░██║░░░░░╚██╔╝░░██╔═══╝░██╔══╝░░
░░░██║░░░░░░██║░░░██║░░░░░███████╗
░░░╚═╝░░░░░░╚═╝░░░╚═╝░░░░░╚══════╝

███╗░░░███╗░█████╗░███╗░░██╗██╗██████╗░██╗░░░██╗██╗░░░░░░█████╗░████████╗██╗░█████╗░███╗░░██╗
████╗░████║██╔══██╗████╗░██║██║██╔══██╗██║░░░██║██║░░░░░██╔══██╗╚══██╔══╝██║██╔══██╗████╗░██║
██╔████╔██║███████║██╔██╗██║██║██████╔╝██║░░░██║██║░░░░░███████║░░░██║░░░██║██║░░██║██╔██╗██║
██║╚██╔╝██║██╔══██║██║╚████║██║██╔═══╝░██║░░░██║██║░░░░░██╔══██║░░░██║░░░██║██║░░██║██║╚████║
██║░╚═╝░██║██║░░██║██║░╚███║██║██║░░░░░╚██████╔╝███████╗██║░░██║░░░██║░░░██║╚█████╔╝██║░╚███║
╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═╝╚═╝░░░░░░╚═════╝░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝░╚════╝░╚═╝░░╚══╝

    В этом разделе ты узнаешь:
- что такое Generics и как с ними работать
- что такое манипуляторы типов и их виды
- keyof и typeof операторы
- как расширять существующие типы

Внимательно изучи соответствующий материал официальной документации и переходи к парктическим заданиям:    
--> https://www.typescriptlang.org/docs/handbook/2/types-from-types.html <--
*/
/*  
        Задание 1 
    ~ Объявить несколько массивов разного типа
    ~ Написать функцию, которая будет возвращать рандомный элемент этого массива используя generic type
*/
// let num: number[]=[5,4,3]
// let str: string[]=['red', 'green', 'blue']

//  function rand<T> (arr:T[]):T {
//     return arr[Math.floor(Math.random()*arr.length)];
// }
// let item = rand(num)
// console.log(item);

/*  
        Задание 2 
    ~ Функция myFilter повторяет функционал стандартной функции filter.
    ~ Раскомментировать код.
    ~ Добавить в функцию аннотацию типов с использованием generic type
    ~ Вывести результат работы функции в консоль
*/

// function myFilter<Type>(arr, predicate) {
// const result: Type[] = [];
// for (const elm of arr) {
//     if (predicate(elm)) {
//     result.push(elm);
//     }
// }
// return result;
// }
// const res = myFilter([1, 2, 3, 4, 5], num => num % 2 === 0);
// console.log(res);

// // Пример использования

// const res2 = myFilter(['foo', 'hoge', 'bar'], str => str.length >= 4);

/*  
        Задание 3 
    ~ Раскомментировать код.
    ~ Определить тип Price
    ~ Написать пример и вывести в консоль результат использования функции
*/
// type Price = "low" | "medium" | "high";

// function getPrice(price: Price): number {
//   switch (price) {
//     case "low":
//       return 50;
//     case "medium":
//       return 100;
//     case "high":
//       return 150;
//   }
// }

// let val = getPrice("low");
// console.log(val);

/*  
        Задание 4
    ~ Раскомментировать код.
    ~ Определить и указать тип функции addAge, которая добавляет к объекту новое свойство age.
    ~ Вывести в консоль результат использования функции
*/

// function addAge(obj):object {
//     const age = 25;
//     return {
//       ...obj,
//       age
//     };
//   }
//   type P = ReturnType<typeof addAge>

//   let ob = {
//        name: "Jo"
//   }

//   let value = addAge(ob)
//   console.log(value);

/*  
        Задание 5
    ~ Раскомментировать код.
    ~ Определить и указать тип аргументов функции reducer.
    ~ action.type может быть только трех видов (increment, decrement, reset)
*/

// type actionType= 'increment'|'decrement'|'reset'

// const reducer = (state: number, action:any) => {
//     let actype:actionType = action.type
//   switch (actype) {
//     case "increment":
//       return state + action.amount;
//     case "decrement":
//       return state - action.amount;
//     case "reset":
//       return action.value;
//   }
// };

// // // Пример использования

// let result = reducer(100, {
//     type: 'increment',
//     amount: 10,
// }) === 110; //true
// console.log(result);

/*  
        Задание 6
    ~ Дано два типа Keys и Accessors
    ~ Получить из существующих типов тип Methods ("getName" | "getAddress" | "setName" | "setAddress") применяя Manipulation Types
*/

// type Keys = 'name' | 'address';
// type Accessors = 'get' | 'set';

// type Methods  = `${Accessors}${Keys}`

/*  
        Задание 7
    ~ Дан тип с опциональными свойствами
    ~ На основании типа User создать тип без опциональных свойств
    ~ Использовать модификаторы типа 
*/
// type User = {
//   id: string;
//   name: string;
//   age?: number;
//   sex?: string;
// };

// type modernUser= User&{
//     id?: string,
//     name?: string
// }



//   id?: "34",
//   name: "43",

