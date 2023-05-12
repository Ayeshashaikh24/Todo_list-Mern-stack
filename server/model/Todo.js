import mongoose from "mongoose";

const TodoSchema=new mongoose.Schema({
    data:{
        type:String,
        require:true

    },
    done:{
        type:Boolean,
        default:false
    },
    createAt:{
        type:Date,
        default:Date.now
    }

})

const todo=mongoose.model('todo',TodoSchema);
export default todo