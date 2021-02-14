import React from 'react'
import { render } from '@testing-library/react'
import App from './components/App'

it('renders without crashing', () => {
    const { getByRole } = render(<App />)
    const newRecipeButton = getByRole('link', { name: /find my match!/i })
    expect(newRecipeButton).toBeTruthy()
})
