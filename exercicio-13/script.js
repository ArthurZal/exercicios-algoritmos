// 13) Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o
// seu novo salário, com 15% de aumento.

let salary = 1987;

let raise = salary * 15 / 100;

let newSalary = salary + raise;

console.log(`Valor de aumento: R$${raise}`);
console.log(`O novo o valor do salário pós aumento é de: R$${newSalary.toFixed(2)}`);
