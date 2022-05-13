// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemnte sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura,largura) {
altura= prompt("digite a area")
largura= prompt("digite a largura")

console.log(altura*largura);
}

// EXERCÍCIO 02
function imprimeIdade(anoAtual,anoNascimento) {
  anoAtual= prompt("digite ano atual")
  anoNascimento= prompt("digite o ano do seu nascimento")

console.log(anoAtual-anoNascimento);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
return peso / (altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome,idade,email) {
  nome= prompt("digite seu nome")
  idade= prompt("digite sua idade")
  email= prompt("digite seu email")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor,cor2,cor3) {
  cor= prompt("digite uma cor favorita")
  cor2= prompt("digite a segunda cor")
  cor3= prompt("digite a terceira")
lista= [cor,cor2,cor3]

console.log(lista);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {

  return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let x= string1.length
  let y= string2.length
  
  return x === y
}


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {

  return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let ultimaPalavra= array[array.length-1]
  let primeiraPalavra= array[0]
  
  array[array.length-1]= primeiraPalavra
  array[0]= ultimaPalavra
    return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let x= string1.toUpperCase()
  let y= string2.toUpperCase()
  
  return x === y
}

// EXERCÍCIO 13
//function checaRenovacaoRG(anoAtual,anoNascimento,anoEmissaoCarteira) {
  //anoAtual= 
  //anoNascimento=
  //anoEmissaoCarteira=}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {

  let ensinoMedio= prompt("Você possui ensino médio completo?")
  let disponibilidade= prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  let simOUnao= maisDe18 && ensinoMedio && disponibilidade
  
  return 
}