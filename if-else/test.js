/* Controlador de Fluxo

    - IF(Se)
    - ELSE(Se não)

    Operadores de comparação
    > maior que
    < menor que
    == igual que 
*/

const notaAluno = 7
const notaDeCorte = 5

if(notaAluno < notaDeCorte){
    // O que será executado, se o IF for verdadeiro
    console.log('Parabens Você passou de ano!!!!')
}

else {
    // Se o IF retornar falso, vai ser executado
    console.log('Infelizmente ficou de recuperação!!!!')
}