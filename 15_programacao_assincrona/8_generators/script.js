// Criando uma função Generator
function* criadorID(){
    let id = 0;
    while(true) {
        yield id++;
    }
}

let criaId = criadorID() // Colocando a funçãodentro de uma váriavel

console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);

console.log(criaId.next());