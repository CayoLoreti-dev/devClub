// Array

const users = [
  // declarei variaveis dentro de uma array
  {
    idade: 30,
    nome: "rodolfo",
    conjuge: "aline",
  },

  {
    idade: 28,
    nome: "aline",
    conjuge: "rodolfo",
  },
];

// declarei OBJETOS dentro de uma array
const users2 = [
  { name: "rodolfo", age: 32 },
  { name: "Aline", age: 45, citty: "Niterói" },
];

// alterando o nome do OBJETO na posição 1 
users2[1].name = 'Laryssa'

console.log(users2)