let idade = prompt("Digite o ano de nascimento do competidor: ");

function nasc(idade) {
  let result = 2023 - idade;

  return result;
}

console.log("A idade do competidor é " + nasc(idade) + " anos");