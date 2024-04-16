import express from "express"
import mongoose from "mongoose"
import route from './routes/contact.routes.js'
const app = express() 
import path from 'path';
import { fileURLToPath } from 'url';
import pages from './pages.js'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
const port = 5000


app.use(pages)
app.use(route)

mongoose.connect("mongodb+srv://uwinezarosine16:Rosine%40224422@cluster0.4qfrqkq.mongodb.net/Local-Eats")
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})

