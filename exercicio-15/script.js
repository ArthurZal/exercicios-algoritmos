// 15) Crie um programa que leia o número de dias trabalhados em um mês e mostre o
// salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
// por hora trabalhada.

let daysWorked = 30;
let hoursWorked = 8;

let valueHour = 25;

let valueDay = 8 * 25;

let salary = valueDay * daysWorked;

console.log(`Salário final: R$${salary.toFixed(2)}`);