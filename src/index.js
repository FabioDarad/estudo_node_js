const express = require('express');
const path = require('path')
const router = express.Router();
const app = express();

console.log(path.join(__dirname + '/pages/home.html'))

router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + '/pages/home.html'))
})

router.get('/contato', (req, res)=>{
    res.sendFile(path.join(__dirname + '/pages/contato.html'))
})

app.use(router)

app.listen(3333, ()=> {
    console.log('servidor rodando')
})