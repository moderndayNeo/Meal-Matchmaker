import React from 'react'
import './App.css'
import WelcomePage from './WelcomePage/WelcomePage'
import RecipeGenerator from './RecipeGenerator/RecipeGenerator'
import Recipe from './Recipe/Recipe'
import ContactPage from './ContactPage/ContactPage'
import {BrowserRouter, Route} from 'react-router-dom'
import { meal } from '../src/media/response-example'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
              <Route exact path="/" component={WelcomePage} />
              <Route exact path="/recipe-generator" component={RecipeGenerator} />
              <Route exact path="/recipe" component={Recipe} meal={meal} />
              <Route exact path="/contact" component={ContactPage} />
            </div>
        </BrowserRouter>
    )
}
export default App
