let btn1 = document.querySelector("#btn1"); // Selecionando um elemento
let p = document.querySelector("p");

function msg(e){ // Criando um função
    console.log("Clicou no btton");

    // Objeto do evento
    e.stopPropagation();// stopPropagation serve parta paar a propagação de um evento que está no elemento pai
}

btn1.addEventListener("click", msg); // Adicionando um evento no elelento selecionado

p.addEventListener("click", function(){
    console.log("Clicou no parágrafo")
});