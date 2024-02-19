// // //примитивные типы данных
// // string, number, symbol. undefined, null, bigInt

// // //ссылочные типы данных
// // Object, array, functions,

// // 1 более сложная структура
// // 2 методы\свойства
// // 3 ссылочный тип данных

// // const user = {}; // литерал объекта

// // let person = new Object();
// // person.age = 25;
// // person.name = 'Egor';

// // console.log('person', person);

// // const user = {
// //   //ссылка на ячейку памяти #1234
// //   name: 'Alex',
// //   age: 25,
// //   isStudent: true,
// // };

// // const user2 = user;// #1234
// // user2.name = 'Bpb';

// // console.log('user', user);
// // console.log('user2', user2);
// // console.log('isEqual:', user === user2);//

// const user1 = {
//   //#1223
//   name: 'Alex',
//   age: 25,
//   isMarried: false,
// };

// // const copyUser1 = {
// //   //#123456
// //   name: user1.name,
// //   age: user1.age,
// //   isMarried: user1.isMarried,
// // };

// // console.log('isEqual: ', user1 === copyUser1);

// // const user1Copy = { ...user1 }; // #123456
// // console.log('user1Copy: ', user1Copy);
// // console.log('isEqual: ', user1 === user1Copy);

// const users = [
//   //#12345
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
//     name: 'Ann',
//     isStudent: true,
//   },
//   {
//     id: 4,
//     name: 'Donald',
//     isStudent: true,
//   },
// ];

// users.pop();//#12345
// console.log('users', users);

// // // // users.pop();
// const users1Copy = [...users];// #123456
// users1Copy.pop();

// // console.log('users1Copy', users1Copy);
// // console.log('users', users);

// //1) делать копию 2) внести изменения в копию  3) работаете с этой копией

const superUser = {
  id: 10,
  name: 'Clementina DuBuque',
  username: 'Moriah.Stanton',
  email: 'Rey.Padberg@karina.biz',
  address: {
    street: 'Kattie Turnpike',
    suite: 'Suite 198',
    city: 'Lebsackbury', //
    zipcode: '31428-2261',
    geo: {
      lat: '-38.2386',
      lng: '57.2232',
    },
  },
  phone: '024-648-3804',
  website: 'ambrose.net',
  company: {
    name: 'Hoeger LLC',
    catchPhrase: 'Centralized empowering task-force',
    bs: 'target end-to-end models',
  },
};

// const test = { ...superUser };
// superUser.address.city = 'London';

const newSuperUser = {
  ...superUser,
  address: { ...superUser.address },
  company: { ...superUser.company },
};

newSuperUser.address.city = 'Window';
newSuperUser.company.name = 'Apple';

// console.log('superUser', superUser);
// console.log('newSuperUserCopy: ', newSuperUser);

//structureClone()

// const test = structuredClone(superUser);
// test.address.geo.lat = 'test value';

// console.log('superUser', superUser);
// console.log('test', test);

//деструктуризация

// function calc(a, b) {
//   return [a + b, a - b, undefined, null];
// }

// const result = calc(5, 2);

// // const sum = result[0];
// // const sub = result[1];
// // const mult = result[3]

// const [sum, sub, mult = 'Пока умножение ', divide] = result;

// console.log('sum:', sum);
// console.log('sub:', sub);
// console.log('nult', mult);
// console.log('divide', divide);

const person = {
  name: 'Kirill',
  age: 24,
  adress: {
    country: 'Poland',
    city: 'Warsaw',
  },
};

// const name = 'Bob';
// const country = 'Italy';
// const {
//   name: newName,
//   age,
//   car,
//   adress: { country: newCountry, city: newCity },
// } = person;

const { filteredUsers, age } = useTestRequest(data); //https://it-kamasutra.com/social/network/review

console.log('testVar:', newCountry);
console.log('city', newCity);

// console.log('name', name);
// console.log('newName', newName);
// console.log('age', age);
// console.log('car key', car);
// console.log('adres', adress);
