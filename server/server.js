import app from './src/express.js'
import {config} from 'dotenv'

config()

const PORT = process.env.PORT || 3001
const server = app.listen(PORT,()=>{
    console.log(`server runing on http://localhost:${PORT}`)
})