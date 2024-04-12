import mongoose from "mongoose"

const ContactSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }
},{timestamp:true})

const ContactModel = mongoose.model('Contact', ContactSchema)
export default ContactModel
