const express = require('express')
const home = require('./home')

const app = express()

app.get('/', (req, res) =>{
   home(req, res)
})

app.get('/about', (req, res) =>{
    res.send('ini halaman about')
})

app.get('/home', (req, res) =>{
    res.send('ini halaman home')
})

app.get('/profile/:name', (req, res) =>{
    const name = req.params.name
    res.send('ini halaman profile asep ' + name)
})

app.listen(5000, () => {
    console.log('server sedang berjalan')
})