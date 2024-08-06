/* 1. Crie uma classe abstrata chamada Ingresso que possui um valor
em reais e um método imprimeValor()
a. crie uma classe Normal, que herda Ingresso..
b. crie uma classe VIP, que herda Ingresso e possui um valor
adicional. Altere o método imprimeValor para mostrar o valor
do ingresso somado com o adicional.
c. crie uma classe Camarote, que herda ingresso e possui um
valor adicional. Altere o método imprimeValor para mostrar o
valor do ingresso somado com o adicional. */


abstract class Ingresso {
    constructor(protected valor: number) {}

    abstract imprimeValor(): void;
}

class Normal extends Ingresso {
    imprimeValor(): void {
        console.log(`Valor do ingresso normal: R$ ${this.valor.toFixed(2)}`)
    }
}

class VIP extends Ingresso {
    private adicional: number;

    constructor(valor: number, adicional: number) {
        super(valor);
        this.adicional = adicional;
    }

    imprimeValor(): void {
        const valorTotal = this.valor + this.adicional;
        console.log(`Valor ddo ingresso VIP: R$ ${valorTotal.toFixed(2)}`)
    }
}