let arr = [1,2,3,4,5];
let arr1 = [];

function iterarArray(arr){
    if(arr.length == 0){
        throw new Error("O array não pode estar vazia");
    }else{
        for(i = 0; i < arr.length; i++){
            console.log(arr[i]);
        }
    }
}

function arrayVazio(arr){
    if(arr.length > 0){
        throw new Error("OArray preciar estar vazio");
    }else{
        console.log("Agora deu certo");
    }
}

iterarArray(arr); // Não apresentou erro
// iterarArray(arr1); Apresentou erro
// arrayVazio(arr1); Não apresentou erro
// arrayVazio(arr); Apresentou erro