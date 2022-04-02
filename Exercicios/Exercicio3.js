/* Faça fetch dos dados através da API (https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood) e retorne uma lista(array) com os nomes dos primeiros 10 resultados. */

import fetch from 'node-fetch'
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
.then(resposta => {
    if(resposta.ok){
       return resposta.json()
    }
}).then(dados => {
    const dezPrimeiros = []
    /*for(let i = 0; i < 10; i++){
        dezPrimeiros.push(dados.meals[i].strMeal)
    }*/
    dados.meals.map((item, index) => {
        if(index < 10) {
            dezPrimeiros.push(item.strMeal)
        }
       
    })
    console.log(dezPrimeiros)
})