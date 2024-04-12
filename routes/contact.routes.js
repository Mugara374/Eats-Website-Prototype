import express from "express" 
import ContactController from "../controllers/contact.controller.js"
const route = express.Router()

route.post("/contacts/add" , ContactController.createNewContact)
route.get("/contacts/list" , ContactController.getAllContacts)
route.get("/contacts/id/:id" , ContactController.getContactById)
route.get("/contacts/email/:email" , ContactController.getContactByEmail)
route.put("/contacts/update/:id" , ContactController.updateContact)
route.delete("/delete/:id" , ContactController.deleteContact)

export default route 
