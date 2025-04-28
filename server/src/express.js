import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import route from './routes/index.js'

const app= express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use('/',route)
/*app.get('/',(req,res)=>{
    res.send("hello")
})*/
    
export default app