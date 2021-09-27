const express = require('express')
const router = express.Router()

const app = express()

app.use(express.json())

const crud = require('./crudOp')
app.use('/crudOp',crud)


app.listen(5000, () =>{
    console.log('server started')
})
module.exports = router