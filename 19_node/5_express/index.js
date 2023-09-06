let express = require('express'); // Importando o framework Express

let app = express() // Instanciando o Express

app.get('/',  function(req, res){ // Criando uma rota 
    res.send('Primeira rota com Express');
});

app.get('/teste', function(req, res){ // Criando outra rota
    res.send('testendo rota');
});

app.listen(3000, function(){ // Escutando na porta 3000
    console.log("A aplicação está funcionando na porta 3000")
});