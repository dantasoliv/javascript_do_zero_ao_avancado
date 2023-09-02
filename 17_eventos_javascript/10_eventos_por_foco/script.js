let input1 = document.querySelector("#input1"); // Selecionando o elemento

input1.addEventListener("focus", function(){ // focus é usado quando o o eleento está em foco
    console.log("Entrou no input")
});

input1.addEventListener("blur", function(){ // blur é usado quando o o eleento perde o foco
    console.log("Saiu do input")
});