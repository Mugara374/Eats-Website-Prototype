import ContactModel from "../models/contact.models.js";

const ContactController ={
    createNewContact : async(req,res)=>{
        try {
         const newContact = await ContactModel.create(req.body)
         res.status(201).json({
            message:"Contact created successfully!!!",
            student:newContact
         })

        } catch (error) {
            console.log(error.message)
            res.status(500).json({
                message:"Internal Server Error"
            })
            
        }
    },
    getAllContacts : async (req,res)=>{
        try {
            const getContacts = await ContactModel.find()
            res.status(200).json({
            message:"Contacts retrieved successfully!!!",
            students:getContacts
         }) 
        } catch (error) {
            console.log(error.message)
            res.status(500).json({
                message:"Internal Server Error"
            })
        }

    },
    getContactById:async(req,res)=>{
        const retrievedContact = await ContactModel.findById(req.params.id);
      try {
      
            res.status(200).json(retrievedContact)
        }
      catch (error) {
        res.status(500).json({
            message:"Internal Server Error"
        })
      }
    },
    getContactByEmail:async(req,res)=>{
        
        try {
            const retrievedContact = await ContactModel.findOne({email:req.params.email});
                res.status(200).json(retrievedContact)
            }
         
        catch (error) {
          res.status(500).json({
              message:"Internal Server Error"
          })
        }
      },

    updateContact: async(req,res)=>{
        const updatedContact = await ContactModel.findByIdAndUpdate(req.params.id, req.body,{set:true});
        try {
            
            
                res.status(200).json(updatedContact)
            }
            
        catch (error) {
            res.status(500).json({
                message:"Internal Server Error"
            }) 
        }

    },
    deleteContact: async(req,res)=>{
       
       
        try {
            
            const id =req.params.id;
            const deletedContact = await ContactModel.findByIdAndDelete({_id:id});
                res.status(200).json(deletedContact)
            }
            
         catch (error) {
            console.log(error)
            res.status(500).json({
                message:"Internal Server Error"
            }) 
        }

    }

}

export default ContactController 