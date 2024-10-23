// 16) [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um
// fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
// já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
// quantos dias de vida um fumante perderá e exiba o total em dias.

let cigarrosPorDia = 10;
let anosFumando = 1;
let tempoPerdidoPorDia = cigarrosPorDia * 10;

let diasPerdidos = (tempoPerdidoPorDia * (anosFumando * 365) / 60) / 24;

console.log(diasPerdidos.toFixed());

                        