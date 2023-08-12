let nomes = ["Daniel", "Maria", "Macos", "Joao", "Ana"];

nomeNoArray = "Daniel";

// Vefificando array com o método includes()
if(nomes.includes(nomeNoArray)){
    console.log(`O nome ${nomeNoArray} está no array`)
}else{
    console.log(`O nome ${nomeNoArray} não está no array`);
}

console.log("----------------------------");

// Verificação com array loop For
for(let i = 0; i < nomes.length; i++){
    if(nomes[i] == nomeNoArray){
        console.log(`O nome ${nomes[i]} está no array`);
    }
}

console.log("----------------------------")
// Verificando com loop Foreach
nomes.forEach(nome =>{
    if(nome == nomeNoArray){
        console.log(`O nome ${nomeNoArray} está no array`);
    }
});