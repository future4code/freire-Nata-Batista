/*Exercícios de interpretação de código
EXERCICIO-1

let array
console.log('a. ', array) //a. UNDEFINED

array = null
console.log('b. ', array) //b. NULL

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) //c. 11

let i = 0
console.log('d. ', array[i]) //d. 3

array[i+1] = 19
console.log('e. ', array) //e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13

const valor = array[i+6]
console.log('f. ', valor) //f. 9

EXERCICIO-2

const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

R= "SUBI NUM ÔNIBUS EM MIRROCOS" E A CONTAGEM DE STRINGS "27"

Exercícios de escrita de código

EXERCICIO-1

let nome= prompt("Digite o nome do Usuario")
let email= prompt("Digite o emal do Usuario")

console.log(`O email ${email} foi cadastrado com sucesso. Seja bem-vindo(a) ${nome}`);

EXERCICIO-2

let comidas = [ "Pizza", "Churrasco", "Hamburguer", "Feijoada", "Nhoque"]
console.log(comidas);

console.log(`Essas são as minhas comidas preferidas: 
${comidas[0]}
${comidas[1]}
${comidas[2]}
${comidas[3]}
${comidas[4]}`);

let cUsuario= prompt("Qual sua comida preferida?")
comidas[1]= cUsuario

console.log(comidas);

EXERCICIO-3*/

let listaDeTarefas= []
let taf1= prompt("Digite uma tarefa")
let taf2= prompt("Digite outra tarefa")
let taf3= prompt("Digite mais outra tarefa")

listaDeTarefas.push(taf1,taf2,taf3)
console.log(listaDeTarefas);

let indice= prompt("Digite o Indice de uma tarefa que já realizou (1,2,3)")

let x= Number(indice-1)
listaDeTarefas.splice(x,1)

console.log(listaDeTarefas); 