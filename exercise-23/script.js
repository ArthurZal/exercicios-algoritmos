let nome = "Arthur Oliveira";
let sexo = "Masculino";
let valorTotalDaCompra = 200;

if (sexo === "Feminino") {

    let valorDesconto = (valorTotalDaCompra * 13) / 100;
    valorTotalDaCompra = valorTotalDaCompra - valorDesconto;
    console.log(valorDesconto);
    console.log(valorTotalDaCompra);

} else {

    let valorDesconto = (valorTotalDaCompra * 5) /100;
    valorTotalDaCompra = valorTotalDaCompra - valorDesconto;
    console.log(valorDesconto);
    console.log(valorTotalDaCompra);

}