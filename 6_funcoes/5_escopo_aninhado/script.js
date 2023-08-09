// Escopo global
let a = 10;

function multiplicar(x,y){
    // Escopo local da função
    let a  = x * y;
    if(a > 0){
        // Escopo local do bloco if que esta dentro da função
        let a = 0;
        a++;
        console.log(a);
    }
    console.log(a);
}

console.log(a);

multiplicar(3,7);