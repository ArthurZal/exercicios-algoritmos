let productValue = 98.5;

let discount = productValue * 5 / 100;

let promotionalPrice = productValue - discount;

console.log(`O valor final do produto com desconto é de: R$${promotionalPrice.toFixed(2)}`);