window.addEventListener("keydown", function(e){ // Adicionando o evento de tecla keydown
    if(e.key == "q"){ // Verificando se determinada tecla foi pressionada
        console.log("Apertou a tecla q");
    }
});

window.addEventListener("keyup", function(e){ // Adicionando o evento de tecla keyup
    if(e.key == "Enter"){ // Verificando qse determinada tecla foi pressionada
        console.log("Soltou a tecla enter");
    }
});