<img src="src/frontend/media/shield.svg">

# Meal Matchmaker

A React-TypeScript app that generates random recipes - so you never run out of ideas in the kitchen.

Access MealMatchmaker: https://meal-matchmaker.vercel.app/

## Mobile

![mm-mobile-1](https://user-images.githubusercontent.com/57966028/87776831-4cba2e00-c820-11ea-9b20-02702c4faace.gif)

## Tablet

<img width="520" alt="mm-tablet-screenshot" src="https://user-images.githubusercontent.com/57966028/87778145-a7548980-c822-11ea-8cbd-92a89496ea28.png">

## Desktop

<img width="1080" alt="mm-desktop-screenshot" src="https://user-images.githubusercontent.com/57966028/87778308-e97dcb00-c822-11ea-87cb-8edddf4d6db6.png">

# Table of contents

-   [Outline](#outline)
-   [Technologies](#technologies-used)
-   [The Code](#some-snippets-from-the-code)
-   [Authors](#authors-contributors)

## Outline

* Paired with a designer based in Pakistan to design a ‘thoughtless’, intuitive UI resulting in an improved user experience that guides users to the key features of the app.
* Adopted TypeScript type-checking to quickly catch bugs in development, allowing me to deploy the app with confidence
* Make asynchronous calls to a recipe API and then display instructions, ingredients and a handful of related recipes for users to explore
## Technologies

-   React.js v16.13.1
-   TypeScript v3.7.5
-   HTML5
-   CSS3
-   TheMealDB JSON API


## Some Snippets From The Code

Employ TypeScript to ensure every component receives the right data. Don't wait for bugs in production; catch them in development! All components written in TypeScript with interfaced Props.

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

Combining an API call (shown here), one reusable component and the map() function, I can set how many Related Recipes
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

Combine animations with CSS3 variables and media queries, allowing me to set animation speeds,
component dimensions and layouts by changing only a few key lines of CSS.

```css
.App {
    height: 100vh;
    width: 100vw;
    --desktop-side-gutter: 4%;
    --mobile-side-padding: 24px;
    --primary-color-dark: #2c056a;
    --primary-color-accent: #6610f2;
    --neutral-color-light: #fff1ec;
    --secondary-color-warning: #e46a0c;
    --header-height: 96px;
    --footer-height: 312px;
    font-family: 'Public Sans', 'DM Sans', sans-serif;
    color: var(--primary-color-dark);
}
```

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
-   UI/UX: [Putra Rassa](https://www.facebook.com/putra.rassa12)
-   Recipe API: [The Meal DB](https://www.themealdb.com/api.php)
