// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    const arrayTotal = array.length
    return arrayTotal
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    arrayAoContrario = array.reverse()
    return arrayAoContrario
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let arrayOrdenado = array.sort((a, b) => a - b)
    return arrayOrdenado
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let i = 0
    arrayPares = []
    while (i < array.length) {
        if (array[i] % 2 === 0) {
            arrayPares.push(array[i])
        }
        i++
    }
    return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let i = 0
    arrayPares = []
    while (i < array.length) {
        if (array[i] % 2 === 0) {
            arrayPares.push((array[i]) * array[i])
        }
        i++
    }
    return arrayPares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let i = 0
    let maior = -Infinity
    while (i < array.length) {
        if (array[i] > maior) {
            maior = array[i]
        }
        i++
    }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}