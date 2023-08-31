let lista = document.createElement('ul'); // Criando um elelento

for (let i = 0; i < 5; i++){ // Usando o loop for para preencher a ul (lista)

    let item = document.createElement('li'); // Criando um elelento

    let texto = document.createTextNode("Texto lista " + i); // Criando um elelento de texto

    item.appendChild(texto); // Adicinando o elelento de texto dentro de outro elemento

    lista.appendChild(item);
}

let container = document.getElementById("container-principal");

container.appendChild(lista);