import React from 'react'
import './App.css'
import WelcomePage from './WelcomePage/WelcomePage'
import RecipeGenerator from './RecipeGenerator/RecipeGenerator'
import ViewRecipe from './ViewRecipe/ViewRecipe'
import ContactPage from './ContactPage/ContactPage'
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
              <Route exact path="/" component={WelcomePage} />
              <Route exact path="/recipe-generator" component={RecipeGenerator} />
              <Route exact path="/view-recipe" component={ViewRecipe} />
              <Route exact path="/contact" component={ContactPage} />
            </div>
        </BrowserRouter>
    )
}

export default App
