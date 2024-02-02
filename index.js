const express = require("express")
const app = express()
const cors = require('cors')

const {Route}=require('./Server')


app.use(cors({
    origin:"*"
}))

app.use('/api',Route)

app.listen(5500,()=>{
    console.log("Server is Runing Fine")
})


