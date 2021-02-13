import React from 'react'
import './Recipe.css'
import { IMeal } from '../../../IMeal'
import RecipeComponentsMobile from './RecipeComponentsMobile/RecipeComponentsMobile'
import RecipeComponentsDesktop from './RecipeComponentsDesktop/RecipeComponentsDesktop'
interface RecipeProps {
    meal: IMeal
    setRandomRecipe: (meal: IMeal) => void
}

export default function Recipe({ meal, setRandomRecipe }: RecipeProps) {
    const recipePageTop: any = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        recipePageTop.current.scrollIntoView({
            behavior: 'smooth',
        })
    }, [meal])

    return (
        <div className="Recipe">
            <div ref={recipePageTop}></div>

            <RecipeComponentsMobile
                meal={meal}
                setRandomRecipe={setRandomRecipe}
            />
            <RecipeComponentsDesktop
                meal={meal}
                setRandomRecipe={setRandomRecipe}
            />
        </div>
    )
}
