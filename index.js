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

