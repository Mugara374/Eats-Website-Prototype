import mongoose from "mongoose"

const ContactSchema= new mongoose.Schema({
    FullName:{
        type:String,

    },
    RestaurantName:{
        type:String,


    },
    RestaurantLocation:{
        type:String,
 
    },
    PhoneNumber:{
        type:String,
    
    
    },
    email:{
        type:String,
   
    },
    password:{
        type:String,

    }
},{timestamp:true})

const ContactModel = mongoose.model('Contact', ContactSchema)
export default ContactModel
