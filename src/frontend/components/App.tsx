import React, { useState } from 'react'
import './App.css'
import Main from './Main/Main'
import { BrowserRouter } from 'react-router-dom'
import { meal } from '../media/response-example'
import { IMeal } from '../IMeal'
import Footer from './Footer/Footer'
import Loader from './Main/RecipeGenerator/Loader/Loader'
import Header from './Header/Header'
import SignInModal from './common/SignInModal/SignInModal'
import UIContext from '../contexts/UI/UIContext'

function App() {
    const [randomRecipe, setRandomRecipe] = useState<IMeal>(meal)
    const [loading, setLoading] = useState<boolean>(false)
    const { signInModal } = React.useContext(UIContext)

    async function getRandomRecipe(): Promise<void> {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/random.php`
        )
        const data = await response.json()
        setRandomRecipe(data.meals[0])
    }

    const handleClick = (): void => {
        getRandomRecipe().catch((error) => console.log(error))
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    return (
        <BrowserRouter>
            <div className="App">
                {signInModal && <SignInModal />}
                <Header onClick={handleClick} />
                <div className="components-and-footer">
                    <Main
                        onClick={handleClick}
                        meal={randomRecipe}
                        setRandomRecipe={setRandomRecipe}
                        setLoading={setLoading}
                    />
                    <Footer />
                </div>
                {loading && <Loader />}
            </div>
        </BrowserRouter>
    )
}
export default App
