












let senhaSecreta = Math.floor(Math.random() * 50) + 1;


// Contador de tentativas
let tentativas = 0;


const limite = 7;






function verificarSenha() {


    const campo = document.getElementById("senha");
    const mensagem = document.getElementById("mensagem");
    const contador = document.getElementById("tentativas");


    let numero = Number(campo.value);


    // Verifica se o número é válido
    if (campo.value === "" || !Number.isInteger(numero) ||
        numero < 1 || numero > 50) {


        mensagem.textContent = "❌Número inválido, precisa ser um número de 1 a 50!❌";
        return;
    }


    // Verifica se ainda existe tentativas
    if (tentativas >= limite) {
        return;
    }
    tentativas++;


    // verifica se acerto
    if (numero === senhaSecreta) {


        mensagem.textContent = "🔓 Cofre desbloqueado! 🔓";


     // cofre abriu
    document.getElementById("imagem-cofre").src =
        "imagens/cofre-aberto.png";


    // ANIMACAO
    document.getElementById("imagem-cofre").classList.add("cofre-aberto");

    document.getElementById("botao-tentar").disabled = true;

    }
   
    else if (numero < senhaSecreta) {
        mensagem.textContent = "A senha é maior!";
    }
    else {
        mensagem.textContent = "A senha é menor!";
    }

    // ATUALIZA CONTADOR
    contador.textContent = "Tentativas: " + tentativas + " / 7";

    // VERIFICA TENTATIVAS
    let restantes = limite - tentativas;
    if (numero !== senhaSecreta) {
        if (restantes === 2) {
            mensagem.textContent += " ⚠️ Você só tem duas chances! ⚠️";
        }
        if (restantes === 0) {
            mensagem.textContent =
                "💔 Você perdeu! A senha era " + senhaSecreta;


            document.getElementById("botao-tentar").disabled = true;
        }
    }


    campo.value = "";
}

function reiniciarJogo() {


    // SORTEIA NOVA SENHA
    senhaSecreta = Math.floor(Math.random() * 50) + 1;


    // ZERA TENTATIVAS
    tentativas = 0;


    document.getElementById("mensagem").textContent =
        "Aguardando sua tentativa...";


    document.getElementById("tentativas").textContent =
        "Tentativas: 0 / 7";


    // LIMPA senha
    document.getElementById("senha").value = "";


    // BOTAO REATIVA
    document.getElementById("botao-tentar").disabled = false;


    // VOLTA COFRE F
document.getElementById("imagem-cofre").src =
    "imagens/cofre-fechado.png";


// SAI ANIMACAO
document.getElementById("imagem-cofre").classList.remove("cofre-aberto");
}

