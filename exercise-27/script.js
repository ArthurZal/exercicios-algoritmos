let primeiraNota = 4;
let segundaNota = 4;

let media = (primeiraNota + segundaNota) / 2;

if (media <= 4.9) {

    console.log('REPROVADO');

} else if (media >= 5.0 && media <= 6.9) {

    console.log('RECUPERAÇÃO');

} else {
 
    console.log('APROVADO');
}

console.log(media);