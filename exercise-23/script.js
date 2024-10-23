let anoNascimento = 2014;
let anoAtual = 2024;
let idade = anoAtual - anoNascimento;
let idadeAlistamento = 18;

if (idade < idadeAlistamento) {

    console.log(`Faltam ${idadeAlistamento - idade} anos para o alistamento militar`);

} else {

    console.log(`Já se passaram ${idade - idadeAlistamento} anos desde o alistamento militar`);
}
