/*


██╗███╗░░██╗████████╗███████╗██████╗░███████╗░█████╗░░█████╗░███████╗░██████╗  
██║████╗░██║╚══██╔══╝██╔════╝██╔══██╗██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝  
██║██╔██╗██║░░░██║░░░█████╗░░██████╔╝█████╗░░███████║██║░░╚═╝█████╗░░╚█████╗░  
██║██║╚████║░░░██║░░░██╔══╝░░██╔══██╗██╔══╝░░██╔══██║██║░░██╗██╔══╝░░░╚═══██╗  
██║██║░╚███║░░░██║░░░███████╗██║░░██║██║░░░░░██║░░██║╚█████╔╝███████╗██████╔╝  
╚═╝╚═╝░░╚══╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░╚══════╝╚═════╝░  

                    ░█████╗░███╗░░██╗██████╗░  
                    ██╔══██╗████╗░██║██╔══██╗  
                    ███████║██╔██╗██║██║░░██║  
                    ██╔══██║██║╚████║██║░░██║  
                    ██║░░██║██║░╚███║██████╔╝  
                    ╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░  

        ░█████╗░██╗░░░░░░█████╗░░██████╗░██████╗███████╗░██████╗
        ██╔══██╗██║░░░░░██╔══██╗██╔════╝██╔════╝██╔════╝██╔════╝
        ██║░░╚═╝██║░░░░░███████║╚█████╗░╚█████╗░█████╗░░╚█████╗░
        ██║░░██╗██║░░░░░██╔══██║░╚═══██╗░╚═══██╗██╔══╝░░░╚═══██╗
        ╚█████╔╝███████╗██║░░██║██████╔╝██████╔╝███████╗██████╔╝
        ░╚════╝░╚══════╝╚═╝░░╚═╝╚═════╝░╚═════╝░╚══════╝╚═════╝░

    В этом разделе ты узнаешь:
- что такое Interfaces
- основные принципы работы с Interfaces
- о Optional и Readonly свойствах Interface
- как расширить существующий Interfaces
- что такое Utility Types и как они упрощают базовые преобразования типов
- что такое классы
- что такое свойства и методы
- что такое наследование классов

    Внимательно изучи соответствующий материал официальной документации и переходи к парктическим заданиям:    
--> https://www.typescriptlang.org/docs/handbook/interfaces.html#introduction <--
--> https://www.typescriptlang.org/docs/handbook/utility-types.html <--
--> https://www.typescriptlang.org/docs/handbook/2/classes.html <--
*/

/*
        Задание 1
    ~ Раскомментировать строки кода ниже
    ~ Учитывая данные определить интерфейс User
    ~ Использовать интерфейс User
*/

// export type User = {
//     name: string
//     age: number
//     occupation: string

// }

// export const users: User[] = [
//   {
//     name: "Max Mustermann",
//     age: 25,
//     occupation: "Chimney sweep",

//   },
//   {
//     name: "Kate Müller",
//     age: 23,
//     occupation: "Astronaut",
//   },
// ];

// export function logPerson(user: User) {
//   console.log(` - ${user.name}, ${user.age}`);
// }

// console.log("Users:");
// users.forEach(logPerson);

/*
        Задание 2
    ~ Используем код Задания 1 (копируем, комментируем и вставляем ниже)
    ~ Добавить в массив User объекты { name: 'Jane Doe', age: 32, role: 'Administrator'},  { name: 'Bruce Willis', age: 64, role: 'World saver' }
    ~ Объявить интерфейс Admin, который бы соответствовал новым объектам
    ~ Внести изменения в код, что бы не было ошибок
*/
// export interface Admin  {
//     role?: string
// }
//  interface User extends Admin   {
//   name: string;
//   age: number;
//   occupation?: string;
// };

// export const users: User []  = [
//   { name: "Jane Doe", age: 32, role: "Administrator" },
//   { name: "Bruce Willis", age: 64, role: "World saver" },

//   {
//     name: "Max Mustermann",
//     age: 25,
//     occupation: "Chimney sweep",
//   },
//   {
//     name: "Kate Müller",
//     age: 23,
//     occupation: "Astronaut",
//   },
// ];

// export function logPerson(user: User) {
//   console.log(` - ${user.name}, ${user.age}, `);
// }

// console.log("Users:");
// users.forEach(logPerson);

/*
        Задание 3
    ~ Используем код Задания 2 (копируем, комментируем и вставляем ниже)
    ~ Изменить функцию logPerson таким образом, что бы все свойства объекта были выведены в консоль  (включая role и occupation)
*/

// export interface Admin  {
//     role?: string
// }
// export interface User extends Admin   {
//   name: string;
//   age: number;
//   occupation?: string;
// };

// export const users: User []  = [
//   { name: "Jane Doe", age: 32, role: "Administrator" },
//   { name: "Bruce Willis", age: 64, role: "World saver" },

//   {
//     name: "Max Mustermann",
//     age: 25,
//     occupation: "Chimney sweep",
//   },
//   {
//     name: "Kate Müller",
//     age: 23,
//     occupation: "Astronaut",
//   },
// ];

// export function logPerson(user: User) {
//   console.log(` - ${user.name}, ${user.age},${user.role},${user.occupation} `);
// }

// console.log("Users:");
// users.forEach(logPerson);

/*
        Задание 4 ???
    ~ Используем код Задания 3 (копируем, комментируем и вставляем ниже)
    ~ Для определения типа аргумента person в функции logPerson используем следующие функции

        export function isAdmin(person: Person) {
            return person.type === 'admin';
        }

        export function isUser(person: Person) {
            return person.type === 'user';
        }

    ~ Как помочь TS понять какой фактический тип передается в эти функции, что бы мы могли без ошибок использовать в logPerson следующее выражение
     if (isAdmin(person)) {
        additionalInformation = person.role;
     }
*/

// export interface Admin {
//   role?: string;
//   type?: string;
// }
// export interface Person extends Admin {
//   name: string;
//   age: number;
//   occupation?: string;
// }

// export const users: Person[] = [
//   { name: "Jane Doe", age: 32, role: "Administrator" },
//   { name: "Bruce Willis", age: 64, role: "World saver" },

//   {
//     name: "Max Mustermann",
//     age: 25,
//     occupation: "Chimney sweep",
//   },
//   {
//     name: "Kate Müller",
//     age: 23,
//     occupation: "Astronaut",
//   },
// ];

// export function isAdmin(user: Person) {
//   return user.type === "admin";
// }

// export function isUser(user: Person) {
//   return user.type === "user";
// }

// export function logPerson(user: Person) {
//   let additionalInformation:string;
//   if (isAdmin(user)) {
//     additionalInformation = user.role;
//   }
//   if (isUser(user)) {
//     additionalInformation = user.occupation;
//   }

//   console.log(` - ${user.name}, ${user.age},${user.role},${user.occupation} `);
// }

// console.log("Users:");
// users.forEach(logPerson);

/*
        Задание 5
    ~ Используем код Задания 4 (копируем, комментируем и вставляем ниже)
    ~ Необходимо добавить свойство type в существующие интерфейсы и соответствующие объекты (типов будет три user, admin, superuser)
    ~ Определить интерфейс SuperUser, который содержит все поля от User и Admin за исключением поля type (используй Utility Types). Поле type указать явно и задать соответсвующее значение.
    ~ Написать функцию isSuperUser
    ~ Вывести в консоль отдельные списки Users, Admins, Super Users
*/

//Добавить код сюда...

/*
        Задание 6
    ~ Объяви класс Weather, который будет иметь два свойства windSpeed и chanceOfRain числового типа.
    ~ У класса должен быть обязательный инициализатор, который принимает значения скорости ветра (windSpeed) и шанс дождя (chanceOfRain)
    ~ Добавь в класс функцию isDayForWalk. Если скорость ветра (windSpeed) меньше 5 метров и шанс дождя (chanceOfRain) меньше 30 процентов, то функция должна вернуть true,  иначе  - false.
    ~ Создай экземпляр класса и выведи в консоль удачный ли сегодня день для прогулок;)
*/

// class Weather {
//   windSpeed: number;
//   chanceOfRain: number;
//   constructor(wind: number, rain: number) {
//       this.windSpeed = wind
//       this.chanceOfRain =rain
//   }
//   isDayForWalk():boolean{
//       if(this.windSpeed<5 && this.chanceOfRain<30){
//           return true
//       }
//       else{
//           return false
//       }
//   }
// }

// let sunday: Weather = new Weather(3,40)
// let goodWeather = sunday.isDayForWalk()
// console.log(sunday);
// console.log(`Good day for walking? ${goodWeather}`);

/*
        Задание 7
    ~ Объяви класс Point2D, который будет иметь два свойства x и y числового типа. Свойства должны быть инициализированными 0 по умолчанию.
    ~ Добавь в класс Point2D, метод  reset, который будет устанавливать координаты x и y в 0.
    ~ Добавь инициализатор в класс Point2D, который в качестве параметров будет принимать значения для координат x и y.
    ~ Объяви класс Point3D, который будет дочерним классом по отношению к классу Point2D. Добавь в него свойство z, которое будет проинициализировано по умолчанию нулем
    ~ Добавь инициализатор, который будет в качестве параметров принимать значения для координат x, y и z
    ~ Cоздай экземпляр класса Point3D с именем point3D
    ~ Сделай так, чтобы при вызове метода reset, также сбрасывалась в ноль и координата z
    ~ Используй механизм переопределения методов!
*/

// class Point2D {
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }

//   x: number = 2;
//   y: number = 3;

//   reset() {
//     this.x = 0;
//     this.y = 0;
//   }
// }

// class Point3D extends Point2D {
//   constructor(x:number, y:number, z: number) {
//     super(x,y);
//       this.z=z
//   }

//   z: number = 0;
//  reset(){
//     super.reset()
//     this.z=0
//  }
// }

// let point3D: Point3D = new Point3D(3,5,2)
// console.log(point3D);
// point3D.reset()
// console.log(point3D);

/*
        Задание 8
    ~ Реализуй иерархию классов, представленной на Рисунке 1
*/

// class Telephone {
//   makecall(): void {}
//   hangUp(): void {}
// }

// class Landline extends Telephone {}

// class Rotary extends Landline {
//    rotaryInput(): void {}
// }

// class PushButton extends Landline {
//   buttonInput(): void {}
// }

// class Celluar extends Telephone {
//  sendSMS(): void {}
// }

// class Smart extends Celluar {
//   touchInput(): void {}
//  accesInternet(): void {}
// }

// class NonSmart extends Celluar {
//    ButtonInput(): void {}
// }

// class Iphone extends Smart {
//  Iphone(): void {}
// }

// class Android extends Smart {
//  Android(): void {}
// }
// class Windows extends Smart {
//  Windows(): void {}
// }
