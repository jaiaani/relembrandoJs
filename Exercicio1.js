/* 1. Escreva uma função soma que retorna a soma dos números de um array usando spread operator
 */
const lista = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89]
function soma(...numeros){
    let total = 0
    numeros.map((numero) => total += numero )
    return total
}
console.log(soma(...lista))