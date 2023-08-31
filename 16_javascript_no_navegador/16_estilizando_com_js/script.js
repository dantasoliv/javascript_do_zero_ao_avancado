let elemento = document.getElementById('titulo-principal') // Cessando um elemento pelo id com .getElementById

setTimeout(function(){ // setTimeout executa o código dentro da função após um tempo determindo
    elemento.style.color = 'red'; // Alterando o estilo da cor de um elelento
    elemento.style.backgroundColor = 'blue';
    elemento.style.width = '400px'
}, 1000)

console.log(elemento.style); // Exibindo n console todas as propriedade do style do elemento