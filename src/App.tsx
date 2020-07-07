import React, { useState } from 'react'
import './App.css'
import WelcomePage from './WelcomePage/WelcomePage'
import RecipeGenerator from './RecipeGenerator/RecipeGenerator'
import Recipe from './Recipe/Recipe'
import ContactPage from './ContactPage/ContactPage'
import { BrowserRouter, Route } from 'react-router-dom'
import { meal } from '../src/media/response-example'

function App() {
    const [randomRecipe, setRandomRecipe] = useState(meal)

    async function getRandomRecipe(): Promise<void> {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/random.php`
        )
        const data = await response.json()
        setRandomRecipe(data.meals[0])
        console.log('clicked')
    }

    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path="/" component={WelcomePage} />
                <Route
                    exact
                    path="/recipe-generator"
                    render={(props) => (
                        <RecipeGenerator {...props} meal={meal} onClick={() => getRandomRecipe()} />
                    )}
                />
                <Route
                    exact
                    path="/recipe"
                    render={(props) => <Recipe {...props} meal={meal} />}
                />
                <Route exact path="/contact" component={ContactPage} />
            </div>
        </BrowserRouter>
    )
}
export default App
