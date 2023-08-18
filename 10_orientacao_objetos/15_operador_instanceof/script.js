// Criando classe pai
class Mamifero{
    // Método construtor
    constructor(patas){
        this.patas = patas;
    }
}

// Instanciando um objeto a partir da classe Mamifero
let coiote = new Mamifero(4);

// Acessando o valor da propriedade do objeto
console.log(coiote.patas);

// Criando uma nova classe filha da classe Mamifero, que vai herdar as propriedsdes da classe pai
class Cachorro extends Mamifero{
    // Método construtor
    constructor(patas, raca){
        super(patas, patas); // Acessando a propriedae herdada da classe pai
        this.raca = raca;
    }

    // Métodos
    latir(){
        console.log("Au Au");
    }
}

// Instanciando um objeto a partir da classe Cachorro
let pug = new Cachorro(4, "Pug");

// Acessando o valor da propdiedade do objeto instancado da classe achorro que herdou da classe Mamifero
console.log(pug.patas);

// Executando o método do objeto instanciado da classe que herdou da classe Cachorro
pug.latir();

// Verificando com instanceof se a classe Cachorro é uma instancia da classe Mamifero
console.log(new Cachorro instanceof Mamifero);

// Verificando com instanceof se o objeto coiote é uma instancia da classe Mamifero
console.log(coiote instanceof Mamifero);

// Verificando com instanceof se o objeto coiote é uma instancia da classe Cachorro
console.log(coiote instanceof Cachorro);

// Verificando com instanceof se o objeto pub é uma instancia da classe Mamifero
console.log(pug instanceof Mamifero);

// Verificando com instanceof se o objeto pub é uma instancia da classe Cachorro
console.log(pug instanceof Cachorro);