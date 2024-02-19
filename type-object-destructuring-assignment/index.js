//1.Типы данных, объекты. деструктуризация
//1.1 Литерал объекта. Набор символов, чтение которых интерпретатором кода приводит к созданию в оперативной памяти браузера объекта
// const user = {};
// let person = new Object();
// person.age = 25;
// person.name = 'Lena';

const user = {
    name: 'Alex',
    age: 25,
    isStudent: true,
    adress: {
        country: 'newCountry',
        city: 'Moscow'
    }
};

// 1.2 Spread оператор
let superUser = {...user};
// скопирует все поля, но появится новая ссылка
// Вложенные данные не копируются, а указываются ссылки к существующим
// Как копировать вложенные:


const newSuperUser = {
    ...superUser,
    adress: {...superUser.adress, city: 'London'}, // здесь ещё и менем строковое поле
}

console.log(newSuperUser);

// 1.3 Деструктурирующее присваивание – это специальный синтаксис, который позволяет нам «распаковать» массивы или объекты в несколько переменных, так как иногда они более удобны.
//    у нас есть массив с именем и фамилией
let arr = ["Ilya", "Kantor", undefined];
//
// // деструктурирующее присваивание
//  записывает
firstName = arr[0]
surname = arr[1]
console.log(`First name ${firstName} surname ${surname}`);


[firstName, surname] = arr;

const person = {
    name: 'Kirill',
    age: 24,
    adress: {
        country: 'Poland',
        city: 'Warsaw',
    },
};
const {name: newName, age, car, adress} = person; // из объекта, если name зарезервировано, то даем новое имя
console.log(newName);

const{name: newName2, age: personAge, adress: {country: newCountry}} = person;

console.log(`new name 2 ${newName2}, new age ${personAge}, newCountry ${newCountry}`);
// - создаем новую переменную из вложенного типа

// 1.4 Создание:
//     users - массив объектов типа user
// newUser - объект типа user
// const newUsers = [...users, newUser]; создали копию + в конец добавили ещё один элемент массива
// const newUsers = [...users].concat(newUser); тоже самое