//getElementById(id)
//getElementsByTagName(tag)
//getElementsByClassName(class)
//querySelector("")
//querySelectorALL("")
//#id
//.class
//tag

// var titulo = document.getElementById("titulo");

// var titulos = document.getElementsByTagName("h1");

// var titulos = document.getElementsByClassName("texto")

// var titulo = document.querySelectorAll("h1")

// paragrafo.style.color = "purple";
// paragrafo.style.fontSize = "2rem";

// var paragrafo = document.querySelector("p")

// paragrafo.innerHTML = "A Informacao que eu quiser";

// paragrafo.classList.remove("n1")

// paragrafo.classList.add("n2")

// console.log(paragrafo.classList)

// var body = document.querySelector("body");

// body.className = "dark"

// body.classList.add("n1")

// body.classList.toggle("n2")
// body.classList.toggle("n2")

// let dados = document.querySelectorAll("p")

// dados.forEach((i)=>{
//     console.log(i.innerHTML)
// })

// var pNome = document.querySelector("#nome")
// var pEndereco = document.querySelector("#endereco")
// var pTelefone = document.querySelector("#telefone")
// var pNascimento = document.querySelector("#nascimento")

// let dados = {
//     "nome":pNome.innerHTML,
//     "endereco":pEndereco.innerHTML,
//     "telefone":pTelefone.innerHTML,
//     "nascimento":pNascimento.innerHTML
// }

//  console.log(dados)

// let info = {
//     "nome":"Fulano da silva",
//     "endereco":"Avenida das ruas",
//     "telefone":"19987654532",
//     "nascimento":"18/10/2003"
// }

// pNome.innerHTML = info.nome;
// pEndereco.innerHTML = info.endereco;
// pTelefone.innerHTML = info.telefone;
// pNascimento.innerHTML = info.nascimento;

var Nome = document.querySelector("#nome")
var Descricao = document.querySelector("#descricao")
var Valor = document.querySelector("#valor")

let produto = {
    "nome":Nome.innerHTML,
    "descricao":Descricao.innerHTML,
    "valor":Valor.innerHTML
}

console.log(produto)

let trocaproduto = {
    "nome":"Laranja",
    "descricao":"Redonda",
    "valor":"2,99"
}

Nome.innerHTML = trocaproduto.nome
Descricao.innerHTML = trocaproduto.descricao
Valor.innerHTML = trocaproduto.valor

console.log(trocaproduto)