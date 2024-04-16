import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const
app = express.Router();
// app.get('/', (req, res)=>{
// res.sendFile(path.join(__dirname, 'public'));
// })
app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
    })
    app.get('/signup', (req, res)=>{
        res.sendFile(path.join(__dirname, 'public', 'signup.html'));
        })
app.get('/about',(req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
})
// app.get('/hospital',(req,res)=>{
//     res.sendFile(path.join(__dirname, 'components', 'hospitals.html'));
// })
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
})
app.get('/doctor',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'doctors.html'));
})
app.get('/restaurants',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'restaurants.html'));
})
// app.get('/dashboard',(req,res)=>{
//     res.sendFile(path.join(__dirname, 'components', 'dashboard.html'));
// })
export default app











