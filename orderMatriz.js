//El programa fue diseñado para que se ingresen por parametro, una matriz conformada por n*m elementos los cuales se pueden ver en el archivo testCases.js
//Admite valores positivos y negativos
//Funciona de la siguiente manera, primero se obtienen los valores en diagonal, luego se ordena segun los criterios y finalmente
//se crea una nueva matriz que cumpla con los requisitos.

const { givenMatriz, givenMatriz2, givenMatriz3, givenMatriz4, givenMatriz5 } = require('./testCases')

function orderMatriz (matriz) {
    let randomNumbers = [] // obtengo los numeros de la diagonal
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (i == j) {
                randomNumbers.push(matriz[i][j])
            }
        }
    }

    //ordeno los numeros segun criterios solicitados
    let arrayToSort = [] 
    arrayToSort.push(randomNumbers.filter(x => x > 0).sort((a,b) => b-a)) //ordeno positivos
    if (randomNumbers.filter(x => x == 0).length > 0) arrayToSort.push(randomNumbers.filter(x => x == 0)) // ordeno ceros
    arrayToSort.push(randomNumbers.filter(x => x < 0).sort((a,b) => b-a)) //ordeno negativos

    //convierto los datos a un array limpio
    let sortedArray = arrayToSort.join().split(',').map(Number) 

    //genero la matriz resultado
    let result = []
    for (let i = 0; i < matriz.length; i++) {
        let row = []
        for (let j = 0; j < matriz[i].length; j++) {
            if (i == j) {
                row.push(sortedArray[i])
            } else {
                row.push("**")
            }
        }
        result.push(row)
    }
    console.log(result) //muestro por pantalla la matriz
    return result
}

orderMatriz(givenMatriz)
orderMatriz(givenMatriz2)
orderMatriz(givenMatriz3)
orderMatriz(givenMatriz4)
orderMatriz(givenMatriz5)
