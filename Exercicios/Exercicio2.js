//2. Faça fetch dos dados através da aPI (https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772) e retorne a ficha desta refeição com id, nome, área (país de origem), ingredientes (em uma única string) e as intruções.

import fetch from 'node-fetch'

fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
.then(resposta=>{
   if(resposta.ok){
    return resposta.json()
}
}).then(dados=>{
    return console.log({
        Nome: dados.meals[0].strMeal,
        Id: dados.meals[0].idMeal,
        Regiao: dados.meals[0].strArea,
        Ingredientes:[dados.meals[0].strIngredient1, dados.meals[0].strIngredient2, dados.meals[0].strIngredient3, dados.meals[0].strIngredient4,
        dados.meals[0].strIngredient5, dados.meals[0].strIngredient6, dados.meals[0].strIngredient7, dados.meals[0].strIngredient8, dados.meals[0].strIngredient9],
        Instrucoes: [dados.meals[0].strInstructions]
    })
})