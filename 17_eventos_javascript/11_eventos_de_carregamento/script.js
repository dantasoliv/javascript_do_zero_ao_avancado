window.addEventListener("load", function(){
    alert("Assine nssos termos de uso");
});

window.addEventListener("beforeunload", function(e){
    event.returnValue = null;
});