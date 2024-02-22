const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];

const str = 'ab-cd-ef';

const telephoneNumber = '123456789';

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

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
];

const months = ['Mar', 'Jan', 'Feb', 'Dec'];
const sortedArray = months.toSorted();

console.log('months', months);
console.log('sortedArr', sortedArray);

const values = [1, 10, 21, 2];
const sortedValues = values.toSorted((a, b) => a - b);
console.log(sortedValues);
console.log(values);

const users1 = [
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
    name: 'Ann',
    isStudent: true,
  },
  {
    id: 4,
    name: 'Donald',
    isStudent: false,
  },
];
