const express = require('express');
const checkListRouter = require('./src/routes/checklist')
const app = express()

//para eu poder passar no corpo da requisição dados json,(midleware)
app.use(express.json())

app.use('/checklists',checkListRouter)

app.get('/json',(req,res)=>{
    console.log(req.body)
    res.json({title:'Tarefa X',done:true})
})


app.listen(3000,()=>{
    console.log('Servidor foi iniciado')
})