<img src="src/media/shield.svg">

# Meal Matchmaker

A React-Typescript app that generates random recipes - so you never run out of ideas in the kitchen.

-   Live demo: https://meal-matchmaker.vercel.app/

## Mobile

gifs, screenshots

## Desktop

gifs, screenshots

# Table of contents

-   [Outline](#outline)
-   [Technologies](#technologies-used)
-   [The Code](#some-snippets-from-the-code)
-   [Authors](#authors-contributors)

## Outline

Meal Matchmaker provided me an opportunity to combine the latest coding practices into one project.
I coded the whole app using React Hooks with Typescript.
To get the recipe data I make asynchronous calls to a recipe API and then display instructions, ingredients
and a handful of related recipes that users can also choose from.

For the design I teamed up with UI Designer [Putra Narassa](https://www.facebook.com/putra.narassa).
His incredible designs and efforts allowed me to focus on the code and on building an app that runs as smooth as possible.

For the CSS styles, I focused on creating a project that is both scalable and maintainable. I use
CSS variables, media queries and relative sizes throughout the app to make my pages dynamic.
All animations and transitions are written in pure CSS to ensure speed.

## Technologies

-   ReactJS
-   Typescript
-   HTML
-   CSS
-   REST API

## Some Snippets From The Code

TypeScript ensures every component receives the data it needs, among many other uses.
Don't wait for bugs in production; catch them in development!
All components written in the latest 2020 TypeScript syntax as per the docs.

```tsx
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
                <Route //...
```

Combining an API call, one reusable component and the map() function, I can set how many Related Recipes
are displayed by updating a single line of code

```tsx
export default function RelatedRecipes({
    meal,
    setRandomRecipe,
}: RelatedRecipesProps) {
    const category = meal.strCategory
    const [relatedMealsList, setRelatedMealsList] = useState<IMeal[]>([])

    useEffect(() => {
        ;(async function getRelatedRecipes() {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
            )
            const data = await response.json()
            const mealsList = await data.meals
            const randomIndexes = getRandomValues(await data.meals.length)

            setRelatedMealsList(
                await Promise.all(
                    randomIndexes.map(async (index) => {
                        const mealId = await mealsList[index].idMeal
                        const meal = await fetch(
                            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${await mealId}`
                        )
                        const response = await meal.json()
                        return response.meals[0]
                    })
                )
            )
        })()
    }, [meal, category])

    return (
        <section className="RelatedRecipes">
            <h3 className="section-title">Related recipes</h3>
            <div className="slider-container">
                {relatedMealsList.map((meal) => (
                    <RecipePreview
                        key={meal.idMeal}
                        meal={meal}
                        setRandomRecipe={setRandomRecipe}
                    />
                ))}
            </div>
        </section>
    )
}
```

CSS Animations combine with variables and media queries allowing me to set animation speeds,
component dimensions and layouts by changing only a few key lines of CSS.

```css
.Loader .expanding-overlay {
    position: absolute;
    bottom: -100px;
    width: 100px;
    height: var(--overlay-height);
    border-radius: 50%;
    background-color: var(--primary-color-accent);
    animation: expand 500ms 500ms ease-in;
}

@keyframes expand {
    from {
        transform: scale(1, 1);
    }
    to {
        transform: scale(var(--expand-limit), var(--expand-limit));
    }
}

@media (min-width: 1440px) {
    .Loader {
        --expand-limit: 35;
    }
}
```

## Authors, Contributors

-   Code: [Adam Zdrzalka](https://www.linkedin.com/in/adamzdrzalka)
-   UI/UX: [Putra Narassa](https://www.facebook.com/putra.narassa)

Recipe API: [The Meal DB](https://www.themealdb.com/api.php)
