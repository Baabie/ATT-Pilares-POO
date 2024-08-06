/* 3. Dado o seguinte diagrama:

Identifique os atributos e comportamentos que são comuns entre os
3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
comportamento diferente para cada animal. */




// Superclasse Animal
class Animal {
    constructor(protected nome: string, protected idade: number) {}

    emitirSom(): void {
        console.log(`${this.nome} está fazendo um som.`);
    }

    mover(): void {
        console.log(`${this.nome} está se movendo.`);
    }

    // Método para imprimir informações básicas do animal
    imprimeInfo(): void {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
}

// Classe Cavalo, que herda Animal
class Cavalo extends Animal {
    galopar(): void {
        console.log(`${this.nome} está galopando.`);
    }

    // Método para imprimir informações específicas do cavalo
    emitirSom(): void {
        console.log(`${this.nome} está relinchando.`);
    }
}

// Classe Cachorro, que herda Animal
class Cachorro extends Animal {
    enterrarOsso(): void {
        console.log(`${this.nome} está enterrando um osso.`);
    }

    // Método para imprimir informações específicas do cachorro
    emitirSom(): void {
        console.log(`${this.nome} está latindo.`);
    }
}

// Classe Gato, que herda Animal
class Gato extends Animal {
    escalarArvore(): void {
        console.log(`${this.nome} está escalando uma árvore.`);
    }

    // Método para imprimir informações específicas do gato
    emitirSom(): void {
        console.log(`${this.nome} está miando.`);
    }
}

// Exemplo de uso:
const cavalo = new Cavalo("Spirit", 5);
const cachorro = new Cachorro("Rex", 3);
const gato = new Gato("Mimi", 2);

cavalo.imprimeInfo();
cavalo.emitirSom();
cavalo.galopar(); 

cachorro.imprimeInfo();
cachorro.emitirSom();
cachorro.enterrarOsso(); 

gato.imprimeInfo();
gato.emitirSom(); 
gato.escalarArvore();
