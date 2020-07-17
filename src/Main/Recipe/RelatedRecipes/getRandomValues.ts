export default function getRandomisedArray(length: number) {
    const helper: number[] = []

    function getRandomValue() {
        const value = Math.floor(Math.random() * length)
        if (!helper.includes(value)) return helper.push(value)
        getRandomValue()
    }
    while (helper.length < 3) getRandomValue() // Set the number of Related Recipes displayed
    return helper
}
