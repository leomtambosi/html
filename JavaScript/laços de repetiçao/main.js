let contador = 1;

while (contador <=10) {
    console.log(`Valor = ${contador}`);
    contador++;
}

console.clear();
let cont = 10;

while (cont >= 0) {
    console.log(`Valor = ${cont}`);
    cont--;
}

console.clear();

let i = 10,
text = '';
do {
text += `O número é ${i}\n`;
i++;
} while (i < 10);
console.log(text);

console.clear();
for (let a = 0; a < 10; a++) console.log(`Laço For número: ${a}`);

console.clear();
for (let b = 10; b > 0; b--) console.log(`Laço For número: ${b}`);

const frutas = ['apples', 'oranges', 'pears', 10, true];
console.clear();
for (let f = 0; f < frutas.length; f++) console.log(`Nome: ${frutas[f]} \n`);

console.clear();
const todos = [
    {
        id: 1,
        text: 'Take ou trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false,
    },
];

for (let t of todos) {
    console.log(t);
    console.log(t.text);
    console.log(t.id);
}