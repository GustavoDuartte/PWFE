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

var qtd = prompt("Digite quantos times quer que tenha em cada grupo: ");

var casa = [];
var grupos = [];

for (var i = 0; i < 40; i++) {
  var numero = Math.round(Math.random() * 40);
  if (casa[i] != numero) {
    casa.push(numero);
  }
}

var i = 0;

let qtdtime = 40 / qtd;

do {
  for (let i = 0; i < qtd; i++) {
    var numero = Math.round(Math.random() * 40);

    if (casa[i] != numero) {
      console.log(times[numero]);
      grupos[i] = times[numero];
    }
  }

  console.log(" ");

  i++;
} while (i < qtdtime);

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
