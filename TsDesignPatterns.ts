/*
    ████████╗░██████╗  ██████╗░███████╗░██████╗██╗░██████╗░███╗░░██╗
    ╚══██╔══╝██╔════╝  ██╔══██╗██╔════╝██╔════╝██║██╔════╝░████╗░██║
    ░░░██║░░░╚█████╗░  ██║░░██║█████╗░░╚█████╗░██║██║░░██╗░██╔██╗██║
    ░░░██║░░░░╚═══██╗  ██║░░██║██╔══╝░░░╚═══██╗██║██║░░╚██╗██║╚████║
    ░░░██║░░░██████╔╝  ██████╔╝███████╗██████╔╝██║╚██████╔╝██║░╚███║
    ░░░╚═╝░░░╚═════╝░  ╚═════╝░╚══════╝╚═════╝░╚═╝░╚═════╝░╚═╝░░╚══╝

    ██████╗░░█████╗░████████╗████████╗███████╗██████╗░███╗░░██╗░██████╗
    ██╔══██╗██╔══██╗╚══██╔══╝╚══██╔══╝██╔════╝██╔══██╗████╗░██║██╔════╝
    ██████╔╝███████║░░░██║░░░░░░██║░░░█████╗░░██████╔╝██╔██╗██║╚█████╗░
    ██╔═══╝░██╔══██║░░░██║░░░░░░██║░░░██╔══╝░░██╔══██╗██║╚████║░╚═══██╗
    ██║░░░░░██║░░██║░░░██║░░░░░░██║░░░███████╗██║░░██║██║░╚███║██████╔╝
    ╚═╝░░░░░╚═╝░░╚═╝░░░╚═╝░░░░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░

        В этом разделе ты узнаешь:
- что такое паттерны проектирования и когда их использовать
- суть паттерна Декоратор

    Внимательно изучи соответствующий материал официальной документации и переходи к парктическим заданиям:    
--> https://refactoring.guru/ru/design-patterns <--
    К Заданию 1
--> https://refactoring.guru/ru/design-patterns/adapter <--
    К Заданию 2
--> https://refactoring.guru/ru/design-patterns/observer <--
    К Заданию 3 
--> https://refactoring.guru/ru/design-patterns/abstract-factory <--
====================================================================
    ПРОДВИНУТЫЙ УРОВЕНЬ
    К Заданию 4
--> https://refactoring.guru/ru/design-patterns/decorator <--
    К Заданию 5
--> https://refactoring.guru/ru/design-patterns/facade <--
    К Заданию 6
--> https://refactoring.guru/ru/design-patterns/state <--

*/

// БАЗОВЫЙ УРОВЕНЬ
/*
        Задание 1
    Реализуй паттерн Adapter в следующем контексте: 
    Есть два класса: автомобиль и эвакуатор. Каждый из них, независимо друг от друга может ездить. 
    У автомобиля обнаружили несправность. Хозяин вызвал эвакуатор и автомобиль начали буксировать. 
    Опишите эту ситуацию реализуя паттерн проектирования с выводами текстовых сообщений в консоль.
*/
// interface Car {
//   move(): void;
// }

// class Automobile implements Car {
//   move() {
//     console.log("car rides ");
//   }

//   breaking(): void {
//     let breaks: boolean = true;
//     if (breaks) {
//       console.log("car breaks down");
//       console.log("tow Truck call");
//     } else {
//       console.log("drive the car to the point");
//     }
//   }
// }
// class TowTruck implements Car {
//   move() {
//     console.log("tow truck driving ");
//   }

//   call() {
//     let breaks: boolean = true;
//     if (breaks) {
//       console.log("the tow truck accepted the call ");
//       console.log("tow truck took the broken car");
//     } else {
//       console.log("the tow truck goes to the garage");
//     }
//   }
// }

// class Adapter {
//   readonly automobile = new Automobile();
//   readonly towTruck = new TowTruck();
// }

// let adapter = new Adapter();
// adapter.automobile.move();
// adapter.automobile.breaking();

// adapter.towTruck.move();
// adapter.towTruck.call();
/*
        Задание 2
    Реализуй паттерн Observer в следующем контексте: 
    В доме срабатывает сигнализация. Она оповещает о тревоге охранную 
    фирму и хозяина дома, после отключения сигнализации, все так же получают соответствующее уведомление.
*/

// class Signaling {
//   observers: any[];
//   constructor() {
//     this.observers = [];
//   }

//   subcribe(f) {
//     this.observers.push(f);
//     console.log(`${f.name}  has been subscribed`);
//   }

//   unsubcribe(f) {
//     this.observers = this.observers.filter((subcriber) => subcriber !== f);
//     console.log(`${f.name}  has been unsubscribed`);
//   }

//   notify(data) {
//     this.observers.forEach((observer: any) => observer(data));
//   }
// }

// class security {
//   constructor(data) {
//     console.log(`the guards received a notification: ${data}`);
//   }
// }

// class owner {
//   constructor(data) {
//     console.log(`the master received a notification: ${data}`);
//   }
// }

// let signaling = new Signaling();

// signaling.subcribe(security);

// signaling.subcribe(owner);

// signaling.notify("alarm triggered");

// console.log("owner and guard arrived at the house ");

// signaling.notify("alarm disabled");

/* 
        Задание 3
    Реалиуй паттерн Abstract Factory в следующем контексте:
    Есть два производителя Samsung и Apple. Каждый из этих производителей выпускает различные девайсы (телефоны, планшеты, компьютеры и т.д).
    Фабрика должна предоставлять возможность создавать девайсы любой марки и любого типа. 
*/

// interface TechnicFactory {
//   createTelephone():void;
//   createTablet(): void;
//   createComputer(): void;
// }

// class SamsungFactory implements TechnicFactory {

//   createTelephone() {
//     return new SamsungPhone();
    
//   }
//   createTablet() {
//     return new SamsungTablet();
//   }

//   createComputer() {
//     return new SamsungComputer();

//   }
// }


// class SamsungPhone {

//    createSamsungPhone() {
//     console.log(`create Samsung phone  `);
//   }
// }

// class SamsungTablet {
//   createSamsungTablet() {
//     console.log(`create Samsung tablet`);
//   }
// }

// class SamsungComputer {
//   createSamsungComputer() {
//     console.log(`create Samsung computer`);
//   }
// }

// class AppleFactory implements TechnicFactory {
//   createTelephone() {
//     return new ApplePhone();
//   }
//   createTablet() {
//     return new AppleTablet();
//   }

//   createComputer() {
//     return new AppleComputer();

//   }
// }

// class ApplePhone {

//   createApplePhone() {
//     console.log(`create Iphone  `);
//   }
// }

// class AppleTablet {
//   createAppleTablet() {
//     console.log(`create Ipad `);
//   }
// }

// class AppleComputer {
//   createAppleComputer() {
//     console.log(`create Imac `);
//   }
// }

// let samsung = new SamsungFactory();
// let apple = new AppleFactory()


// samsung.createTelephone().createSamsungPhone();
// apple.createComputer().createAppleComputer()





// ПРОДВИНУТЫЙ УРОВЕНЬ
/*
        Задание 4
    Реализуй паттерн Decorator в следующем контексте: 
    Фастфуд предлагает два комбо набора Чизбургер меню и Гамбургер меню.
    Каждый из этих наборов могут дополняться различными напитками или десертами на выбор покупателя, из-за чего изменяется его цена.
    Поступил заказ на два меню (Чизбургер меню и Гамбургер меню), одно с соком, а второе с колой и пончиком. 
    Помогите фастфуду приготовить и вывести заказ в консоль, не создавая новых видов меню.
*/

//Добавить код сюда...

/*
        Задание 5
    Реализуй паттерн Facade в следующем контексте: 
    У вас умный дом. Он напичкан многими девайсами и автоматическими приборами. 
    Когда вы уходите или приходите домой каждый раз повторяете множество одних и тех же действий (вкл/выкл света, кондиционера, музыки и т.д).
    Создайте две запрограммированных поведения системы умного дома - "хозяин дома", "хозяин ушел".
*/

//Добавить код сюда...

/*
        Задание 6
    Реализуй паттерн State в следующем контексте: 
    Допустим, что мобильное приложение перед выливкой в стор, может находится в 4-x состояних: waiting for review, in review, ready for sale, published.
    В каждом состоянии мы можем вызвать методы Publish и Cancel, уоторые будет работать по-разному:
     - из waiting for review Publish отправит приложение на проверку, Cancel вызвать нельзя
     - из in review Publish отправит в ready for sale, если проверка прошла успешно, 
       либо вызовет Cancel, при обнаружении ошибок и вернет в начальное состояние.
    - из ready for sale пользователь может вызвать Cancel и отменить выливку, или Publish и перейти в состояние published.
    - из состояния published нельзя вызывать методы Publish и Cancel
*/

