const { matricula, nome } = JSON.parse(localStorage.getItem("usuario"));

const body = document.querySelector("body");
const saudacao = document.querySelector("#saudacao");

saudacao.innerHTML += nome;

const data = base.find((item) => {
  return item.id === id;
});

if (data != undefined) {
  data.tarefas.forEach((tarefa) => {
    criarTarefa(tarefa.data, tarefa.descricao, tarefa.status);
  });
}

function criarTarefa(data, descricao, status) {
  let card = document.createElement("div");
  card.className = cardc;
  let pdata = document.createElement("p");
  let pdescricao = document.createElement("p");

  pdata.innerHTML = data;
  pdescricao.innerHTML = descricao;

  if (status == 1) {
    card.style.backgroundColor = "green";
  }

  card.appendChild(pdata);
  card.appendChild(pdescricao);

  body.appendChild(card);
}
