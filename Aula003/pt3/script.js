var body = document.querySelector("body");

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

for (let i = 0; i < destinos.length; i++) {
  let destino = destinos[i];

  let banner = document.createElement("div");

  banner.className = "banner";
  banner.style.backgroundImage = `url(${destino.imagem})`;

  let dest = document.createElement("p");
  dest.innerHTML = destino.destino;

  let desc = document.createElement("p");
  desc.innerHTML = destino.descricao;

  banner.appendChild(dest);
  banner.appendChild(desc);
  body.appendChild(banner);
}
