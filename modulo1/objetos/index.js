//Exercícios de interpretação de código
/*1-EXERCICIO

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) //Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) //Virginia Cavendish
console.log(filme.transmissoesHoje[2]) //{canal: "Globo", horario: "14h"}

2-EXERCICIO

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) //{nome: 'Juca', idade: 3, raca: 'SRD'}
console.log(gato) //{nome: 'JuBa', idade: 3, raca: 'SRD'}
console.log(tartaruga) //{nome: 'Jubo', idade: 3, raca: 'SRD'}
//B) ELA CHAMA INFORMAÇÕES  DE UMA CONSTANTE JÁ CRIADA.

3-EXERCICIO

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) //false "O VALOR DE BACKENDER É FALSE"
console.log(minhaFuncao(pessoa, "altura")) //undefined "PQ NÃO EXISTE A CHAVE ALTURA"

//Exercícios de escrita de código
//1-EXERCÍCIO*/
//a)
const exemploUm= {
    nome: 'Milena',
    apelido: ["Mi, Lena, Mimi"]
}

function imprimirApresentacao(a,b){
    return(`Eu sou ${a}, mas pode me chamar de: ${b}`);

}
console.log(imprimirApresentacao(exemploUm.nome, exemploUm.apelido));

//b)
const exemploUmAtualizado= {
    ...exemploUm,
    apelido: ["Emy, Lele, Mary"]
}
console.log(imprimirApresentacao(exemploUmAtualizado.nome, exemploUmAtualizado.apelido));

//2-EXERCÍCIO

const exemploDois= {
    nome: 'Natã',
    idade: 26,
    profissao: "Desenvolvedor"
}

const exemploTres= {
    nome: 'Flávio',
    idade: 55,
    profissao: "Eletricista"
}

function imprimiroArray(a){

return `${a.nome}, ${a.nome.length}, ${a.idade}, ${a.profissao}, ${a.profissao.length}`
}

console.log(imprimiroArray(exemploDois));
console.log(imprimiroArray(exemploTres));

//3-EXERCÍCIO

const carrinho= []

const frutaUm= {
	nome: "Mamão",
	disponibilidade: true
}
const frutaDois= {
	nome: "Banana",
	disponibilidade: true
}
const frutaTres= {
	nome: "Maçã",
	disponibilidade: true
}

function addFrutas(a){
	return carrinho.push(a)
}

addFrutas(frutaUm)
addFrutas(frutaDois)
addFrutas(frutaTres)

console.log(carrinho);