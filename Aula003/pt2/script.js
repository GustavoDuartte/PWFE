var banner = document.querySelector(".banner");
var destino = document.querySelector("#destino");
var descricao = document.querySelector("#descricao");

var destinos = [
  {
    imagem:
      "https://meulugar.quintoandar.com.br/wp-content/uploads/2021/11/Monumento-Osasco-osasco-sp-viviane-giacometti-1-850x680.jpg",
    destino: "Osasco",
    descricao: "Planos a partir de R$120",
  },
  {
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Ipaneman_beach_Rio_de_Janeirossa.jpg/250px-Ipaneman_beach_Rio_de_Janeirossa.jpg",
    destino: "Ipanema",
    descricao: "Curta as ferias em familia",
  },
  {
    imagem:
      "https://inglaterrabrasil.com.br/wp-content/uploads/sites/8/2022/08/conheca-londres.jpg",
    destino: "Londres",
    descricao: "Conheça as piramides",
  },
];

let indice = gerarNumero(destinos.length);

destino.innerHTML = destinos[indice].destino;
descricao.innerHTML = destinos[indice].descricao;
banner.style.backgroundImage = `url(${destinos[indice].imagem})`;

function gerarNumero(size) {
  let num = Math.round(Math.random() * size);
  return num;
}
