// Criando uma Promise
const p1 = new Promise(function(resolve,reject){
    setTimeout(function() {
        resolve(10);
    }, 5000);
});

// Outra forma de criar uma Promise
const p2 = Promise.resolve(11);

// Outra forma de criar uma Promise
const p3 = new Promise((resolve,reject) => {
    resolve(12);
})

// Usando o método all para execurar todas as promises
Promise.all([p1,p2,p3]).then((values) => console.log(values));