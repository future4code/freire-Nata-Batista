/*Exercícios de interpretação de código
EXERCICIO 1
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) //FALSE

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) //FALSE

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) //TRUE

console.log("d. ", typeof resultado) //BOOLEAN

//EXERCICIO 2

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) //SERÁ IMPRESSO A CONCATENAÇÃO DOS DOIS STRINGS OU NUMERO QUE VAI SER INSERIDO.

//EXERCICIO 3

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)
console.log(soma) //Indicando que quer trabalhar com o Número usando Number*/

//Exercícios de escrita de código
//Exercício1

/*let idade = prompt("Qual a sua idade?")
let idadeAmigo = prompt("Qual idade do seu melhor amigo?")

let x = idade > idadeAmigo
console.log("Sua idade é maior do que a do seu melhor amigo?",x);

let diferença= Number(idade) - Number(idadeAmigo)
console.log(diferença);

//Exercício2

const npar= Number(prompt("Insira um numero Par"))
const resto= npar % 2

console.log(resto); //COM PAR DA 0, COM IMPAR DA 1

//Exercício3

let idadeAnos= Number(prompt("Insira sua Idade em Anos"))

let idadeMeses= idadeAnos*12
let idadeDias= idadeMeses*30
let idadeHoras= idadeDias*24

console.log("Sua idade em meses é",idadeMeses);
console.log("Sua idade em dias é",idadeDias);
console.log("Sua idade em horas é",idadeHoras);

Exercício4*/

let n1= Number(prompt("insira um numero"))
let n2= Number(prompt("insira outro numero"))

let n11= n1 > n2
let n22= n1 === n2

console.log("O primeiro numero é maior que segundo?",n11);
console.log("O primeiro numero é igual que segundo?",n22);
console.log("O primeiro numero é divisível pelo segundo?",n1 % n2 === 0);
console.log("O segundo numero é divisível pelo primeiro?",n2 % n1 === 0);
