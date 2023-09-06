const {createServer} = require('http'); // Importando o método createServer mo módulo http

let server = createServer((request, response) =>{
    response.writeHead(200,{"Content-Type": "text/html"}) // Cabeçalho
    response.write('<h1>Hello Word!</h1><p>Primeira página com Node.js</p>'); // Corpto da página
    response.end();
});

server.listen(8000); // Porta em que o servidor vai executar

console.log("Ouvindo a porta 8000");