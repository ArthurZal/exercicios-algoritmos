// 29) Desenvolva um programa que leia o nome de um funcionário, seu salário,
// quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de
// acordo com a tabela a seguir:
//  - Até 3 anos de empresa: aumento de 3%
//  - entre 3 e 10 anos: aumento de 12.5%
//  - 10 anos ou mais: aumento de 20%


let nomeFuncionario = "Arthur Oliveira";
let salarioAtual = 1920;
let anosTrabalhados = 1;

if (anosTrabalhados < 3) {

    let reajuste = (salarioAtual * 3) / 100;
    console.log(reajuste);
    console.log(`Seu salário após reajusto é de ${salarioAtual +  reajuste}`);

} else if (anosTrabalhados >= 3 && anosTrabalhados < 10) {

    let reajuste = (salarioAtual * 12.5) / 100;
    console.log(reajuste);
    console.log(`Seu salário após reajusto é de ${salarioAtual +  reajuste}`);

} else {

    let reajuste = (salarioAtual * 20) / 100;
    console.log(reajuste);
    console.log(`Seu salário após reajusto é de ${salarioAtual +  reajuste}`);

}