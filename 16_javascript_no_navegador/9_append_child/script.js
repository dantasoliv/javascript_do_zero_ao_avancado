let novoElemento = document.createElement("p"); // Criando um tag p

let texto = document.createTextNode("Algum texto aqui") // Criando um elenento de texto

novoElemento.appendChild(texto); // Adicionando um elemento dentro do elenento especificado

let p = document.querySelector("#paragrafo-principal")

let pai = p.parentNode; // Acessando o elemennto pai do elemento especificado

pai.appendChild(novoElemento); // Inserindo um elemento dentro do elemento pai especificado, este elemento será adicionado após todos os elementos dentro do elelento pai