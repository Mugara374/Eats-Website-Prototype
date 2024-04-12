import express from "express"
import mongoose from "mongoose"
import route from './routes/contact.routes.js'
const app = express() 
const port = 5000


app.use(express.json())
app.use(route)

mongoose.connect("mongodb+srv://uwinezarosine16:Rosine%40224422@cluster0.4qfrqkq.mongodb.net/Local-Eats")
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})

