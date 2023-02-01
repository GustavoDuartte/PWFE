// var paragrafo = documentquerySelector("p");

// console.log(paragrafo.innerHTML);

var paragrafo = document.querySelector("p");
var inpNome = document.querySelector("#nome");

var foto = document.querySelector("#foto");
var descricao = document.querySelector("#descricao");

function mostrarNome() {}

function atualizarDados() {
  let info = {
    descricao: "Uma panda Feliz",
    imagem: [
      "https://wwfbrnew.awsassets.panda.org/img/web_113974_40820.jpg",
      "https://super.abril.com.br/wp-content/uploads/2017/03/preto-no-branco-a-explicac3a7c3a3o-cientc3adfica-para-as-cores-do-panda.png?w=1024&h=682&crop=1",
      "https://cdn.trendsbr.com.br/uploads/noticias/2022/08/01/zos1yvz6gx8m.jpg",
    ],
  };

  descricao.innerHTML = info.descricao;
  foto.src = info.imagem[gerarNumero()];
}

function gerarNumero() {
  let num = Math.floor(Math.random() * 3);
  return num;
}
