import React, { useState } from 'react'
import './App.css'
import Main from './Main/Main'
import { BrowserRouter } from 'react-router-dom'
import { meal } from '../src/media/response-example'
import { IMeal } from './IMeal'
import Footer from './Footer/Footer'

function App() {
    const [randomRecipe, setRandomRecipe] = useState<IMeal>(meal)
    const [loading, setLoading] = useState<boolean>(true)

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
        }, 400)
    }

    return (
        <BrowserRouter>
            <div className="App">
                <Main
                    onClick={handleClick}
                    meal={randomRecipe}
                    setRandomRecipe={setRandomRecipe}
                    loading={loading}
                    setLoading={setLoading}
                />
                <Footer />
            </div>
        </BrowserRouter>
    )
}
export default App

/*
User clicks button => setLoading true
Loading true => Loader is rendered, loader spins for 400ms
After 400ms, a purple expanding div appears, covers the whole screen (200ms)
Then Recipe appears (Loader can fade out (opacity), then display none once faded out)

Loader is an overlay over the preview, within generator

So Loader is not conditionally rendered. It is always present
and controlled by opacity.
Loader container both the loading icon and the purple colour


For recipe preview, the components-appearing effect can be brought about on 
every render.
Simply apply a 'fade-in' animation to the elements, top to bottom, with incrementing
animation delay times (of 100ms each)

 */
