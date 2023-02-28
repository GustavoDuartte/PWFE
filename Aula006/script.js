const endereco = document.querySelector("#id-endereco"); //input
const nome = document.querySelector("#id-nome"); //input
const lanche = document.querySelector("#id-lanche option"); //input
const bebida = document.querySelector("#id-bebida option"); //input
const qbeb = document.querySelector("#qbeb"); //input
const qlan = document.querySelector("#qlan"); //input
const formaPagamento = document.querySelector("#id-pagamento option"); //input
const listaCozinha = document.querySelector("#cozinha");
const listaEntrega = document.querySelector("#entrega");
const card = document.querySelector(".card");

function cadastrar() {
  var clone = card.cloneNode(true);

  clone.classList.remove("model");

  clone.querySelector("#nome").innerHTML = nome.value;
  clone.querySelector("#endereco").innerHTML = endereco.value;
  clone.querySelector("#lanche").innerHTML =
    lanche.value + " | Quantidade: " + qlan.value;
  clone.querySelector("#bebida").innerHTML =
    bebida.value + " | Quantidade: " + qbeb.value;
  clone.querySelector("#pagamento").innerHTML = formaPagamento.value + "   Valor: R$30,00";
  clone.querySelector("#data").innerHTML = agora();

  if (validarDados()) {
    listaCozinha.appendChild(clone);
  }

  clone.querySelector("button").addEventListener("click", (e) => {
    let elemento = e.target.parentNode;

    elemento.querySelector("#data").innerHTML = agora();

    listaEntrega.appendChild(elemento);

    clone.querySelector("button").innerHTML = "Finalizar";

    clone.querySelector("button").addEventListener("click", (e) => {
      e.target.parentNode.remove();
    });
  });
}

function agora() {
  return new Intl.DateTimeFormat("pt-br", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date());
}
function validarDados() {
  if (nome.value == "" || endereco.value == "") {
    alert('O campo " Nome: " e " Endereço: " é obrigatório');
    return false;
  }
  return true;
}
