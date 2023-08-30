// Criando uma função com delay
function somaComDelay(a,b){
    return new Promise(resolve =>{
        setTimeout(function(){
            resolve(a+b);
        }, 4000)
    });
}

// Criando uma função assíncrona
async function resSoma(a,b,c){
    let x = somaComDelay(a,b);
    let y = c;

    return await x + y; // Usando o await para esperar a função com delay ser resolvida
}

// Executando a função
resSoma(1,2,3).then(value => console.log(value));