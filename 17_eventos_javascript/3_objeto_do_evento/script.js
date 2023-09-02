let btn1 = document.querySelector("#btn1"); // Selecionando o elemento
let btn2 = document.querySelector("#btn2");

function msg(e){ // Criando uma função
    console.log(e);
}

btn1.addEventListener("click", msg); // Adicionando um evento de clique

btn2.addEventListener("click", function(event){ // Usando uma função anônima
    console.log(event);
});