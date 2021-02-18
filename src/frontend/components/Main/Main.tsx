import React from 'react'
import './Main.css'
import WelcomePage from './WelcomePage/WelcomePage'
import RecipeGenerator from './RecipeGenerator/RecipeGenerator'
import Recipe from './Recipe/Recipe'
import ContactPage from './ContactPage/ContactPage'
import Signup from '../Auth/Signup/Signup'
import Login from '../Auth/Login/Login'
import Profile from '../Profile/Profile'
import { Route, Switch } from 'react-router-dom'
import { ProtectedRoute } from '../../util/route_utils'
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
                {/* <ProtectedRoute exact path="/profile" component={Profile} /> */}
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/sign-up" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/contact" component={ContactPage} />
                <Route path="/:notfound" component={WelcomePage} />
            </Switch>
        </div>
    )
}
