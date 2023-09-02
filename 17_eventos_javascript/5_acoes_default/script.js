let a = document.querySelector("a"); // Selecionando o elemento

function eventoDefault(e){ // Criando uma função
    // Evento do objeto
    e.preventDefault();
    console.log("Não vai para o link")
}

// a.addEventListener("click", eventoDefault); // adicionando um evento de click

// a.addEventListener("click", function(e){ // Função anônima
//     e.preventDefault();
//     console.log("Não vai para o link")
// });

a.addEventListener("click", e =>{ // Arrow function
    e.preventDefault();
    console.log("Não vai para o link")
});