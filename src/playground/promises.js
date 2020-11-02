const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject({ name: 'Nam dep zai', age: 28 })
    }, 5000)
})

console.log('before');
promise.then((data) => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
console.log('after');