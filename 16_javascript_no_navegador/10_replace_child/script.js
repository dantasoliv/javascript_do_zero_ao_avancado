let novoElemento = document.createElement("p"); // Criando um tag p

let texto = document.createTextNode("Novo texto"); // Criando um elenento de texto

novoElemento.appendChild(texto); // Adicionando um elemento dentro do elenento especificado

let heading = document.querySelector("#titulo-principal"); // Acessando o elemento pelo id

let paiHeading = heading.parentNode; // Acesando o elelento pai do elemento espsficicado

paiHeading.replaceChild(novoElemento, heading); // usando o .replaceChild para substituir um elemento por outro novo dentro do elelento pai