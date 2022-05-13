//Exercícios de interpretação de código
/*EXERCICIO-1

function minhaFuncao(variavel) {
	return variavel * 5
}

//console.log(minhaFuncao(2)) //R= 10
//console.log(minhaFuncao(10)) //R= 50

//a) O que vai ser impresso no console?
//R= 10
//R= 50
//b) NÃO VAI APARECER NADA, MAS ELAS CONTINUARÃO VALENDO 10 E 50.

EXERCICIO-2

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//a)SABER SE CENOURA ESTÁ INCLUSO NO TEXTO DO USUARIO
//b)TRUE, TRUE, TRUE*/

                  //Exercícios de escrita de código

EXERCICIO-1
//A
function infeu() {
	console.log("Eu sou Natã, tenho 26 anos, sou do Rio de Janeiro e sou estudante.");
}

infeu()

//B

function infeu2(nome, idade, cidade, profissao){
		console.log(`Eu sou ${nome}, tenho ${idade} anos, sou do ${cidade} e sou ${profissao}.`);
}

		infeu2("Natã", 26, "Rio de Janeiro", "Estudante")

//EXERCICIO-2

//a)
function soma(n1, n2){
	return n1 + n2
}

console.log(soma(10,15));

//b)
function retornoBol(n1, n2){
	return n1 >= n2
}
console.log(retornoBol(20,15));

//c)
function parimp(n1){


	return n1 % 2===0
}
console.log(parimp(21));

//d)
function tamanhomsg(n1){
	let x= n1.length
	let y= n1.toUpperCase()

	return x + " " + y
}
console.log(tamanhomsg("mensagem"));


EXERCIO-3

function soma(n1, n2){
	return n1 + n2
}

function subtração(n1, n2){
	return n1 - n2
}

function multiplicação(n1, n2){
	return n1 * n2
}

function divisão(n1, n2){
	return n1 / n2
}

let num1= Number(prompt("Digite um número"))
let num2= Number(prompt( "Digite mais um número"))

console.log(`Números inseridos ${num1} e ${num2}`);

console.log(`A Soma é ${soma(num1,num2)}`);
console.log(`A Subtração é ${subtração(num1,num2)}`);
console.log(`A Diferença é ${subtração(num1,num2)}`);
console.log(`A Multiplicação é ${multiplicação(num1,num2)}`);
console.log(`A Divisão é ${divisão(num1,num2)}`);