/* 2. Crie a classe Imovel, que possui um endereço e um preço.
a. crie uma classe Novo, que herda Imovel e possui um adicional
no preço. Crie métodos de acesso e impressão deste valor
adicional.
b. crie uma classe Velho, que herda Imovel e possui um desconto
no preço. Crie métodos de acesso e impressão para este
desconto. */

class Imovel {
    constructor(protected endereco: string, protected preco:number){}

    imprimeInfo(): void {
        console.log(`Endereço: ${this.endereco}, Preço: R$ ${this.preco.toFixed(2)}`);
    }
}

class Novo extends Imovel {
    private adicional: number;


    constructor(endereco: string, preco: number, adicional: number) {
        super(endereco, preco);
        this.adicional = adicional;
    }

    getAdicional(): number {
        return this.adicional;
    }

    imprimeAdicional(): void {
        console.log(`Adicional no preço: R$ ${this.adicional.toFixed(2)}`)
    }

    imprimeInfo(): void {
        const precoTotal = this.preco + this.adicional;
        console.log(`Endereço: ${this.endereco}, Preço do imóvel novo: R$ ${precoTotal.toFixed(2)}`);
    }
}

class Velho extends Imovel {
    private desconto: number;

    constructor(endereco: string, preco: number, desconto: number) {
        super(endereco, preco);
        this.desconto = desconto;
    }

    getDesconto(): number {
        return this.desconto;
    }

    imprimeDesconto(): void {
        console.log(`Desconto no preço: R$ ${this.desconto.toFixed(2)}`);
    }

    imprimeInfo(): void {
        const precoComDesconto = this.preco - this.desconto;
        console.log(`Endereço: ${this.endereco}, Preço do imóvel velho: R$ ${precoComDesconto.toFixed(2)}`);
    }
}

// Exemplo de uso:
const imovelNovo = new Novo("Rua A, 123", 300000, 50000);
const imovelVelho = new Velho("Rua B, 456", 300000, 40000);

imovelNovo.imprimeInfo();
imovelNovo.imprimeAdicional();

imovelVelho.imprimeInfo();
imovelVelho.imprimeDesconto();