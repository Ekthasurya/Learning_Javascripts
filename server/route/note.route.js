import express from "express"
import { NoteModel } from "../model/note.model.js"

const noteRouter = express.Router();

noteRouter.post("/create",async(req,res)=>{
    console.log(req.body,req.user)
    const {title,content,status}=req.body
    const userId = req.user._id
    try {
        const note = new NoteModel({
            title,
            content,
            status,
            userId,
        });
        await note.save()
        res.send(201).json({message:"Note created successfully"})
    } catch (error) {
        res.status(500).json({message:`Error while creating notes ${error}`});
    }
})

noteRouter.get("/",async(req,res)=>{
    const userId = req.user._Id
    try {
        const notes = await NoteModel.find({userId});
        res.status(201).json({notes})
    } catch (error) {
        res.status(500).json({message:`Error while fetching the notes ${error}`})
    }
})

noteRouter.patch("/update/:id",async(req,res)=>{
   const payload = req.body;
   const noteId = req.params.id
   const userId = req.params._id
//    console.log(payload,noteId,userId)
   try {
      const note = await NoteModel.findOne({_id:noteId})
      if(note.userId.toString() == userId.toString()){             
         await NoteModel.findByIdAndUpdate({_id:noteId},payload)
         return res.status(500).json({message:"Note update successfully"})
      }else{
        return res.status(401).json({message:"Unauthorised"})
      }
   } catch (error) {
      
   }
})

noteRouter.post("/delete/:id",async(req,res)=>{

})




export default noteRouter