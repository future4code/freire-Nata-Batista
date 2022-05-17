//Exercícios de interpretação de código
/*EXERCÍCIO-1)

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}*
// A) O CÓDIGO COMPARA O RESTO DA DIVISÃO POR 0
// B) QUANDO PAR
// C) QUANDO IMPAR

//EXERCÍCIO-2)*

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
// A) PARA INFORMAR A FRUTA E O PREÇO DELA.
// B) O PREÇO DA FRUTA MAÇÃ É R$ 2.25
// C) O PREÇO DA FRUTA PÊRA É R$ 5

//EXERCÍCIO-3)

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
// A) ESTÁ RECEBENDO O NUMERO DO USUARIO.
// B) PRA 10 VAI IMPRIMIR A MENSAGEM "Esse número passou no teste", JÁ PRA -10 NÃO VAI APARECER NADA.
// C) NÃO EXISTE VALOR RELACIONADO A VARIAVEL "MENSAGEM", DENTRO DE CONSOLE.LOG.*/

//Exercícios de escrita de código
//EXERCÍCIO-1)

const idade = Number(prompt("Qual a sua idade?"))

if (idade > 18 ){
    console.log("Você pode dirigir!");
} else {
    console.log("Você não pode dirigir!");
}

//EXERCÍCIO-2)

const turno = prompt("Digite M, V ou N")

if (turno.toUpperCase() === "M"){
  console.log("Bom Dia!");
}
else if (turno.toUpperCase() === "V")
{
  console.log("Boa Tarde!");
} 
else if (turno.toUpperCase() === "N") 
{
  console.log("Boa Noite!");
}

//EXERCÍCIO-3)

const turno1 = prompt("Digite M, V ou N")

switch (turno1.toUpperCase()){
  case "M":
    console.log("Bom Dia!");
    break
  case "V":
    console.log("Boa Tarde!");  
    break
  case "N":
    console.log("Boa Noite!");
    break
  default:
    console.log("Insira um Turno Válido");
break
}

//EXERCÍCIO-4)

const generoFilme = prompt("Qual gênero de filme irão assistir?")
const preçoFilme = Number(prompt("Qual o preço do filme?"))

 if ((generoFilme.toUpperCase() === "FANTASIA") && (preçoFilme < 15)){
   console.log("Bom Filme!");

 } else {
   console.log("Escolha outro Filme");
 }