import React, { useState } from 'react'
import './App.css'
import Main from './Main/Main'
import WelcomePage from './WelcomePage/WelcomePage'
import RecipeGenerator from './RecipeGenerator/RecipeGenerator'
import Recipe from './Recipe/Recipe'
import ContactPage from './ContactPage/ContactPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { meal } from '../src/media/response-example'
import { IMeal } from './IMeal'
import Header from './Header/Header'
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
                <Main />

                <Header onClick={() => getRandomRecipe()} />

                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(props) => (
                            <WelcomePage
                                {...props}
                                onClick={() => getRandomRecipe()}
                            />
                        )}
                    />

                    <Route
                        path="/recipe-generator"
                        render={(props) => (
                            <RecipeGenerator
                                {...props}
                                meal={randomRecipe}
                                onClick={() => getRandomRecipe()}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/recipe"
                        render={(props) => (
                            <Recipe {...props} meal={randomRecipe} />
                        )}
                    />
                    <Route exact path="/contact" component={ContactPage} />
                    {/* <Route path="/:notfound" component={WelcomePage} /> */}
                </Switch>


                <Footer />
            </div>
        </BrowserRouter>
    )
}
export default App
