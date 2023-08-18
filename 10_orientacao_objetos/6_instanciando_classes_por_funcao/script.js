// Função para o construtor de objetos
function criaCachorro(raca, patas, cor){
    // Propriedades
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;

    // Métodos
    cachorro.latir = function(){
        console.log('Au Au');
    }

    return cachorro;
}

// Instanciando um objeto com função de condtruyot e passando os parâmetros
let doberman = criaCachorro('Doberman', 4, 'preto');

console.log(doberman);

doberman.latir();