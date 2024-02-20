alert("Boas vindas ao jogo do número secreto!");
let numeroInicial = parseInt(prompt("Qual é o número inicial que você gostaria para o sorteio?"
));
let numeroMaximo = parseInt(prompt("E qual é o número máximo que deve ser sorteado?"))
let numeroSecreto = parseInt(Math.random() * numeroMaximo) + numeroInicial;
// console.log(numeroSecreto);
let chute;
let tentativas = 1;
    while(chute != numeroSecreto){
        chute = prompt(`Escolha um número entre ${numeroInicial} e ${numeroMaximo}`);
        if(chute == numeroSecreto){
            let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
            alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
            break;
        }else if (chute < numeroSecreto) {
            alert("Você errou! Número secreto é maior!");
        }else {
            alert("Você errou! Número secreto é menor!");
        }
        tentativas++;
    }

