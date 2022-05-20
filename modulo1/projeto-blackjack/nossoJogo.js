/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!");

const cartaUsuario = comprarCarta()
const cartaUsuario1 = comprarCarta();
const cartaPc = comprarCarta();
const cartaPc1 = comprarCarta();

if (confirm("Quer iniciar uma nova rodada?")) {

   console.log(`Usuário - cartas: ${cartaUsuario.texto} ${cartaUsuario1.texto} - pontuação ${cartaUsuario.valor + cartaUsuario1.valor}`);
   console.log(`Computador - cartas: ${cartaPc.texto} ${cartaPc1.texto} - pontuação ${cartaPc.valor + cartaPc1.valor}`);

   const valorTotalUsuario = cartaUsuario.valor + cartaUsuario1.valor
   const valorTotalPc = cartaPc.valor + cartaPc1.valor

   if (valorTotalUsuario === valorTotalPc) {
      console.log("Empate");
   }
   else if (valorTotalUsuario > valorTotalPc) {
      console.log("O usuário ganhou!");
   }
else {console.log("O Computador ganhou!");}

} else {
   console.log("O jogo acabou!");
}
