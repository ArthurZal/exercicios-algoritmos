// 17) Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
// 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
// o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.

let velocidade = Number(prompt('Digite sua velocidade:'));
let limiteDeVelocidade = 80;
let valorMultaKM = 5;
let kmUltrapassados = velocidade - limiteDeVelocidade;
let valorTotalMulta = valorMultaKM * kmUltrapassados;

if (velocidade > limiteDeVelocidade) {
    alert(`Você ultrapassou o limite de velocidade e está sendo multado em: R$${valorTotalMulta.toFixed(2)}`);

} else {
    alert(`Você está dentro do limite de velocidade permitido`)
}