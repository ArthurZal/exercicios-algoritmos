let number = 320;
let predecessor = number - 1;
let successor = number + 1;

if (isNaN(number) || !Number.isInteger(number)) {
    console.log("Por favor, digite um número válido")
} else {
    
    console.log(`
                    O antecessor de ${number} é ${predecessor}
                    O sucessor de ${number} é ${successor}
                `)
}