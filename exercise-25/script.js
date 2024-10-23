let segmento1 = 15;
let segmento2 = 14;
let segmento3 = 25;

if (segmento1 < (segmento2 + segmento3) && segmento2 < (segmento1 + segmento3) && segmento3 < (segmento1 + segmento2)) {

    console.log(`É possível formar um triângulo!`);

} else {

    console.log(`Não é possível forma um triângulo`);

}