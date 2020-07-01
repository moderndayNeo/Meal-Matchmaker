import React from 'react'
import './RecipePreview.css'
import ViewRecipeButton from './ViewRecipeButton/ViewRecipeButton'
import { responseExample } from '../../media/response-example'

export default function RecipePreview() {
    const meal = responseExample.meals[0]

    return (
        <div className="RecipePreview">
            <h1 className="preview-title">{meal.strMeal}</h1>
            <h4 className="preview-category">{meal.strCategory}</h4>
            <img src={meal.strMealThumb} alt={meal.idMeal} />
            <ViewRecipeButton />
        </div>
    )
}

interface IMeal {
    idMeal: string
    strMeal: 'Minced Beef Pie'
    strDrinkAlternate: null
    strCategory: 'Beef'
    strArea: 'British'
    strInstructions: 'Preheat the oven to 200C/400F/Gas 6.\r\nHeat the oil in a deep frying pan and fry the beef mince for 4-5 minutes, breaking it up with a wooden spoon as it browns.\r\nAdd the onion and cook for 2-3 minutes, then stir in the tomato pur\u00e9e and cook for 2-3 more minutes. Stir in the flour and cook for a further minute, then add the chopped mushrooms, the stout or beef stock and a couple of dashes of Worcestershire sauce. Bring to the boil, then reduce the heat, cover the pan with a lid and leave to simmer for 20 minutes. Set aside and leave to cool, then turn the meat mixture into a one litre pie dish.\r\nRoll out the pastry on a floured work surface until it is slightly larger than the pie dish. Gently drape the pastry over the dish, pressing firmly onto the edges. Trim, then shape the edges into a fluted shape.\r\nCut some leaf shapes out of the pastry trimmings and decorate the top of the pie, sticking them to the pastry with the beaten egg yolk.\r\nMake three or four slits in the pastry to allow the steam to escape, then brush the pie with the rest of the beaten egg yolk and bake in the oven for 20-25 minutes, or until golden-brown.\r\nTo serve, slice into wedges.'
    strMealThumb: 'https://www.themealdb.com/images/media/meals/xwutvy1511555540.jpg'
    strTags: 'Pie,Meat'
    strYoutube: 'https://www.youtube.com/watch?v=QY47h-uqq5g'
    strIngredient1: 'Vegetable Oil'
    strIngredient2: 'Minced Beef'
    strIngredient3: 'Onion'
    strIngredient4: 'Tomato Puree'
    strIngredient5: 'Plain Flour'
    strIngredient6: 'Mushrooms'
    strIngredient7: 'Beef Stock'
    strIngredient8: 'Worcestershire Sauce'
    strIngredient9: 'Shortcrust Pastry'
    strIngredient10: 'Egg Yolks'
    strIngredient11: ''
    strIngredient12: ''
    strIngredient13: ''
    strIngredient14: ''
    strIngredient15: ''
    strIngredient16: ''
    strIngredient17: ''
    strIngredient18: ''
    strIngredient19: ''
    strIngredient20: ''
    strMeasure1: '2 tbs'
    strMeasure2: '500g'
    strMeasure3: '1 chopped'
    strMeasure4: '1 tbls'
    strMeasure5: '1 \u00bd tbsp'
    strMeasure6: '75g'
    strMeasure7: '250ml'
    strMeasure8: 'Dash'
    strMeasure9: '400g'
    strMeasure10: '1'
    strMeasure11: ''
    strMeasure12: ''
    strMeasure13: ''
    strMeasure14: ''
    strMeasure15: ''
    strMeasure16: ''
    strMeasure17: ''
    strMeasure18: ''
    strMeasure19: ''
    strMeasure20: ''
    strSource: 'https://www.bbc.co.uk/food/recipes/mincedbeefpie_89198'
    dateModified: null
}
