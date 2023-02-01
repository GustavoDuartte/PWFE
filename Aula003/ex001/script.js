var body = document.querySelector("body");
var head = document.querySelector("head");

let header = document.createElement("header");
header.className = "header1";
body.appendChild(header);

let section = document.createElement("section");
body.appendChild(section);

let texto = document.createElement("p")
texto.innerHTML = "Bem-Vindo a loja de periféricos Kallidnus"
header.appendChild(texto);

var produtos = [
  {
    imagem:
      "https://www.microdigistore.com.br/arquivos/PRODUTOS/9071629749695680290/1_G_Mouse-Gamer-Havit-MS1017--3200-DPI-7-Botes--_25.jpg",

    descricao: "Mouse Gamer Havit MS1017 - 6400 DPI, 7 Botões - RGB",
  },
  {
    imagem:
      "https://crystalinformatica.com.br/wp-content/uploads/2022/04/Teclado-Gamer-Mecanico-PCYes-Zot-White-RGB.jpg",

    descricao:
      "TECLADO GAMER COOLER MASTER CK721, WIRELESS, RGB, 65%, SWITCH VERMELHO, BRANCO, CK-721-SKTR1-US",
  },
  {
    imagem:
      "https://cdn.awsli.com.br/600x700/2150/2150819/produto/130004849/cd1d076ca1.jpg",
    descricao: "Headset Gamer 7.1 Mic PC Console e Celular Haiz K2",
  },
];

for (let i = 0; i < produtos.length; i++) {
  let produto = produtos[i];

  let banner = document.createElement("div");
  banner.className = "banner";
  banner.style.backgroundImage = `url(${produto.imagem})`;

  let desc = document.createElement("p");
  desc.innerHTML = produto.descricao;

  let botao = document.createElement("button");
  botao.className = "botao";
  botao.innerHTML = "Comprar"

  banner.appendChild(desc);
  banner.appendChild(botao);
  section.appendChild(banner);
}
