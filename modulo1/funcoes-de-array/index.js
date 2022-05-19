//Exercícios de interpretação de código
//EXERCICIO 1)
/*
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })
  
// A) ELE IMPRIME NOME, APELIDO E O INDICE.

//EXERCICIO 2)

  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)

  // A) APENAS O NOME NOS ARRAYS.

//EXERCICIO 3)


const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)

  // A) OS USUÁRIOS QUE NÃO TIVEREM "CHIJO" NO APELIDO.*/

//Exercícios de escrita de código
//EXERCICIO 1)

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

// A)
const nomeDogs = pets.map((item) => {
    return item.nome
})
console.log(nomeDogs);

// B)
const nomeSalsichas = pets.filter((item) => {
    return item.raca == "Salsicha"
})
console.log(nomeSalsichas);

// C)
const nomePoodles = pets.filter((item) => {
    return item.raca == "Poodle"
})
//console.log(nomePoodles);

const mensagemPoodles = nomePoodles.map((item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
})
console.log(mensagemPoodles);

//EXERCICIO 2)

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// A)
const nomeItens = produtos.map((item) => {
    return item.nome
})
console.log(nomeItens);

// B)
const precoDesconto = produtos.map((item) => {
    return item.nome + " " + (item.preco * 0.95)
})
console.log(precoDesconto);

// C)
const nomeBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})
console.log(nomeBebidas);

// D)
const ype = produtos.filter((item) => {
    return item.nome.includes("Ypê")
})
console.log(ype);

// E)
const textoYpe = ype.map((item) => {
    return `Compre ${item.nome} por ${item.preco}.`
})
console.log(textoYpe);
