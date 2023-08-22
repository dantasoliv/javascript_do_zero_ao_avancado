// Criando uma classe
class Endereco{
    // Métodos construtor
    constructor(rua, bairro, cidade, estado){
        this.rua = rua,
        this.bairro = bairro,
        this.cidade = cidade,
        this.estado = estado
    }

    // Métodos Set
    set alterarRua(rua){
        this.rua = rua;
    }

    set alterarBairro(bairro){
        this.bairro = bairro;
    }

    set alterarCidade(cidade){
        this.cidade = cidade;
    }

    set alterarEstado(estado){
        this.estado = estado;
    }

    // Método Get
    get exibirEndereco(){
        return `Rua: ${this.rua} \n Bairro: ${this.bairro} \n Cidade: ${this.cidade} \n Estado: ${this.estado}`;
    }
};

let meuEndereco = new Endereco("Bento Rodrigues", "Jd Ângela", "São Paulo", "São Paulo");

console.log(meuEndereco.exibirEndereco);

meuEndereco.alterarRua = "Joaquim Silva";

console.log(meuEndereco.exibirEndereco);

meuEndereco.alterarCidade = "Osasco";

console.log(meuEndereco.exibirEndereco);