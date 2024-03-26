// статические свойства - определяем при создании объекта

// let fruits = {
//   color: 'Red',
//   tasty: 'Sweet',
// };

// динамических(вычисляемые) свойства -  вычисляются в процессе выполнение кода

// function createObject(key, values) {
//   let newObj = {};
//   newObj[key] = values;
//   return newObj;
// }

// console.log(createObject('car', 'Audi'));// { car: 'Audi' }

// function createObj(key, values) {
//   return {
//     [key]: values,
//   };
// }

// console.log(createObj('car', 'BMW')); // { car: 'BMW' }

//синтаксис вычисляемых(динамических) свойств
// const obj = {
//   [выржение]: значение,
// };

//1) переменной

// let propertyName = 'age'; //использоваться будет в качестве ключа

// let person = {
//   name: 'Elena', //статическое свойство (задали явно)
//   [propertyName]: '25', // динамическое свойство, так как зависит от того, что у нас в нашей переменной propertyName
// };

// console.log('person', person); // person { name: 'Elena', age: '25' }

//2) функция которая возвращает строку

// const returnStrin = (str) => str;

// const person1 = {
//   [returnStrin('testKey')]: 'testValue',
// };

// console.log('person1', person1); // person1 { testKey: 'testValue' }

// 3) конкатенацию строк

// let prefix = '_person';

// const person = {
//   ['test' + '_age']: 67,
//   ['test' + prefix]: 'Ivan',
// };

// console.log('person', person);// person { test_age: 67, test_person: 'Ivan' }

//4) арифметические выражения

// let index = 2;

// let obj = {
//   [index + 1]: 'Third element',
// };

// console.log('obj', obj); // obj { '3': 'Third element' }

// function createObj(key, values) {
//   return {
//     [key.toUpperCase()]: values,
//   };
// }

// console.log(createObj('car', 'Audi')); // { CAR: 'Audi' }

//ключ и значение в верхний регистр
// function createObj(key, values) {
//   return {
//     [key.toUpperCase()]: values.toUpperCase(),
//   };
// }

// let person = createObj('car', 'Audi');
// console.log('person', person); //person { CAR: 'AUDI' }

//practice task ExpectedResult: driversStatuses [ 'Ожидает', 'Готово' ]

// //1) создала переменные для хранения статуса

// const STATUS_BUSY = 'busy';
// const STATUS_READY = 'ready';

// //2) использовала вычисляемые свойства

// const STATUS_LABELS = {
//   [STATUS_BUSY]: 'Ожидает', // "busy": "Ожидает"
//   [STATUS_READY]: 'Готово',
// };

// //3) список водителей с БД

// const drivers = [
//   { name: 'Ivan', status: 'busy' },
//   { name: 'Nina', status: 'ready' },
// ];

// // //4) преводила статусы в нужный формат

// const driversStatuses = drivers.map((driver) => {
//   const { status } = driver;

//   console.log('status', status);
//   return STATUS_LABELS[status]; //STATUS_LABELS["busy"]
// });

// console.log('driversStatuses', driversStatuses); // driversStatuses [ 'Ожидает', 'Готово' ]

//___________________________________-

//Object,keys(), Obkect.values(), Object.entries(), map-set

//Object.keys() - возвращает массив ключей(Собирает ключи у объекта). Принимает в себя объект у которого собирает ключи

//1)

// const user = {
//   name: 'Kirill',
//   age: '25',
//   isStudent: {
//     city: 'Poland',
//     family: {
//       mother: 'Anna',
//     },
//   },
// };

// const keys = Object.keys(user);
// const keys = Object.keys(user);
//console.log('keys', keys); // [ 'name', 'age', 'isStudent' ]

//Object.values() - возвращает массив значений(Собиарет значения у объекта)

// const user = {
//   name: 'Kirill',
//   age: '25',
//   isStudent: {
//     city: 'Poland',
//     family: {
//       mother: 'Anna',
//     },
//   },
// };

// //data.isStusent

// const values = Object.values(user); // values [ 'Kirill', '25', { city: 'Poland', family: { mother: 'Anna' } } ]
// console.log('values', values);

//Object.entries() - возвращает массив пар ["key", "value"]

//без вложенностей
// const user = {
//   name: 'Kirill',
//   age: '25',
// };

// const userWithNestedValues = {
//   name: 'Kirill',
//   age: '25',
//   isStudent: {
//     city: 'Poland',
//     family: {
//       mother: 'Anna',
//     },
//   },
// };

// const result = Object.entries(user);
// const resultWithNested = Object.entries(userWithNestedValues);

// // console.log('result without nested obj', result);// [ [ 'name', 'Kirill' ], [ 'age', '25' ] ]
// // console.log('result with nested obj', resultWithNested); // [ [ 'name', 'Kirill' ], [ 'age', '25' ],
// // //[ 'isStudent', { city: 'Poland', family: [Object] } ]]

// const nest1 = resultWithNested[2][1].family;
// // const nest2 = nest1[1];
// console.log('test', nest1); // test [ 'isStudent', { city: 'Poland', family: { mother: 'Anna' } } ]
// // console.log(nest2.family);

//lodash
//array:  flat(Infinity)

// map vs set

//Map () - это коллекци, как и обджект ("key", "Value"). В отличие обджекста ключи могут быть любого типа

// new Map() - создание коллекция
// const map = new Map();
// const testVariable = '';
// console.log('map', map); //Map(0) {}

// set("key", "value") - записывает по ключу key значение value
// map.set('car', 'Audi'); // Map(1) { 'car' => 'Audi' }
// map.set('1', 'oneString');
// map.set(1, 'numbers2');
// map.set(1, 'numbers2'); // презатирает если ключ и значение одинаковые
// map.set(2, 'numbers3');
// map.set(1, 'numbers3');
// map.set(true, 'isReady');
// map.set('isReady', true);

// console.log('map', map);
// console.log(map);
// get(key) - возвращает значение по ключу
// console.log('key number: ', map.get(1)); //numbers2
// console.log('key string: ', map.get('1')); // oneString
// console.log('key boolean: ', map.get(true)); // isReady

// //has(key) - если ключь есть - true, ключа нет - false
// console.log('ключа нет:', map.has('fruits')); // false
// console.log('ключ есть:', map.has(true)); // true

// //delete(key) - удаление из коллекции по определенному ключу
// console.log('map collection: ', map);
// map.delete('isReady');
// console.log('map collection after deleting: ', map); // deleting  true => 'isReady'

//clear() - очищает колекцию
// map.clear();
// console.log(map); // Map(0) {}

// const user1 = { name: 'Tatsiana' };

// const map = new Map();
// map.set(user1, 'пользователь 1');
// console.log(map); // Map(1) { { name: 'Tatsiana' } => 'пользователь 1' }

//________________________
// Set() - особый вид коллекции "множество значений" (без ключей) и уникальные значения(наще значения могут повторяться только 1 раз)

//1) new Set() - обхявление коллекции(множества значенйи)

// const set = new Set();
// console.log('set: ', set); //Set(0) {}

//2) add(value) -  добавляем значение в коллекцию(если оно есть - то ничего не делает и возвращает тот же объект Set)
// set.add('1');
// set.add('3');
// set.add('4');
// set.add('3');

// const result = set.add('1').add('3').add('4').add('3');

// console.log('set collection: ', set); // Set(3) { '1', '3', '4' }
// console.log('result', result); // Set(3) { '1', '3', '4' }

//long version
// const numbers = [1, 2, 2, 3, 4, 5, 6, 7, 6, 8, 9, 9];
// let set = new Set(numbers);
// let array = [...set];
// console.log('set', set); //Set(9) { 1, 2, 3, 4, 5, 6, 7, 8, 9 }
// console.log('resulted array', array); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//short version
// const numbers = [1, 2, 2, 3, 4, 5, 6, 7, 6, 8, 9, 9];
// const result = [...new Set(numbers)]; // [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log('result', result);

//3) delete(value) - удаляем значение
// set.delete('1');

// console.log('set without 1: ', set); // set without 1:  Set(2) { '3', '4' }

//4) has(value) - если есть value - true , если нет - false

// console.log('если нет единицы', set.has('1')); // false
// console.log('если есть единицы', set.has('3')); // true

//5) clear() - очищает коллекцию

// set.clear();

// console.log('set', set); //  Set(0) {}

// size- возвращает количество элементов в коллекции

// set.add('5').add('7');

// console.log('set size collection after adding elements:', set);

// const res = set.size;

// console.log('set size: ', set.size);

//____________
//numbers - целые числа [1, 2, 4, 5, 6, -5, -7 ]\
//target - некое число равное
//return indexes [0, 1]

// function twoSum(numbers, target) {
//   let seen = new Map();
//   for (let i = 0; i < numbers.length; i++) {
//     //1 цикл итерации
//     let x = numbers[i], // 1 взятая с numbers получаем элементы с намберс
//       y = target - x; // 3 - 1 =  2 получаем второе число

//     // sconsole.log('seen', seen);

//     if (seen.has(y)) {
//       console.log('seen collection', seen); // { 1 => 0, 8 => 1 }

//       let x = x.indexOf();
//       console.log('index', index);
//       // return [x, y];

//       // [i, index];

//       seen.set(i, index);

//       return seen;
//     }
//   }
// }

//
// function twoSum(numbers, target) {
//   let seen = new Map(); // 0
//   for (let i = 0; i < numbers.length; i++) {
//     let x = numbers[i],
//       y = target - x; //
//     if (seen.has(y)) return [seen.get(y), i];
//     seen.set(x, i);
//   }
// }

// console.log('twoSUm', twoSum([1, 8, 2, 4, 5, 6, -5, -7], 3));
