const frutas = ['apple', 'orange', 'cherry'];
frutas.forEach(minhafuncao);
function minhafuncao(item, index) {
    console.log(`Índice: ${index}`);
    console.log(`Elemento: ${item}`);
}

const frutas01 = ['apple', 'orange', 'cherry'];
frutas01.forEach((index, item) => {
    console.log(`Índice: ${index}`);
    console.log(`Elemento: ${item}`);
});

const tarefas = [
    {
        id: 1,
        texto: 'Levar o lixo para fora',
        isCompleted: true,
    },
    {
        id: 2,
        texto: 'Encontrar com o chefe',
        isCompleted: true,
    },
    {
        id: 3,
        texto: 'Consulta no dentista',
        isCompleted: false,
    },
];
tarefas.forEach((teste) => console.log(teste.texto));

const numeros = [4, 9, 16, 25];
const newArray = numeros.map(Math.sqrt);
console.log('Números:');
console.log(numeros);
console.log('Novo array:');
console.log(newArray);

const mapText = tarefas.map((valor) => {
    return valor.texto;
});
console.log(mapText);

const idades = [32, 33, 16, 40];
let filtroIdade = idades.filter((idade) => {
    return idade >= 18;
});
console.log(filtroIdade);

const filtoCompletas = tarefas.filter((item) => {
    return item.isCompleted === true;
});
console.log(filtoCompletas);

const meuArray = [
    { nome: 'apples', quantidade: 2 },
    { nome: 'bananas', quantidade: 0 },
    { nome: 'cerejas', quantidade: 5 },
];
console.log(
    meuArray.find((fruta) => {
        return fruta.nome === 'cerejas';
    })
);