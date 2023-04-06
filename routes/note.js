const router=require('express').Router();
const Note=require('../models/Note');
router.post('/makenote',async function(req,res){
    const newnote=new Note({
        id:req.body.id,
        title:req.body.title,
        content:req.body.content
    })
    try{
        const savednote=await newnote.save();
        res.status(200).json(savednote);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});
router.get('/getnote',async function(req,res){
    try{
        const foundnotes=await Note.find();
        res.status(200).json(foundnotes);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})
router.delete('/deletenote/:id',async function(req,res){
    try{
        const foundnotes=await Note.find({id:req.params.id});
        const _id=foundnotes[0]._id;
        const deletedNote=await Note.findByIdAndDelete(_id);
        res.status(200).json(deletedNote);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})
module.exports=router;