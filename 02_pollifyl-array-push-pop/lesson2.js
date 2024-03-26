//push
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha', ['str', 'str', ['str']]];
// const str = 'ab-fr-ft';
// const splittedStr = str.split('-');

// const resTest = names.flat(Infinity);

// // const newLength = names.length;

// // console.log('splittedStr', splittedStr);
// console.log('names', names);
// console.log('res', resTest);
// console.log('newLength', newLength);

//pop
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// // names.pop();
// const res = names.pop();

// console.log('names', names);
// // console.log('res', res);

//shift

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const res = names.shift();
// // names.shift()

// console.log('names', names);
// console.log('res', res);

// const names = [];
// const res = names.shift();//undefined

// console.log('res', res);

//unshift
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const unshiftedArr = names.unshift('Nina', ['Elena', 'Kirill']);

// console.log('names', names);
// console.log('unshiftedArray', unshiftedArr);//6

// reverse()
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha']; // link #123

// const res = names.reverse(); //присвоили результат выполнения в result names.reverse(); link #123

// console.log('name', names);

//split()  for string type

//case 1 emty method
// const str = 'ab-cd-ef';

// const res = str.split();

// console.log('str', str);
// console.log('res', res);

//case 2 ""

// const str = 'ab-cd-ef';

// const res = str.split('');

// console.log('str', str);
// console.log('res', res);

// const str = 'ab-cd-ef';

// const res = str.split('-');

// console.log('str', str);
// console.log('res', res);

// const str = 'ab-cd-ef';

// const res = str.split('-', 2);

// console.log('str', str);
// console.log('res', res);

// const str = 'abf-hghghhg- jjfjfjjf- kjkj-';

// const res = str.split('- ');

// console.log('str', str);
// console.log('res', res);

// const str = '   abf-hghghhg- jjfjfjjf- kjkj-     ';

// const res = str.trim();

// // console.log('str', str);
// console.log('res', res);

//join()

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const res = names.join();//default case - ,

// console.log('names', names);
// console.log('res', res);

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const res = names.join('-');

// console.log('names', names);
// console.log('res', res);

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const res = names.join("");

// console.log('names', names);
// console.log('res', res);

// const telephoneNumber = '123456789'; // 987654321
// const splittedArray = telephoneNumber.split('');
// console.log('splittedArray', splittedArray);
// const reverseArray = splittedArray.reverse();
// console.log('reverseArr', reverseArray);
// const joinArray = reverseArray.join('');
// console.log('join', joinArray);

// const test = telephoneNumber.split('').reverse().join('');

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const arr3 = [5, 6];

// const res = arr1.concat(arr2, arr3, 4, 5, 6);
// console.log('res', res);

// const arr1 = [1, 2];
// const arr2 = [3, 4];

// const nestedArray = [
//   [5, 6],
//   [7, 8],
//   [[1], [3]],
// ];

// const res = arr1.concat(arr2, nestedArray);
// const flatArr = res.flat(Infinity);

// console.log('res', res);
// console.log('flatArr', flatArr);

//forEach

// const arr = [1, 2, 3, 4, 5];

// arr.forEach(function (num, index, array) {
//   array[index] = num * 2;
// });

// arr.forEach((num, index, array) => (array[index] = num * 2));

// console.log('arr', arr);

//indexOf

// const numbers = [1, 2, 3, 3, 4, 5];
// const res = numbers.indexOf(3);

// console.log('res', res);

// const numbers = [1, 2, 3, 3, 4, 5];
// const res = numbers.indexOf(9);

// console.log('res', res);//-1

// const numbers = [1, 2, 3, 3, 4, 5, 3, 5, 6];
// const res = numbers.indexOf(3, 4);//6

// console.log('res', res);

//lastIndexOf()

// const numbers = [1, 2, 3, 3, 4, 5];
// const res = numbers.lastIndexOf(9);

// console.log('res', res); //-1

// const numbers = [1, 2, 3, 3, 3, 3, 4, 5, 3, 5, 6, 7];
// const res = numbers.lastIndexOf(3);

// console.log('res', res); //8

//find()

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// const res = words.find(function (el) {
//   return el.length > 6;
// });

// console.log('words', words);
// console.log('res', res);

//findIndex

// const numbers = [1, 5, 3, 4, 5];

// const res = numbers.findIndex(function (el) {
//   return el % 2 == 0;
// });

// console.log('res', res);

// const res = numbers.findIndex((el) => el % 2 == 0);

//findLastIndex()

// const numbers = [1, 5, 3, 4, 5];
// const res = numbers.findLastIndex(function (el) {
//   return el === 19;
// });

// console.log('res', res);

//includes()

// const arr = [1, 2, 3];
// const res = arr.includes(2);

// console.log('res', res);

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const filteredArr = words.filter((word) => word.length > 5);
// const filteredArr = words.filter(function (el) {
//   return el.length > 5;
// });
// console.log('filteredArra', filteredArr);

// sort() Unicode -
//1) сортирует из под коробки

// const names = ['Alex', 'alex', 'Bob'];
// console.log(names.sort());

// const numbers = [-10000, 454, 87, 7, 6];
// console.log(numbers.sort());

// const numbers = [-10000, -25, 454, 87, 7, 6];

// const compareFunction = (a, b) => {
//   //по возрастанию

//   if (a > b) {
//     return 1; //любое полодительное число > 0
//   } else {
//     return -1;
//   }
// };

// const compareFunction = (a, b) => {
//   //по убыванию

//   if (a < b) {
//     return 1; //любое полодительное число > 0
//   } else {
//     return -1;
//   }
// };

// console.log(numbers.sort(compareFunction));

// const numbers = [454, 78, -10000, -25, 87, 7, 6];
// numbers.sort((a, b) => a - b);

// const numbers = [454, 78, -10000, -25, 87, 7, 6];
// numbers.sort((a, b) => b - a);
// console.log('numbers', numbers);

// const users = [
//   {
//     id: 1,
//     name: 'Bob',
//     isStudent: true,
//   },
//   {
//     id: 2,
//     name: 'Alex',
//     isStudent: true,
//   },
//   {
//     id: 3,
//     name: 'alex',
//     isStudent: true,
//   },
//   {
//     id: 4,
//     name: '$Igor',
//     isStudent: false,
//   },
//   {
//     id: 5,
//     name: 'Алекс',
//     isStudent: false,
//   },
// ];

// console.log(users.sort((a, b) => a.name.localeCompare(b.name)));

// const months = ['Mar', 'Jan', 'Feb', 'Dec'];
// const sortedArray = months.toSorted();

// console.log('months', months);
// console.log('sortedArr', sortedArray);

// const values = [1, 10, 21, 2];
// const sortedValues = values.toSorted((a, b) => a - b);
// console.log(sortedValues);
// console.log(values);

// const users = [
//   {
//     id: 1,
//     name: 'Bob', //["Bob"]
//     isStudent: true,
//   },
//   {
//     id: 2,
//     name: 'Alex', //["Bob", "Alex"]
//     isStudent: true,
//   },
//   {
//     id: 3,
//     name: 'Ann',
//     isStudent: true,
//   },
//   {
//     id: 4,
//     name: 'Donald',
//     isStudent: false,
//   },
// ];

// const mappedArray = users.map((user) => user.name);

// console.log('mappedArray', mappedArray);

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
