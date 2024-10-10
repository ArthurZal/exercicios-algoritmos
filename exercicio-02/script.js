let userName = prompt("Qual é o seu nome?");

if (!userName || userName.trim() === "" || !isNaN(userName)) {

    alert("Por favor, preencha seu nome corretamente!");

} else {

    alert(`Olá ${userName}, é um prazer te conhecer!`);
}

