// 10) Faça um algoritmo que leia a largura e altura de uma parede, calcule e
// mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
// sabendo que cada litro de tinta pinta uma área de 2metros quadrados.

let width = 10;
let height = 10;

let area = width * height;

let amountPaint = area / 2;

console.log(`Área a ser pintada: ${area}m`);
console.log(`Quantidade de tinta a ser utilizada: ${amountPaint} litros`);