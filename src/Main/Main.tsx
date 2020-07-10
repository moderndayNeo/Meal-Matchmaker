import React from 'react'
import './Main.css'
import WelcomePage from './WelcomePage/WelcomePage'
import RecipeGenerator from './RecipeGenerator/RecipeGenerator'
import Recipe from './Recipe/Recipe'
import ContactPage from './ContactPage/ContactPage'
import Header from './Header/Header'
import { Route, Switch } from 'react-router-dom'
import { IMeal } from '../IMeal'

interface MainProps {
    onClick: () => void
    meal: IMeal
}

export default function Main({ onClick, meal }: MainProps) {
    return (
        <div className="Main">
            <Header onClick={onClick} />

            <Switch>
                <Route
                    exact
                    path="/"
                    render={(props) => (
                        <WelcomePage {...props} onClick={onClick} />
                    )}
                />

                <Route
                    path="/recipe-generator"
                    render={(props) => (
                        <RecipeGenerator
                            {...props}
                            meal={meal}
                            onClick={onClick}
                        />
                    )}
                />
                <Route
                    exact
                    path="/recipe"
                    render={(props) => <Recipe {...props} meal={meal} setRandomRecipe={setRandomRecipe} />}
                />
                <Route exact path="/contact" component={ContactPage} />
                {/* <Route path="/:notfound" component={WelcomePage} /> */}
            </Switch>
        </div>
    )
}
