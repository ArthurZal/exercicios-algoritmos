// 8) Desenvolva um programa que leia uma distância em metros e mostre os valores
// relativos em outras medidas.
// Ex:
// Digite uma distância em metros: 185.72
// A distância de 85.7m corresponde a:
// 0.18572Km
// 1.8572Hm
// 18.572Dam
// 1857.2dm
// 18572.0cm
// 185720.0mm


let metersDistance = 10;

let kmDistance = metersDistance / 1000;
let hmDistance = metersDistance / 100;
let damDistance = metersDistance / 10;
let dmDistance = metersDistance * 10;
let cmDistance = metersDistance * 100;
let mmDistance = metersDistance * 1000;

console.log(`A distância de ${metersDistance} corresponde a:
                ${kmDistance.toFixed(2)} Km
                ${hmDistance} Hm
                ${damDistance} Dam
                ${dmDistance} Dm
                ${cmDistance} Cm
                ${mmDistance} Mm
                `)