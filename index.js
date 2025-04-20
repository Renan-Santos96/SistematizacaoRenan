document.addEventListener("DOMContentLoaded", function () {
    console.log("clicado");
  const botao = document.getElementById("meuBotaoSobreNos");
  const destino = document.getElementById("secaoDestino");
  const botaoAgendamento = document.getElementById("meuBotaoAgendamento");
  const destinoAgendamento = document.getElementById("secaoDestinoAgendamento");

  botao.addEventListener("click", function () {
    destino.scrollIntoView({ behavior: "smooth" });
  });

  botaoAgendamento.addEventListener("click", function () {
    destinoAgendamento.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const botaoHome = document.getElementById('Botaohome');

  if (botaoHome) {
      botaoHome.addEventListener('click', function() {
          window.location.href = 'index.html'; 
      });
  } else {
      console.error('Erro: O botão "Home" com o ID "Botaohome" não foi encontrado.');
  }
});