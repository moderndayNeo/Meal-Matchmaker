import React, { useState } from 'react'
import './App.css'
import Main from './Main/Main'
import { BrowserRouter} from 'react-router-dom'
import { meal } from '../src/media/response-example'
import { IMeal } from './IMeal'
import Footer from './Footer/Footer'

function App() {
    const [randomRecipe, setRandomRecipe] = useState<IMeal>(meal)

    async function getRandomRecipe(): Promise<void> {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/random.php`
        )
        const data = await response.json()
        setRandomRecipe(data.meals[0])
    }

    return (
        <BrowserRouter>
            <div className="App">
                <Main onClick={() => getRandomRecipe()} meal={randomRecipe} 
                setRandomRecipe={setRandomRecipe} /> // Set props throughout
                <Footer />
            </div>
        </BrowserRouter>
    )
}
export default App
