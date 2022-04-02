const createOne = (model) => async(req,res)=>{
    const item = await model.create(req.body)
    res.status(201).json(item);
}


//get
const getAll = (model)=> async(req,res)=>{
    const item = await model.find();
    res.status(200).json(item)
}


const update = (model)=> async(req,res)=>{
    const item = await model.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(item)
}

const deleteOne = (model)=> async(req,res)=>{
    const item = model.findByIdAndDelete(req.params.id);
    res.status(200).json(item);
}

module.exports = (model) =>({
    post : createOne(model),
    getAll : getAll(model),
    update : update(model),
    deleteOne : deleteOne(model)
})