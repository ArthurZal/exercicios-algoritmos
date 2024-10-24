// 30) [DESAFIO] Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo
// de triângulo será formado:
//  - EQUILÁTERO: todos os lados iguais
//  - ISÓSCELES: dois lados iguais
//  - ESCALENO: todos os lados diferentes

let segmento1 = 11;
let segmento2 = 5;
let segmento3 = 10;

if (segmento1 === segmento2 && segmento2 === segmento3) {

    console.log('EQUILÁTERO: todos os lados iguais');

} else if (segmento1 === segmento2 || segmento1 === segmento3 || segmento2 === segmento3) {

    console.log('ISÓCELES: dois lados iguais');

} else {

    console.log('ESCALENO: todos os lados diferentes');
}