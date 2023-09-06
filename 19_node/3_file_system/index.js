let {readFile, writeFile} = require('fs'); // Módulos da biblioteca fs (file system)

// Lendo um arquivo txt
readFile("arquivo.txt", "utf8", (error, texto)=>{
    if(error){
        throw error;
    }else{
        console.log(texto);
    }
});


// Escrevendo um arquivo txt
writeFile("arquivo.txt", "Texto por write file", (error) =>{
    if(error){
        throw error;
    }else{
        console.log("Escreveu com sucesso!");
    }
});