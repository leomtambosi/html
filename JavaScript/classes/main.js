
class Carro {
    constructor(nome, ano) {
    this.nome = nome;
    this.ano = ano;
    }
    }
    // Intanciando objetos à classe
    let meuCarro1 = new Carro('Ford', 2014);
    let meuCarro2 = new Carro('Audi', 2019);
    //Imprimindo valores
    console.log(meuCarro1.nome);
    console.log(meuCarro1.ano);
    console.log(meuCarro2.nome);
    console.log(meuCarro2.ano);


console.clear();
class NovoCarro {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
    idadeCarro(ano) {
        return ano - this.ano;
    }
}
let dataHoje = new Date();
let ano = dataHoje.getFullYear();
let meuNovoCarro = new NovoCarro('Ford', 2014);
console.log(meuNovoCarro.idadeCarro(ano));

class ClassePessoa {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthyear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const pessoa1 = new ClassePessoa('John', 'Doe', '1980-04-03');
const pessoa2 = new ClassePessoa('Marry', 'Smith', '1970-06-13');
console.log(pessoa1)
console.log(pessoa2.dob.getFullYear());
console.log(pessoa2.getBirthyear());
console.log(pessoa1.getFullName());

function PessoaFunc(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthyear = function () {
        return this.dob.getFullYear();
    };
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    };
}
const pessoa3 = new PessoaFunc('John', 'Doe', '1980-04-03');
const pessoa4 = new PessoaFunc('Marry', 'Smith', '1970-06-13');
console.log(pessoa3);
console.log(pessoa4.dob.getFullYear());

PessoaFunc.prototype.getBirthDayMonth = function () {
    let dados = [this.dob.getDate(), this.dob.getMonth() + 1];
    return dados;
};
PessoaFunc.prototype.getFirstName = function () {
    return `${this.firstName}`;
};
console.log(pessoa3.getBirthDayMonth());
console.log(pessoa4.getFirstName());