import Todo from "../model/Todo.js"


export const addTodo=async(req,res)=>{
    try{
  const newToDo=await  Todo.create(
        {
            data:req.body.data,
            createAt:Date.now()
        }
    )
    await newToDo.save();
    res.status(200).json(newToDo)
}
catch(error){
return res.status(500).json(error.message)
}
}

export const getAllTodos=async(req,res)=>{
    try{
        const todos = await Todo.find({}).sort({ 'createdAt': -1 })

        return res.status(200).json(todos);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
export const toggleTodoDone = async (request, response) => {
    try {
        const todoRef = await Todo.findById(request.params.id);

        const todo = await Todo.findOneAndUpdate(
            { _id: request.params.id },
            { done: !todoRef.done }
        )

        await todo.save();

        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const updateTodo = async (request, response) => {
    try {
        await Todo.findOneAndUpdate(
            { _id: request.params.id },
            { data: request.body.data }
        )

        const todo = await Todo.findById(request.params.id);

        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const deleteTodo = async (request, response) => {
    try {
        const todo = await Todo.findByIdAndDelete(request.params.id)

        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
