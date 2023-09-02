let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2")

btn1.addEventListener("mousedown", function(){ // mousedown quanndo aperta o botão do mouse
    console.log("Apertou o botão")
});

btn1.addEventListener("mouseup", function(){ // mouseup quando solta o botão do mouse
    console.log("Soltou o botão");
});

btn2.addEventListener("dblclick", function(){ // dblclick quando ocorre um duplo clique no botão do mouse
    console.log("Duplo click");
});

btn2.addEventListener("contextmenu", function(e){ // contextmenu quando ocorre um clique com o botão direito do mouse
    e.preventDefault();
    console.log("Clicou com o botão direito");
})