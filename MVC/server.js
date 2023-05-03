require('./db/database-connection')

const express = require('express')
const app = express()

app.use(express.static('public'))
app.set('views', `${__dirname}/views`)
app.set('view engine', 'hbs')

const Dog = require('./models/dog.model')


app.get('/', (req, res) => {
    res.render('index-page')
})

app.get('/listado', (req, res) => {

    Dog
        .find()
        .then(allDogs => res.render('dogs-page', { dogs: allDogs }))
        .catch(err => console.log(err))
})


app.listen(5005, () => console.log('SERVIDOR LEVANTADO EN 5005'))