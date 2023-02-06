var conteudos = [
  {
    funcionario: "Vitoria da Cruz",
    matricula: "010203",
    setor: "Eletronico",
    comissao: 5,
    vendas: [
      {
        data: "03/02/2023",
        valor: 1250.0,
      },
      {
        data: "03/02/2023",
        valor: 899.0,
      },
      {
        data: "04/02/2023",
        valor: 5999.9,
      },
    ],
  },
  {
    funcionario: "Cecilia Martins",
    matricula: "124576",
    setor: "Eletronico",
    comissao: 5,
    vendas: [
      {
        data: "15/01/2023",
        valor: 3290.9,
      },
      {
        data: "16/01/2023",
        valor: 1320.99,
      },
      {
        data: "16/02/2023",
        valor: 990.9,
      },
    ],
  },
  {
    funcionario: "Joaquim Souza",
    matricula: "124578",
    setor: "Moveis",
    comissao: 12,
    vendas: [
      {
        data: "08/01/2023",
        valor: 4500.0,
      },
      {
        data: "08/01/2023",
        valor: 599.99,
      },
      {
        data: "09/01/2023",
        valor: 259.9,
      },
    ],
  },
];
var func1mat = document.querySelector("#func1mat");
var func1nome = document.querySelector("#func1nome");
var func1setor = document.querySelector("#func1setor");
var func1tot = document.querySelector("#func1tot");
var func1com = document.querySelector("#func1com");

var func2mat = document.querySelector("#func2mat");
var func2nome = document.querySelector("#func2nome");
var func2setor = document.querySelector("#func2setor");
var func2tot = document.querySelector("#func2tot");
var func2com = document.querySelector("#func2com");

var func3mat = document.querySelector("#func3mat");
var func3nome = document.querySelector("#func3nome");
var func3setor = document.querySelector("#func3setor");
var func3tot = document.querySelector("#func3tot");
var func3com = document.querySelector("#func3com");

var conteudo1 = conteudos[0];
var conteudo2 = conteudos[1];
var conteudo3 = conteudos[2];

var com1 = conteudo1.vendas[0].valor;
var com2 = conteudo1.vendas[1].valor;
var com3 = conteudo1.vendas[2].valor;
var com11 = conteudo2.vendas[0].valor;
var com22 = conteudo2.vendas[1].valor;
var com33 = conteudo2.vendas[2].valor;
var com111 = conteudo3.vendas[0].valor;
var com222 = conteudo3.vendas[1].valor;
var com333 = conteudo3.vendas[2].valor;

var ganha1 = (com1 + com2 + com3) * (5 / 100);
var ganha2 = (com11 + com22 + com33) * (5 / 100);
var ganha3 = (com111 + com222 + com333) * (12 / 100);

var tot1 = com1 + com2 + com3;
var tot2 = com11 + com22 + com33;
var tot3 = com111 + com222 + com333;

func1mat.innerHTML = conteudo1.matricula;
func1nome.innerHTML = conteudo1.funcionario;
func1setor.innerHTML = conteudo1.setor;
func1tot.innerHTML = "R$ " + tot1;
func1com.innerHTML = "R$ " + ganha1;

func2mat.innerHTML = conteudo2.matricula;
func2nome.innerHTML = conteudo2.funcionario;
func2setor.innerHTML = conteudo2.setor;
func2tot.innerHTML = "R$ " + tot2;
func2com.innerHTML = "R$ " + ganha2;

func3mat.innerHTML = conteudo3.matricula;
func3nome.innerHTML = conteudo3.funcionario;
func3setor.innerHTML = conteudo3.setor;
func3tot.innerHTML = "R$ " + tot3;
func3com.innerHTML = "R$ " + ganha3;
