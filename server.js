const express = require('express')
const jsonServer = require('json-server')

const app = express()
const PORT = process.env.PORT || 8080

app.use('/api',jsonServer.router('data.js'))
app.use(express.static(__dirname+'/dist/organic-market'))

app.get('/*',(req,res) =>{
    res.sendFile(__dirname+ '/dist/organic-market/index.html')
})

app.listen(PORT, ()=>{
    console.log("Sv nice")
})