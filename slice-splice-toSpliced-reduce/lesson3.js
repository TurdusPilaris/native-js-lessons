//slice, splice, toSpliced, reduce

//slice() - иммутабельный метод массива,  второй параметр не обязательный и не включительно

//1) expected: ["a", "b"]
// let arr = ['a', 'b', 'c', 'd', 'e'];

// let sub = arr.slice(0, 2); //второй параметр не включительно

// console.log('arr', arr);
// console.log(arr === sub);
// console.log('sub', sub);

//2)Expected: [ 'b', 'c', 'd', 'e' ], не передавали второй параметр

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let sub = arr.slice(1);

// console.log('sub', sub);

//3)Expected ["b", "c", "d"], используя передачу отрицательный параметр

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let sub = arr.slice(1, -1); //-1- указывают на последний элемент

// console.log('sub', sub);

// slice (1, -1) vs arr.length
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let sub = arr.slice(1, -1); //-1- указывают на последний элемент
// let arrLength = arr.length - 1;

// console.log('sub', sub);
// console.log('arr length', arrLength);

//_______________

//splice () - мутабельный

// массив.splice(откуда удаляем, сколько удаляем, [вставить], [вставить]...);

//1) expected rm 3 elemnts, начиная с первого Expected: ["a", "e"]

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let res = arr.splice(1, 3);

// console.log('arr after splice: ', arr); //["a", "e"]
// console.log('res', res); //  ["b", "c", "d"]

//2) без удаления элементов, но уже с добавлением трех элементов на позицию 2 expected: ['a', 'b',"test1", "test2", "test3", 'c', 'd', 'e']

// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(2, 0, 'test1', 'test2', 'test3');

// console.log('arr after splice:', arr); // ['a', 'b',"test1", "test2", "test3", 'c', 'd', 'e']

//3) добавление не строковых элементов  Expected: [ 'a', 'b', 4, '5', [ 'test6' ], { color: 'Red' }, 'c', 'd', 'e' ]

// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(2, 0, 4, '5', ['test6'], { color: 'Red' });

// console.log('arr after splice:', arr); //  [ 'a', 'b', 4, '5', [ 'test6' ], { color: 'Red' }, 'c', 'd', 'e' ]

// 4)кейс если дана строка, переводим в массив строк, используя split() и потом используем splice()

// const arr = 'Test string'; // string "Test string"
// const splitArr = arr.split(' '); //используем сплит чтобы получить массив строк [ 'Test', 'string' ]
// const spliceArr = splitArr.splice(1, 0, 'value'); // [ 'Test', 'value', 'string' ]

// console.log('spliceArr', spliceArr); //[] - так как результатом выполнения splice() является массив с удаленным элементами,
// //получили 0, так как вторым параметром передали 0 (т.е. удаляем мы ноль элементов)

//____________
//toSpliced() - иммутабельно

// const months = ['Jan', 'Mar', 'Apr', 'May'];
// const newMonths = months.toSpliced(1, 0, 'Feb');

// console.log('months', months); // ['Jan', 'Mar', 'Apr', 'May']
// console.log('newMonths', newMonths); // ['Jan', "Feb",'Mar', 'Apr', 'May']

// reduce -
//1) arr.reduce((acc, item, index) => {}) - стартовое значение, если не указываем после запятой acc - arr[0]

// arr.reduce((acc, item) => {}, 0)

//сумма чисел через цикл for
// let a = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < a.length; i++) {
//   sum = sum + a[i];
// }

// console.log('sum', sum);

//сумма чисел используя reduce
// let a = [1, 2, 3, 4, 5];
// let res = a.reduce(function (acc, el) {
//   // console.log('acc value: ', acc + el);
//   // console.log('el', el);
//   return acc + el;
// }, 0);

//let res =  a.reduce((acc, el) => { acc + el}, 0)

// 2) reduce сумма фруктов на примере массива объектов

// const fruits = [
//   { name: 'apple', quantity: 2 },
//   { name: 'banana', quantity: 3 },
//   { name: 'orange', quantity: 1 },
// ];

// const totalSum = fruits.reduce((acc, el) => {
//   console.log('el', el); // { name: 'apple', quantity: 2 }
//   return acc + el.quantity;
// }, 0);
// console.log('totalSum', totalSum);

//________

// const fruits = [
//   { name: 'banana', quantity: 5 },
//   { name: 'banana', quantity: 3 },
//   { name: 'orange', quantity: 1 },
// ];

// const totalSum = fruits.reduce(
//   (acc, el) => {
//     return acc;
//   },
//   { color: 'banana', counter: 0 }
// );

// //1 іт
// console.log('totalSum', totalSum); // {pencil: "red", counter: 0}

// const numbers = [5, 2, 8, 1, 6];

// const maxValue = numbers.reduce((acc, el) => {
//   console.log('acc', acc);
//   return el > acc ? el : acc;
// }, numbers[0]);

// console.log('maxValue', maxValue);

//reduce () - initial array
const colors = ['red', 'green', 'red', 'blue', 'red'];

const res = colors.reduce((acc, el) => {
  // console.log('acc', acc);
  acc[el] = (acc[el] || 0) + 1;
  // acc["el"]

  // console.log('isTrue', acc[el] || 0);
  // console.log('isTrue', acc['Unknown'] || 0);

  //acc['el'];
  // console.log('acc', acc);

  return acc;
}, {});

// {}
// acc {red: 1}
// acc { green: }
// acc[el] -  обращение к свойству объекта {el: ""}
//(acc[el] || 0 -
console.log('res', res);
