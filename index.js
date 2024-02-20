const formulario = document.getElementById("formulario-de-cadastro");
const nomes = [];
const numeros = [];

let adicionaLinha = "";

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionaContato();
  atualizaTabela();
  atualizaTotalDeContatos();
});

function adicionaContato() {
  const nomeContato = document.getElementById("nome-contato");
  const numeroContato = document.getElementById("numero-contato");

  if (nomes.includes(nomeContato.value)) {
    alert(`Erro! Contato com nome ou número já adicionado na agenda.`);
  } else {
    nomes.push(nomeContato.value);
    numeros.push(numeroContato.value);

    let linha = "<tr>";
    linha += `<td>1</td>`;
    linha += `<td>${nomeContato.value}</td>`;
    linha += `<td>${numeroContato.value}</td>`;
    linha += "</tr>";

    adicionaLinha += linha;
  }
  nomeContato.value = "";
  numeroContato.value = "";
}

function atualizaTabela() {
  const atualizaLista = document.querySelector("tbody");
  atualizaLista.innerHTML = adicionaLinha;
}

function atualizaTotalDeContatos() {
  const totalDeContatos = (document.getElementById(
    "total-de-contatos"
  ).innerHTML = numeros.length);
}
