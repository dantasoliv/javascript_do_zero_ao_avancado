let btn1 = document.querySelector("#btn1"); // Selecionando o elemento
let btn2 = document.querySelector("#btn2");

function msg(){ // Criando uma função
    console.log("Clicou");
}

btn1.addEventListener("click", msg); // Adicionando um evento de clique

btn2.addEventListener("click", function(){
    btn1.removeEventListener("click", msg); // Removendo o evento de clique
});