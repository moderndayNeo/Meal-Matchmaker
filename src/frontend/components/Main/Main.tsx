import React from 'react'
import './Main.css'
import WelcomePage from './WelcomePage/WelcomePage'
import RecipeGenerator from './RecipeGenerator/RecipeGenerator'
import Recipe from './Recipe/Recipe'
import ContactPage from './ContactPage/ContactPage'
import Signup from '../Auth/Signup/Signup'
import { Route, Switch } from 'react-router-dom'
import { IMeal } from '../../IMeal'

interface MainProps {
    onClick: () => void
    meal: IMeal
    setRandomRecipe: (meal: IMeal) => void
    setLoading: (arg0: boolean) => void
}

export default function Main({ onClick, meal, setRandomRecipe }: MainProps) {
    return (
        <div className="Main">
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
                    render={(props) => (
                        <Recipe
                            {...props}
                            meal={meal}
                            setRandomRecipe={setRandomRecipe}
                        />
                    )}
                />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/contact" component={ContactPage} />
                <Route path="/:notfound" component={WelcomePage} />
            </Switch>
        </div>
    )
}
