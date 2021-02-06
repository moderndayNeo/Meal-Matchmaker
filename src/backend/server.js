const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const corsOptions = {
    origin: 'http://localhost:3000',
}

app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send({ message: `Meal Matchmaker backend` })
})


require('./routes/user.routes')(app)

const port = process.env.port || 3001

app.listen(port, () => {
    console.log(`App listening on port ${port}...`)
})
