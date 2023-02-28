let inpEmail = document.querySelector("#email");
let inpSenha = document.querySelector("#senha");

const base = [
  {
    email: "teste@gmail.com",
    senha: "123456",
    nome: "Teste",
    id: 2,
  },
  {
    email: "teta@gmail.com",
    senha: "123654",
    nome: "Teta",
    id: 1,
  },
  {
    email: "macaco@gmail.com",
    senha: "2001290",
    nome: "Macaco",
    id: 3,
  },
];

function autenticar() {
  let email = inpEmail.value;
  let senha = inpSenha.value;

  let usuario = base.find((user) => {
    return user.email == email && user.senha == senha;
  });

  if (usuario != undefined) {
    let info = {
      id: usuario.id,
      nome: usuario.nome,
    };

    localStorage.setItem("usuario", JSON.stringify(info));

    window.location.href = "./home.html";
  } else {
    alert("Vaza!");
  }

  // let infoUsuario = {
  //   email: email,
  //   senha: senha,
  // };

  // let options = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(infoUsuario),
  // };

  // fetch("http://hostapi.com:3000/login", options)
  //   .then((resp) => {
  //     return resp.json();
  //   })
  //   .then((data) => {
  //     data = {
  //       id: 1,
  //       username: "Fulano",
  //       role: "Gerente",
  //     };
  //     console.log(data);
  //   });

  // if (email == "teste@gmail.com" && senha == "123456") {
  //   let info = {
  //     username: "Fulano",
  //     userid: 1,
  //   };

  //   localStorage.setItem("userdata", JSON.stringify(info));

  //   window.location.href = "./home.html";
  // } else {
  //   alert("Email ou senha inválidos!");
  // }
}
