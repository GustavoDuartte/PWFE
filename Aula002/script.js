//Exercicio 1

// let nomes = [
//   "Miguel",
//   "Arthur",
//   "Gael",
//   "Theo",
//   "Heitor",
//   "Ravi",
//   "Davi",
//   "Bernardo",
//   "Gustavo",
//   "Isaac",
// ];

// function sorteio(nomes) {
//   let sorteado = Math.round(Math.random() * 10);

//   return nomes[sorteado];
// }

// console.log("O nome sorteado foi...");

// console.log(sorteio(nomes));

// //Exercicio 2

// let quant = prompt("Digite quantas pessoas deseja sortear: ");

// function rifa(nomes) {
//   let sorteado = Math.round(Math.random() * 10);

//   return nomes[sorteado];
// }

// console.log("Os tres nomes sorteados foram...")

// for (let i = 0; i < quant; i++) {
//   console.log(rifa(nomes));
// }

//Exercicio 3

const { throws } = require("assert");

// Ana Maria organiza campeonatos de diversos esportes, como futebol, basquete, entre outros, crie uma função que receba 40 nomes de times e quantos times cada grupo deve ter, a função deve mostrar na tela os times separados em grupos porém sorteados aleatóriamente.
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let times = [
  "Ases da Chuteira",

  "Foguetes do Gramado",

  "Tempestade Azul",

  "Chute de Ouro",
  "Terremoto Verde",

  "Demolidores da Capital",

  "Onda Laranja",

  "Clube da Chuteira",

  "Raposas do Futebol",

  "Dragões da Bola",

  "Chute ao Alvo",

  "É os guri",

  "Parisanduíche",

  "Camisa -1",

  "Seus Madrugas",

  "Time dos Vingadores",

  "Hora do Rush",

  "Chubakitos",

  "Canelas Frescas",

  "Cangaços",

  "Os Moscas",

  "Peladeiros de Segunda",

  "Amigos",

  "Hooligans",

  "A Máfia",

  "Inter de Melô",

  "Do Serasa não Passa",

  "No Fear",

  "Os Samurais",

  "Venenosos",

  "Cheers For Beers",

  "Los Tonicos",

  "Chili Peppers",

  "Potatos",

  "Corsários",

  "SPAM",

  "Parciais",

  "Os Imundos",

  "Os Predadores",

  "Time dos Sonhos",
];

let Numeros = [];

function Sortearnumero(max) {
  let nvnumero = Math.floor(Math.random() * max);
  while (Numeros.includes(nvnumero)) {
    nvnumero = Math.floor(Math.random() * max);
  }
  Numeros.push(nvnumero);
  return nvnumero;
}

function separarTime(times) {
  let count = 0;

  readline.question("Quantos times cada grupo terá?", (qtdTime) => {
    console.log("--------------------");
    do {
      for (let i = 0; i < qtdTime; i++) {
        console.log(times[Sortearnumero(times.length)]);
        count++;
      }
      console.log("--------------------");
    } while (count < times.length);
  });
}

separarTime(times);

//Exercicio 4

// let idade = prompt("Digite o ano de nascimento do competidor: ");

// function nasc(idade) {
//   let result = 2023 - idade;

//   return result;
// }

// console.log("A idade do competidor é " + nasc(idade) + " anos");

// //Exercicio 5

// let date = new Date();

// let dataNascimento = prompt("Digite a data do seu nascimento").split("/");

// function contaidade(datanascimento) {
//   let idadeAtual = date.getFullYear() - dataNascimento[2];

//   if (dataNascimento[1] > date.getMonth() + 1) {
//     idadeAtual--;
//   } else if (
//     dataNascimento[1] == date.getMonth() + 1 &&
//     dataNascimento[0] > date.getDate()
//   ) {
//     idadeAtual--;
//   }

//   return idadeAtual;
// }

// console.log("O competidor tem " + contaidade(dataNascimento) + " anos de idade");
