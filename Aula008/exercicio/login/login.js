let inpMatricula = document.querySelector("#mat");
let inpSenha = document.querySelector("#senha");

const base = [
  {
    senha: "abc123",
    nome: "Alberto",
    matricula: 132455,
  },
  {
    matricula: 132456,
    senha: "asd321",
    nome: "Jair",
  },
];

function autenticar() {
  let matricula = inpMatricula.value;
  let senha = inpSenha.value;

  let usuario = base.find((user) => {
    return user.matricula == matricula && user.senha == senha;
  });

  if (usuario != undefined) {
    let info = {
      matricula: usuario.matricula,
      nome: usuario.nome,
    };

    localStorage.setItem("usuario", JSON.stringify(info));

    window.location.href = "../home/index.html";
  } else {
    alert("Retire-se!");
  }
}
