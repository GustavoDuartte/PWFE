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