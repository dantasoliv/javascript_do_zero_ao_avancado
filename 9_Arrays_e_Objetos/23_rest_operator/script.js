let num = 1;
let num2 = 5;
let num3 = 3;
let num4 = 4;

function imptirmirNumero(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

// Com o operador rest podemos usar um número indeterminado de parâmetros na função
imptirmirNumero(num,num3);
console.log("------------------");
imptirmirNumero(num,num3,num2,num4);
console.log("------------------");
imptirmirNumero(1,3,6,8,2,5,7);
