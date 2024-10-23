// 14) A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva
// um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
// quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar,
// sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.

let qtdKM = 100;
let qtdDays = 9;

let priceKm = qtdKM * 0.20;
let priceDays = qtdDays * 90;

let totalValue = priceKm + priceDays;

console.log(`Você atingiu o total de ${qtdKM}Km rodados`);
console.log(`Você alugou o veículo durante ${qtdDays} dias`);
console.log(`Valor total a pagar: R$${totalValue.toFixed(2)}`);


