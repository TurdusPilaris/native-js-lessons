//C(R)UD
//C - create (ссоздание) -  post {name: "Test", id: 1}
//R - read get
//U - фильтрация  Update, patch
//D -  удаление delete

//C - cReate
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
// ];

// const newUser = [
//   {
//     id: 5,
//     name: 'Olga',
//     isStudent: true,
//   },
//   {
//     id: 3,
//     name: 'Anton',
//     isStudent: true,
//   },
//   {
//     id: 4,
//     name: 'Evgen',
//     isStudent: true,
//   },
// ];

// const newUser = {
//   id: 5,
//   name: 'NewUser',
// };

// const newUserObj = [...users, newUser];
// const newUserObj1 = [...users].concat(newUser);

// console.log(newUserObj);

//Update

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
// ];

// const updUsers = users.map((user) => {
//   if (user.name === 'Alex') {
//     const copyUsers = { ...user };
//     console.log('copyUsers', copyUsers);
//     copyUsers.isStudent = false;
//     return copyUsers;
//   } else {
//     return user;
//   }
// });

// console.log('updUsers', updUsers);

// const updUsers = users.map((user) =>
//   user.name === 'Alex' ? { ...user, isStudent: false } : user
// );

// //Delete

// const deleteUsers = newUserObj.filter((user) => user.id !== 3);
// console.log('deleteUsers', deleteUsers);
