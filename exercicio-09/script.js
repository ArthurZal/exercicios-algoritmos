// 9) Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
// e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.

let wallet = 2000;

let walletInBRL = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
}).format(wallet);

console.log(walletInBRL)

let dollarValue = 5.69;

let buyDollar = wallet / dollarValue;

console.log(Intl.NumberFormat('EN-US', {
    style: 'currency',
    currency: 'USD'
}).format(buyDollar));