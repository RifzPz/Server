const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)
const cors = require('cors')
app.use(cors())

const company = require('./Data/company.json')
const university = require('./Data/ีืีuniversity.json')
const people = require('./Data/people.json')


app.get('/company/api', (req, res) => {
    res.send(company)
})
app.get('/people/api', (req, res) => {
    res.send(people)
})
app.get('/university/api', (req, res) => {
    res.send(university)
})
















server.listen(3000, () => {
    console.log('Server is running on port 3000')
})

