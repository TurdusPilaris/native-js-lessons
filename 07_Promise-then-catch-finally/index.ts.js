//Promise

//1 основной поток в JS

//раньше работали вот с такими функциями, закидывался колбэк и когда возвращалась дата продолжали работать
// const fetch = (url, callback) => {
//
//
// }
// fetch('https://library.com/authors', (err, data) => {
//     if (err) {
//         console.log("Error");
//     } else {
//         fetch(`https://library.com/authors/${data.id}`, (err, data) => {
//             if (err) {
//                 console.log("Error");
//             } else {
//                 fetch(`https://library.com/authors/id/${data.books}`, (err, data) => {
//                     if (err) {
//                         console.log("Error");
//                     } else {
//                         fetch(`https://library.com/id/books/${data.bookid}`, (err, data) => {
//                             if (err) {
//                                 console.log("Error");
//                             } else {
//                                 fetch(`https://library.com/id/books/bookid${data.page}`, (err, data) => {
//                                     if (err) {
//                                         console.log("Error");
//                                     } else {
//
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

//callbackhall - адская пирамида колбэка

//Promise специальный объект содержит поля pending и result, пока он в состоянии PromiseState = pending тогда result = undefined
//Promise может перейти в 2 состоянии fulfilled (resolved)(будет какая то дата) если все ок или в rejected когда все плохо(будет ошибка)

// const promise = new Promise((res, rej)=>{});
//
// console.log(promise) // здесь будет PromiseState = pending и result = undefined

// const promise = new Promise((res, rej)=>{
//  rej();
// });
//
// console.log(promise) // здесь будет PromiseState = rejected и result = undefined

// const promise = new Promise(); // обязательно нужно указать executor - это функция callBack

//если бы мы писали сами конструктор Promise c двумя обязательными функциями resolve, reject
function Promise(cb) {
    const resolve = (result) => {
        return {
            state: 'fulfilled',
            result: result
        }
    }
    const reject = (err) => {
        return{
            state: 'rejected',
            result: err
        }
    }
    cb(resolve, reject)
}

//callBack в Promise нужен что бы конструктор Promise выкинул наружу эти внутренние функции, они нужны для изменения состояния промиса

const promise = new Promise((res, rej) => {
    if (err) {
        rej()
    } else {
        res()
    }
});