// 18) Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
// dela e depois mostre se ela pode ou não votar.


let anoNascimento = 2000;
let anoAtual = 2024;
let idade = anoAtual - anoNascimento;

if (idade >= 18) {
    
    console.log("Pode votar!!!");

} else {
    
    console.log("Ainda não pode votar!!!");

}

console.log(idade);