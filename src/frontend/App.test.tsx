import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import App from './components/App'

it('renders without crashing', () => {
    const { getByRole } = render(<App />)
    const welcomePageButton = getByRole('link', { name: /welcome-page-button/i })
    expect(welcomePageButton).toBeTruthy()
})

describe('click WelcomePageButton re-routes to RecipeGenerator page', () => {
    it('onClick', () => {
        // const { getByRole } = render(<App />)
        // const welcomePageButton = getByRole('link', { name: /find my match!/i })
        // expect route to be '/'
        render(<App />)
        // const welcomePageButton = screen.getAllByRole('link', {
        //     name: /welcome-page-button/i,
        // })

        // fireEvent.click(welcomePageButton)

        // const newRecipeButton = screen.getAllByRole('link', {
        //     name: /new-recipe-button/i,
        // })

        // const newRecipeButton = getByRole('link', {
        //     name: /generate again regenerate icon/i,
        // })
        // expect(newRecipeButton).toBeTruthy()
        // expect(welcomePageButton).toBeFalsy()
        // expect route to be '/recipe-generator'
        // expect NewRecipeButton to be on the page
        // expect WelcomePageButton not to be on the page
    })
})
