const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 3000, () => {console.log('Servidor corriendo');});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
})

app.post('/register', (req, res) =>{
    res.redirect('/')
})

app.post('/login', (req, res) =>{
    res.redirect('/')
})