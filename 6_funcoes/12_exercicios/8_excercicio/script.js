function limiteCaracteres(texto){
    if(texto.length > 10){
        console.log("Texto muito longo");
    }else{
        console.log("Texto dentro do limite");
    }
    console.log(texto.length);    
}

limiteCaracteres("Boa Noite");
limiteCaracteres("Bom dia, Boa tarde e Boa noite");
limiteCaracteres("-10");
