import React, { useState } from 'react'
import './App.css'
import Main from './Main/Main'
import { BrowserRouter } from 'react-router-dom'
import { meal } from '../src/media/response-example'
import { IMeal } from './IMeal'
import Footer from './Footer/Footer'
import Loader from './Main/RecipeGenerator/Loader/Loader'

function App() {
    const [randomRecipe, setRandomRecipe] = useState<IMeal>(meal)
    const [loading, setLoading] = useState<boolean>(false)

    async function getRandomRecipe(): Promise<void> {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/random.php`
        )
        const data = await response.json()
        setRandomRecipe(data.meals[0])
    }

    const handleClick = (): void => {
        getRandomRecipe()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    return (
        <BrowserRouter>
            <div className="App">
                {loading && <Loader />}
                <Main
                    onClick={handleClick}
                    meal={randomRecipe}
                    setRandomRecipe={setRandomRecipe}
                    setLoading={setLoading}
                />
                <Footer />
            </div>
        </BrowserRouter>
    )
}
export default App
