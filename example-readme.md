example Readme

<img src="./media/shield.svg">

* Live demo: https://moderndayneo.github.io/calculator/ 

# Mobile View
![calc-mobile](https://user-images.githubusercontent.com/57966028/81932134-30f99800-95e3-11ea-8e98-2799f3ac14a1.gif)

# Desktop View
![calc-desktop](https://user-images.githubusercontent.com/57966028/81932556-e1679c00-95e3-11ea-84b2-4f9eec2a2cfb.gif)

# Table Of Contents
* [Outline](#outline)
* [Technologies](#technologies)
* [The Code](#some-snippets-from-the-code)
* [To Run The Tests](#to-run-the-tests)

## Outline
*This project is compatible with mobile, tablet and desktop*

This calculator works by pushing each button's assigned value to an array. The user's input is first checked as valid. If valid, the equation is calculated and displayed on the screen.

Note: This calculator was first made using the eval() method. Having learned of the security flaws in using eval(), I rebuilt the calculator using number methods and without the use of eval().

## Technologies
I made this calculator using pure HTML, CSS and JavaScript.

## Some Snippets From The Code

### Input validation
```js
const getIndexLastOperator = (arr) => {
    if (arr.some((value) => isOperator(value)) === false) return -1

    const lastPlus = arr.lastIndexOf('+')
    const lastMinus = arr.lastIndexOf('-')
    const lastMultiply = arr.lastIndexOf('*')
    const lastDivide = arr.lastIndexOf('/')
    const indexes = [lastPlus, lastDivide, lastMinus, lastMultiply]
    const sorted = indexes.sort()
    const indexLastOperator = sorted[3]

    return indexLastOperator
}

const isInputValid = (desiredValue) => {
    const lastValue = getLastValue(userInput)

    if (lastValue === '.') {
        if (desiredValue === '.') return false
        if (isOperator(desiredValue)) return false
    }

    if (desiredValue === '.' && userInput.includes('.')) {
        const indexLastDecimal = userInput.lastIndexOf('.')
        const indexLastOperator = getIndexLastOperator(userInput)
        if (indexLastDecimal > indexLastOperator) return false
    }

    if (!isOperator(lastValue)) {
        return true
    }

    if (isOperator(desiredValue)) {
        return false
    }

    return true
}
```
### Calculation

```js
function mergeAnyConsecutiveNumbers(arr) {
    let holdingValue = ''
    const arrayWithNumbersConcatenated = []

    for (let i = 0; i < arr.length; i++) {
        const currentArrayValue = arr[i]

        if (isANumberOrDecimal(currentArrayValue)) {
            holdingValue += currentArrayValue
        } else {
            arrayWithNumbersConcatenated.push(holdingValue)
            arrayWithNumbersConcatenated.push(currentArrayValue)
            holdingValue = ''
        }
    }
    arrayWithNumbersConcatenated.push(holdingValue)

    return arrayWithNumbersConcatenated
}
```

```js
function processMultiplyAndDivide(equation) {
    if (!containsMulOrDiv(equation)) {
        return equation
    }

    const positionFirstMulOrDiv = equation.findIndex(isMultiplyOrDivide)
    const leftOfOperator = positionFirstMulOrDiv - 1
    const rightOfOperator = positionFirstMulOrDiv + 1

    const chunkToCalculate = equation.slice(leftOfOperator, rightOfOperator + 1)
    const result = calculate(...chunkToCalculate)
    const leftOfChunk = equation.slice(0, leftOfOperator)
    const rightOfChunk = equation.slice(rightOfOperator + 1, equation.length)

    const mulAndDivProcessed = [...leftOfChunk, result, ...rightOfChunk]

    return processMultiplyAndDivide(mulAndDivProcessed)
}
```

```js
function calculateFinalValue(array) {
    const equation = mergeAnyConsecutiveNumbers(array)
    const mulsDivsProcessed = processMultiplyAndDivide(equation)
    const calculatedResult = processAddAndSubtract(mulsDivsProcessed)

    return +calculatedResult[0]
}
```
### Tests

```test.js
describe('tests for isInputValid', () => {
    test('isInputValid exists', () => {
        expect(isInputValid).toBeDefined()
    })
    test('returns true if last value is a number and value passed is an operator', () => {
        userInput = ['1']
        expect(isInputValid('+')).toBe(true)
    })
    test('returns true if a number follows a number', () => {
        userInput = ['1']
        expect(isInputValid('2')).toBe(true)
    })
    test('returns false if last value is an operator and value passed is an operator', () => {
        userInput = ['*']
        expect(isInputValid('/')).toBe(false)
        expect(isInputValid('+')).toBe(false)
        expect(isInputValid('-')).toBe(false)
        userInput = ['1', '/', '*']
        expect(isInputValid('-')).toBe(false)
        expect(isInputValid('+')).toBe(false)
        expect(isInputValid('*')).toBe(false)
    })
    test('returns false if user enters two decimals', () => {
        userInput = ['.']
        expect(isInputValid('.')).toBe(false)
    })
    test('returns false if an operator follows a decimal', () => {
        userInput = ['.']
        expect(isInputValid('+')).toBe(false)
    })
    test('returns false if user enters two decimals as part of a single value', () => {
        userInput = ['12', '+', '1', '.', '2']
        expect(isInputValid('.')).toBe(false)
        userInput = ['1', '.']
        expect(isInputValid('.')).toBe(false)
    })
})
```
## To Run The Tests
First <a href="https://github.com/moderndayNeo/calculator/archive/master.zip
">Clone This Repo</a>

Then in the command line type the following:

```
$ npm install
```
```
$ npm test
```
