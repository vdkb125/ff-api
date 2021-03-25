const { response } = require('express')
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000

app.use(cors())

let ffChar = {
    'dom': {
        fullName: "Dominic Toretto",
        actor: "Vin Diesel",
        car: "1970 Dodge Charger R/T",
        quote: "I live my life a quarter mile at a time.",
    },
    'letty': {
        fullName: "Leticia Ortiz",
        actor: "Michelle Rodriquez",
        car: "1997 Nissan 240SX",
        quote: "Ride or Die remember?",
    },
    'han': {
        fullName: "Han Seoul-Oh",
        actor: "Sung Kang",
        car: "Nissan Silvia",
        quote: "Life's simple: You make choices and you don't look back.",
    },
    'unknown': {
        fullName: "unknown",
        actor: "unknown",
        car: "unknown",
        quote: "unknown",
    },

}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/ffChar/:charName', (request, response) => {
    const cName = request.params.charName.toLowerCase()
    console.log(cName)
    if (ffChar[cName]){
        response.json(ffChar[cName])
    } else {
        response.json(ffChar['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`FF server running on port ${PORT}`)
})