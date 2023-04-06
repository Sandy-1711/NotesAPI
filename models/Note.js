const mongoose=require('mongoose');
const notesSchema=new mongoose.Schema({
    id:{type:Number},
    title:{type:String},
    content:{type:String}
})
module.exports=new mongoose.model("Note",notesSchema);