//slice() - иммутабельный метод массива,  второй параметр не обязательный и не включительно

//1) expected: ["a", "b"]
 let arr = ['a', 'b', 'c', 'd', 'e'];

 let sub = arr.slice(0, 2); //второй параметр не включительно

//2)Expected: [ 'b', 'c', 'd', 'e' ], не передавали второй параметр

let arr2 = ['a', 'b', 'c', 'd', 'e'];
let sub2 = arr.slice(1);

//3)Expected ["b", "c", "d"], используя передачу отрицательный параметр

let arr3 = ['a', 'b', 'c', 'd', 'e'];
let sub3 = arr3.slice(1, -1); //-1- указывают на последний элемент

//_______________

//splice () - мутабельный
// массив.splice(откуда удаляем, сколько удаляем, [вставить], [вставить]...);

//1) expected rm 3 elemnts, начиная с первого Expected: ["a", "e"]

let arr4 = ['a', 'b', 'c', 'd', 'e'];
let res = arr4.splice(1, 3);

// console.log('arr after splice: ', arr4); //["a", "e"]
// console.log('res', res); //  ["b", "c", "d"]

//2) без удаления элементов, но уже с добавлением трех элементов на позицию 2 expected: ['a', 'b',"test1", "test2", "test3", 'c', 'd', 'e']

let arr5 = ['a', 'b', 'c', 'd', 'e'];
arr5.splice(2, 0, 'test1', 'test2', 'test3');

// console.log('arr after splice:', arr5); // ['a', 'b',"test1", "test2", "test3", 'c', 'd', 'e']

//3) добавление не строковых элементов  Expected: [ 'a', 'b', 4, '5', [ 'test6' ], { color: 'Red' }, 'c', 'd', 'e' ]

let arr6 = ['a', 'b', 'c', 'd', 'e'];
arr6.splice(2, 0, 4, '5', ['test6'], { color: 'Red' });

 console.log('arr after splice:', arr6); //  [ 'a', 'b', 4, '5', [ 'test6' ], { color: 'Red' }, 'c', 'd', 'e' ]

// 4)кейс если дана строка, переводим в массив строк, используя split() и потом используем splice()

const arr7 = 'Test string'; // string "Test string"
const splitArr = arr7.split(' '); //используем сплит чтобы получить массив строк [ 'Test', 'string' ]
const spliceArr = splitArr.splice(1, 0, 'value'); // [ 'Test', 'value', 'string' ]

console.log('spliceArr', spliceArr); //[] - так как результатом выполнения splice() является массив с удаленным элементами,
// //получили 0, так как вторым параметром передали 0 (т.е. удаляем мы ноль элементов)

//____________
//toSpliced() - иммутабельно

const months = ['Jan', 'Mar', 'Apr', 'May'];
const newMonths = months.toSpliced(1, 0, 'Feb');

console.log('months', months); // ['Jan', 'Mar', 'Apr', 'May']
console.log('newMonths', newMonths); // ['Jan', "Feb",'Mar', 'Apr', 'May']

