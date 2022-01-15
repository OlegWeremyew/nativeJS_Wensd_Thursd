console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0

// {} - block code, function/class, loops, switch, try/catch/finally? if/else
// let obj = {} // литерал объекта не создает область видимости

// let globalScope = {
//     outerScope: null,
//     b: 100, // undefined -> 100
//     f: 'Function',
//     a: 10,
//     someParam: undefined,
//     d: 5,
// };
//
// let a = 10;
// let someParam;
//
// //d = 5; в не строгом режиме произойдет иницилизация переменной
// //console.log(yo); - ошибка в любом режиме
//
// var b = 100;
//
// function f() {}
//
// console.log(a + b);


// let globalScope = {
//     outerScope: null,
//     f: 'Function',
//     a: 20,
// };
//
// let a = 10;
//
// function f(someArg: any) {
//     let fScope = {
//         outerScope: globalScope,
//         someArg: null, // undefined -> null
//         c: 50, // undefined -> 50
//     };
//
//     var c = 50;
//     a += 10;
// }
//
// f(null);
//
// console.log(a);


// let globalScope = {
//     outerScope: null,
//     f: 'Function', // f
//     a: 70, // 10 -> 20 -> 70
//     result: 'Function', // innerFunc
// };
//
// let a = 10;
// function f(someArg: any) {
//     let fScope = {
//         outerScope: globalScope,
//         someArg: 20, // undefined -> 20
//         c: 50, // -> undefined
//         innerFunc: 'Function',
//     };
//     var c = 50;
//     a += 10;
//     function innerFunc() {
//         let innerFuncScope = {
//             outerScope: fScope,
//         }
//         a += c;
//         return someArg + c + a;
//     }
//     return innerFunc;
// }
//
// let result  = f(20);
// console.log(result()); // 140
// console.log(a); //70


// let globalScope = {
//     outerScope: null,
//     f: 'Function', // f
//     result: 'Function', // innerFunc
// };
//
// function f() {
//     let fScope = {
//         outerScope: globalScope,
//         c: 150, // undefined -> 50 -> 100 -> 150;
//         innerFunc: 'Function',
//     };
//     var c = 50;
//     function innerFunc() {
//         let innerFuncScope = {
//             outerScope: fScope,
//         }
//         c += 50;
//         return c;
//     }
//     return innerFunc;
// }
//
// let result = f();
// console.log(result()); // 100
// console.log(result()); // 150

// let globalScope = {
//     c: undefined,
//     fs: 'Function',
// }
//
// fs();
// if () {
//     if () {
//         let blocScope = {
//             a: undefined
//         }
//         let a;
//         if() {
//             console.log(a)
//             var c;
//         } else {
//             console.log(a)
//             function fs() {}
//             while (true) {
//                 console.log(c);
//                 console.log(a)
//                 fs();
//             }
//         }
//     }
// }


// f();
// {
//     let a = 10;
//     function f() {
//         console.log('Hello world!!!');
//     }
//     if (true) {
//         console.log('inside block ', a);
//     }
// }
//
//
// console.log(a);

// let g = {
//     i: undefined,
// }
// let arr = [];
// arr.length = 10;
//
// for (let i = 0; i < arr.length; i++) {
//     let loopS = {
//         i: 0
//     };
//     (function(){
//         let af = {
//
//         }
//         console.log(i);
//     })();
// }


///// Рекурсия

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// function sumTo(n: number) {
//     let result = 0;
//     for (let i = n; i > 0; i--) {
//         result += i;
//     }
//     return result;
// }

//Рекурсия
// function sumTo(n: number):number {
//     if (n === 1) return n;
//     return n + sumTo(n - 1);
// }
//
// console.log(sumTo(3));


//Хвостовая рекурсия
// function sumTo(n: number, acc: number):number {
//     if (n === 1) return acc + n;
//     return sumTo(n - 1, acc + n);
// }
// console.log(sumTo(3, 0));



// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

/*
function sum(x) {
    return function (y) {
        return x + y
    }
}
console.log(sum(3)(6))
 */

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

/*
function makeCounter() {
    let count = 0
    return function () {
        return count++
    }
}

const counter = makeCounter()
const counter2 = makeCounter()
console.log(counter())
console.log(counter())
console.log(counter2())
console.log(counter())

 */

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

/*
function sum(count) {
    let privateCounter = count;

    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        reset: function () {
            return privateCounter = 0;
        },
        set: function () {
            return privateCounter;
        },
    };
};

const Counter = sum(10)


Counter.increment() //1
Counter.increment() //2
Counter.decrement() //1
Counter.increment() //2
Counter.increment() //3

console.log(Counter.set()) // 10 + 3 => 13
 */

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

function superSum(num: number) {
    if (num <= 0) return 0;
    if (num === 1) return (n: number) => n;
    let _args: number[] = [];

    function helper(...args: number[]) {
        _args = [..._args, ...args];
        if(_args.length >= num) {
            _args.length = num;
            return _args.reduce((acc, number) => acc + number);
        } else {
            return helper;
        }
    }

    return helper;
}
//@ts-ignore
console.log(superSum(2)(2)(5)(3)(4));

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion


//============================================================================
// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

/* пример метода flat
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]
 */

/* Для развёртывания многомерных массивов используем рекурсию, reduce и concat
const arr = [1, 2, [3, 4, [5, 6]]];

function flatDeep(arr, d = 1) {
   return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
};

flatDeep(arr, Infinity);
// [1, 2, 3, 4, 5, 6]
 */

/* не рекурсивное упрощение с использованием стэка
var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];
function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // забираем последнее значение
    const next = stack.pop();
    if (Array.isArray(next)) {
      // добавляем к массиву элементы не модифицируя исходное значение
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  //разворачиваем массив, чтобы восстановить порядок элементов
  return res.reverse();
}
flatten(arr1);// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
 */

/*
//рекурсивно упрощаем массив
function flatten(array) {
  var flattend = [];
  (function flat(array) {
    array.forEach(function(el) {
      if (Array.isArray(el)) flat(el);
      else flattend.push(el);
    });
  })(array);
  return flattend;
}
 */
//============================================================================


// just a plug
export default () => {};