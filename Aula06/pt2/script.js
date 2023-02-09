const tarefa = document.querySelector("#tarefa")//input
const listapendentes = document.querySelector("#pendentes")
const listafinalizadas = document.querySelector("#finalizadas")
const card = document.querySelector(".card")

function cadastrar(){
    let clone = card.cloneNode(true)

    clone.classList.remove("model")

    clone.querySelector("#item").innerHTML = tarefa.value

    clone.querySelector("#data").innerHTML = agora();

    clone.querySelector("button").addEventListener("click", (e)=>{
        let elemento = e.target.parentNode

        elemento.querySelector("#data").innerHTML = agora()

        listafinalizadas.appendChild(elemento)
    })

    listapendentes.appendChild(clone)
}

function agora(){
    return new Intl.DateTimeFormat('pt-BR',{
        dateStyle: "short",timeStyle:"short"
    }).format(new Date())
}