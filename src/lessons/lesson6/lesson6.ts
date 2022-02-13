console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// console.dir(function (){});
// console.dir(class {});

// class Test {
//     name: string;
//     age: number;
//     //sayHi: Function;
//     city: string = 'Minsk';
//
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//         //this.sayHi = function (){};
//     }
//
//     sayHi() {
//         console.log(this.name);
//     }
//
//     bindFunc = () => {
//         console.log(this.age);
//     }
//
//
// }
//
// let obj = new Test('Evgen', 33);
// console.log(obj);
// obj.city = 'Moscow';



// class Test {
//     name: string;
//
//     constructor(name: string) {
//         this.name = name;
//     }
//
//     sayHi() {
//         console.log('Hello from parent')
//     }
//
//     arrow = () => {
//         console.log('arrow Hello from parent')
//     }
//
// }
//
// class Test2 extends Test {
//     age: number;
//     constructor(name: string, age: number) {
//         super(name); // this.arrow =
//         this.age = age;
//     }
//
//     sayBye() {}
//
//     sayHi() {
//         console.log('Hello from child')
//         super.sayHi()
//     }
//
//     arrow = () => {
//         console.log('YoYoYo Hello from parent')
//     }
// }
//
// let obj = new Test2(' Evgen', 33);
// console.log(obj)
// obj.sayHi();
// obj.arrow();





// class Test {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     sayHi() {
//         console.log('Hello from parent')
//     }
//
// }
// class Test2 extends Test {
//     age: number;
//     constructor(name: string, age: number) {
//         super(name); // this.arrow =
//         this.age = age;
//     }
//     sayBye() {}
// }
// class Test3 extends Test2 {
//     city: string;
//     constructor(name: string, age: number, city: string) {
//         super(name, age);
//         this.city = city;
//     }
//     sayYo() {}
//
//     a = () => {}
// }
//
// let obj = new Test3('Yo', 10, 'YoCity');
// console.log(obj);
// obj.a()

// interface ITest {
//     name: string;
//     sayBue: Function;
// }
//
// interface ITest2 {
//     name: string;
//     age: number;
//     sayYo: Function;
// }
//
// interface ITest3 extends ITest2 {
//     sayHi: Function;
// }
//
// class Test implements ITest, ITest3 {
//     name
//     age
//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }
//     sayHi() {
//         console.log('Hello from parent')
//     }
//     sayBue() {}
//
//     sayYo() {}
// }


// interface ITest {
//     name: string;
//     sayBue: Function;
// }
//
// class Test implements ITest{
//     constructor(public name: string, public age: number) {
//     }
//
//     sayBue() {}
// }
//
// let obj = new Test ('Yo', 20);
// console.log(obj);


// class Test {
//     #param = 10;
//
//     #showPrivarte() {
//         console.log(this.#param);
//     }
//
//     sp() {
//         console.log(this.#param);
//     }
// }
//
// class Test2 extends Test {
//     #param = 2123132;
// }
//
// let obj = new Test2();
// console.log(obj);
// obj.sp();


// class Test {
//     constructor(private name: string, public age: number) {
//     }
//
//     sayName() {
//         console.log(this.name);
//         this.sayYo();
//     }
//
//     private sayYo() {
//         console.log('YoYoYo');
//     }
//
//     protected sayBla() {
//         console.log('Bla Bla Bla');
//     }
//
//     private a = () => {}
// }
//
// // let obj = new Test('Yo', 20);
// // console.log(obj)
// //
// // obj.sayName()
// // obj.sayYo()
// // obj.sayBla()
//
// class Test2 extends Test {
//     constructor(name: string, age: number, public  city: string) {
//         super(name, age);
//     }
//
//     someMethod() {
//         this.sayBla();
//     }
//
//     //private a = () => {}
// }
//
// let obj = new Test2('Yo', 20);
// console.log(obj)
// obj.sayName()
//obj.sayYo()
//obj.sayBla()
//obj.someMethod()
//obj.a()


class Test {
    static param: string = 'Yo';

    someM() {
        //this
    }

    static testMethod() {
        console.log(this.param);
    }
}
// let obj = new Test();
// console.log(obj)
//
// console.log(Test.param)
// Test.testMethod()


console.dir(Test)


// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.


//let summ = [student1, student2, student3].sort((a,b) => b.score.reduce((e, f) => e + f, 0) - a.score.reduce((c, d) => c + d, 0))

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

class Clock {
    private date: Date
    private hours: number
    private minutes: number
    private seconds: number

    constructor() {
        this.date = new Date()
        this.hours = this.date.getHours()
        this.minutes = this.date.getMinutes()
        this.seconds = this.date.getSeconds()
    }

    private translate(method: number) {
        if (method < 10) {
            return '0' + method
        }
        return method
    }

    public setHours(hours: number, minutes: number, seconds: number) {
        this.hours = hours
        this.minutes = minutes
        this.seconds = seconds
    }

    public getTime() {
        return `${this.translate(this.hours)}:${this.translate(this.minutes)}:${this.translate(this.seconds)}`
    }

}

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

  class Customer {
    name: string = ''
    secondName: string = ''
    address: string = ''
    numberCard: number = 0

    constructor(name: string, secondName: string, address: string, numberCard: number) {
      this.name = name
      this.secondName = secondName
      this.address = address
      this.numberCard = numberCard
    }

    setName(value: string) {
      this.name = value
    }

    setSecondName(value: string) {
      this.secondName = value
    }

    setAddress(value: string) {
      this.address = value
    }

    setNumberCard(value: number) {
      this.numberCard = value
    }

    getInformation() {
      console.log({
        name: this.name,
        secondName: this.secondName,
        address: this.address,
        numberCard: this.numberCard,
      })
    }
  }

  let arr = [
    new Customer('Andrew', 'donkey', 'Minsk', 10),
    new Customer('Clen', 'Melt', 'Minsk', 11),
    new Customer('Wen', 'bottle', 'Minsk', 12),
    new Customer('Bob', 'pain', 'Minsk', 14),
  ]

  // @ts-ignore
  let result = arr
    .sort((a, b) => a.name > b.name ? -1 : 1)
    .filter((el) => el.numberCard > 10 && el.numberCard < 14)

  console.log(result)

// @ts-ignore
  window.newCustomer = new Customer()

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.


class Car {

    mark: string
    rounds: number

    constructor(mark: string, rounds: number) {
        this.mark = mark
        this.rounds = rounds
    }

    showInfo() {
        console.log(this)
    }

}

// @ts-ignore
window.Car = new Car('Audi', 10, 700)

class BigCar extends Car {

    weight: number
    rounds: number

    constructor(mark: string, rounds: number, weight: number) {
        super(mark, rounds);
        this.weight = weight
        this.rounds = rounds
    }
}


// just a plug
export default () => {
};