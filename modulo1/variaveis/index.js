/*Exercícios de interpretação de código
1-EXERCICIO
let a = 10
let b = 10

console.log(b) // 10

b = 5
console.log(a, b) // 10 5
*/

/*2-EXERCICIO
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) // 10 10 10
*/

/*3-EXERCICIO
let p = prompt("Quantas horas você trabalha por dia?") "let horasDeTrabalho"
let t = prompt("Quanto você recebe por dia?") "let salarioPorDia"
alert(`Voce recebe ${t/p} por hora`) {"let salarioPorDia"/"let horasDeTrabalho"}
*/

//Exercícios de escrita de código
//1-EXERCICIO

let nome
let idade
console.log(typeof nome, idade) //tipo undefined pq eu não dei valor pra essa variavel

nome= prompt("Qual é o seu nome?")
idade= prompt("Qual a sua idade?")
console.log(typeof nome)
console.log(typeof idade) //agora foi pra string, são caracteres
console.log("Olá meu nome é", nome,"você tem", idade, "anos.")

//2-EXERCICIO
let roupaCinza = "Você está usando uma roupa cinza hoje?"
let chove = "Está chovendo hoje?"
let sair = "Voce vai sair hoje?"

let resRoupa = "sim"
let resChove = "sim"
let resSair = "sim"

console.log(roupaCinza, resRoupa)
console.log(chove, resChove)
console.log(sair, resSair)

//3-EXERCICIO
let a = 10
let b = 25
c = a
a = b
b = c

console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b) 

/*DESAFIO EXTRA*/

let n1 = prompt("Digite um Número")
let n2 = prompt("Digite outro Número")
let n11 = Number(n1)
let n22 = Number(n2)

let somaAdicao = Number(n11 + n22)
let somaMulti = Number(n11 * n22)