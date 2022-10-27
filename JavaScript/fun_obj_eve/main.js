function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}
let x = addNums(4, 5);
console.log(x);
let z = myFunc(4, 5);
console.log(z);
function myFunc(num1, num2) {
    return num1 * num2;
}

const hello = () => {
    return 'Aoba familia';
    };
    
    console.log(hello); 
    console.log(hello()); 

const addNums2 = (num1 = 1, num2 = 1) => {
    return num1 + num2;
};
let soma = addNums2(5, 10);
console.log(soma);

const boasVindas = () => {
    alert('bom dia');
    console.log('bom dia');
};
const eventClique = () => {
    console.log('tu deu uma clicada');
};
const mouseEmcima = () => {
    console.log('esfregadas');
};