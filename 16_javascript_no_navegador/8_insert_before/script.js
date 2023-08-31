let novoElemento = document.createElement("p"); // Criando uma tag p

let texto = document.createTextNode("Algum texto") // Criando um elemento de texto

novoElemento.appendChild(texto); // Adicioando um eleneto de texto dentro de um outro elemento

let elementoAlvo = document.querySelector("#titulo-principal"); // Selecionando o elemento alvo

let elementoPai = document.querySelector("#container-principal"); // Selecionando o elemento pai

elementoPai.insertBefore(novoElemento, elementoAlvo); // usando o insertBefore para adicionar um elementoantes do elemento especificado