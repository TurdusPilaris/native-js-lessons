//push добавляет последний элемент.
 let names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
names.push('Elena');
names.push('Masha', 'Petya'); //можно несколько

//pop удаляет последний элемент и возвращает его
names.pop();

//shift удаляет 1 элемент в начале
names.shift();

//unshift добавляет 1 или несколько элементов в началеа
const numbers = [2, 3, 4];

numbers.unshift(1);// [1, 2, 3, 4]

numbers.unshift(-2, -1, 0);// [-2, -1, 0, 1, 2, 3, 4]

//reverse() массив наоборот

numbers.reverse();

//splut() разделение строки если пустой метод прсото полоит строку в массив
//если добавим пустую строку то разделить по символам
//второй необязательный параметр максимальное количество элементов в будующем массиве
let str = 'qwerty';
let res = str.split(); //[ 'qwerty' ]
res = str.split(''); //[ 'q', 'w', 'e', 'r', 't', 'y' ]

let str2 = 'q-w-e-r-t-y';

res = str2.split('-'); //[ 'q', 'w', 'e', 'r', 't', 'y' ] с разделителем

//trim() убирает пробелы в начале и конце строки
let str3 = '   q-w-e-r-t-y   ';

res = str2.trim(); //q-w-e-r-t-y

//join() - превращает массив в строку
let namesJoin = ['Alex', 'Bob', 'Ivan', 'Sasha'];
res = namesJoin.join() //Alex,Bob,Ivan,Sasha
res = namesJoin.join('-') //Alex-Bob-Ivan-Sasha можно указать разделитель


//задачка с собеседования
const numberPhone = '123456789';
const arrNumber = numberPhone.split("");
console.log(arrNumber.reverse().join("")) //987654321

const arr = numberPhone.split("").reverse().join("");

//concat() соединяет массивы в один и даже если просто добавил элемент
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

res = arr1.concat(arr2, arr3, 4, 5, 6); //res [
// 1, 2, 3, 4, 5,
//     6, 4, 5, 6
// ]


//flat() - возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на
// указанный уровень depth. Есди указать параметр Infinity т все поднимает на верх

//forEach
const arr4 = [1, 2, 3, 4, 4];
let sum = 0;
arr4.forEach(function(e){
    sum = sum + e;
})
arr4.forEach(function(num, index, array){
    array[index] = num*2;
})

//indexOf Метод indexOf() возвращает индекс первого вхождения указанного значения в строковый объект String ,
// на котором он был вызван, начиная с индекса fromIndex . Возвращает -1, если значение не найдено

//lastIndexOf возвращает индекс последнего вхождения указанного значения в строковый объект String ,
// на котором он был вызван, или -1, если ничего не было найдено. Поиск по строке ведётся от конца к началу, начиная с индекса fromIndex .

//find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции.

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
 res = words.find(function (el) {
  return el.length > 6;
});

//findIndex возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции

const numbers3 = [1, 5, 3, 4, 5];

//  res = numbers3.findIndex(function (el) {
//   return el % 2 == 0;
// });

res = numbers3.findIndex(e => e % 2 === 0)

//findLastIndex() так же как предыдущий но с другой стороны

//includes() проверяет наличие в массиве
const arr5 = [1, 2, 3];
 res = arr5.includes(2); //true

//filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
const filteredArr = words.filter((word) => word.length > 5);
// const filteredArr = words.filter(function (el) {
//   return el.length > 5;
// });


//sort() на месте сортирует элементы массива и возвращает отсортированный массив. Сортировка не обязательно устойчива (англ.). Порядок сортировки по умолчанию соответствует порядку кодовых точек Unicode.

// 1) сортирует из под коробки по юникоду, не очень удобно

const names6 = ['Alex', 'alex', 'Bob'].sort(); //[ 'Alex', 'Bob', 'alex' ]

 const numbers4 = [-10000, 454, 87, 7, 6].sort(); //[ -10000, 454, 6, 7, 87 ]

console.log(numbers4);

 const numbers5 = [-10000, -25, 454, 87, 7, 6];

const compareFunctionAsc = (a, b) => {
  //по возрастанию

  if (a > b) {
    return 1; //любое полодительное число > 0
  } else {
    return -1;
  }
};

const compareFunctionDesc = (a, b) => {
  //по убыванию

  if (a < b) {
    return 1; //любое полодительное число > 0
  } else {
    return -1;
  }
};

 // console.log(numbers5.sort(compareFunctionDesc));

const numbers6 = [454, 78, -10000, -25, 87, 7, 6];
numbers6.sort((a, b) => a - b); // более короткая запись asc
numbers6.sort((a, b) => b - a); // более короткая запись desc
// console.log('numbers', numbers6);

const users = [
  {
    id: 1,
    name: 'Bob',
    isStudent: true,
  },
  {
    id: 2,
    name: 'Alex',
    isStudent: true,
  },
  {
    id: 3,
    name: 'alex',
    isStudent: true,
  },
  {
    id: 4,
    name: '$Igor',
    isStudent: false,
  },
  {
    id: 5,
    name: 'Алекс',
    isStudent: false,
  },
];

//localeCompare сортирует строки в нормальном порядке
console.log(users.sort((a, b) => a.name.localeCompare(b.name)));
// если нужно в убывании то переменные наоборот b.name.localeCompare(a.name)

// const months = ['Mar', 'Jan', 'Feb', 'Dec'];
// const sortedArray = months.toSorted();

// console.log('months', months);
// console.log('sortedArr', sortedArray);

// const values = [1, 10, 21, 2];
// const sortedValues = values.toSorted((a, b) => a - b);
// console.log(sortedValues);
// console.log(values);

const users3 = [
  {
    id: 1,
    name: 'Bob', //["Bob"]
    isStudent: true,
  },
  {
    id: 2,
    name: 'Alex', //["Bob", "Alex"]
    isStudent: true,
  },
  {
    id: 3,
    name: 'Ann',
    isStudent: true,
  },
  {
    id: 4,
    name: 'Donald',
    isStudent: false,
  },
];

// Полифилы - реализуем мап без мапа
const mappedArray = users3.map((user) => user.name);

console.log('mappedArray', mappedArray);

// const getNames = (array) => {
//   const result = [];
//   const getName = (obj) => obj.name;

//   for (let i = 0; i < array.length; i++) {
//     const temp = getName(array[i]);
//     console.log('temp', temp);
//     result[i] = temp;
//   }

//   return result;
// };

// console.log(getNames(users));