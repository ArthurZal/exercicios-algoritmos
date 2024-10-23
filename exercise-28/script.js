let larguraTerreno = 10;
let comprimentoTerreno = 15;

let areaTerreno = comprimentoTerreno * larguraTerreno;

if (areaTerreno < 100) {

    console.log(areaTerreno, 'TERRENO POPULAR');

} else if (areaTerreno >= 100 && areaTerreno <= 500) {

    console.log(areaTerreno, 'TERRENO MASTER');

} else {

    console.log(areaTerreno, 'TERRENO VIP')
}

