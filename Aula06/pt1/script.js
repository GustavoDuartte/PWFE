const data = [
    {
        "titulo":"Titulo 3",
        "texto":"Texto 123"
    },
    {
        "titulo":"Titulo 4",
        "texto":"Texto 156"
    },
    {
        "titulo":"Titulo 5",
        "texto":"Texto 178"
    }
]

const card = document.querySelector(".card")
const body = document.querySelector("body")

for(let i =0; i < data.length; i++){

    var clone =  card.cloneNode(true)
    
    clone.classList.remove("model")

    clone.querySelector("h3").innerHTML = data[i].titulo
    clone.querySelector("p").innerHTML = data[i].texto

    clone.querySelector("button").addEventListener("click",(e)=>{
        console.log(e.target.parentNode)
        // let info = document.createElement("p")
        // info.innerHTML = "Alguem texto"
        // e.target.parentNode.appendChild(info)
    })

    body.appendChild(clone)
}

card.remove()