let date = new Date();

let dataNascimento = prompt("Digite a data do seu nascimento").split("/");

function contaidade(datanascimento) {
  let idadeAtual = date.getFullYear() - dataNascimento[2];

  if (dataNascimento[1] > date.getMonth() + 1) {
    idadeAtual--;
  } else if (
    dataNascimento[1] == date.getMonth() + 1 &&
    dataNascimento[0] > date.getDate()
  ) {
    idadeAtual--;
  }

  return idadeAtual;
}

console.log("O competidor tem " + contaidade(dataNascimento) + " anos de idade");