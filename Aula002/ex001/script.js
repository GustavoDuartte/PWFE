//Exercicio 1

let nomes = [
  "Miguel",
  "Arthur",
  "Gael",
  "Theo",
  "Heitor",
  "Ravi",
  "Davi",
  "Bernardo",
  "Gustavo",
  "Isaac",
];

function sorteio(nomes) {
  let sorteado = Math.round(Math.random() * 10);

  return nomes[sorteado];
}

console.log("O nome sorteado foi...");

console.log(sorteio(nomes));

//Exercicio 2

let quant = prompt("Digite quantas pessoas deseja sortear: ");

function rifa(nomes) {
  let sorteado = Math.round(Math.random() * 10);

  return nomes[sorteado];
}

console.log("Os tres nomes sorteados foram...")

for (let i = 0; i < quant; i++) {
  console.log(rifa(nomes));
}