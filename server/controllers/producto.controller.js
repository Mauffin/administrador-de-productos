const Producto = require("../models/producto.model");

module.exports.create_product = (req,res)=>{
    Producto.create(req.body)
        .then(producto => res.json(producto))
        .catch(err => res.json({message:"hubo un error"+err}));
        
}
//llama atodos los productos
module.exports.get_all = (req, res) =>{
    Producto.find()
    .then(productos =>res.json(productos))
    .catch(err => res.json({message:"hubo un error"+err}));
}

//llama a un producto en especifico por su id
module.exports.get_product = (req, res) =>{
    Producto.findOne({_id:req.params.id})
        .then(producto => res.json(producto))
        .catch(err => res.json({message:"hubo un error"+err}));
}

//actualizamos el producto
module.exports.update_product = (req, res) => {
    Producto.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators:true})
        .then(producto => res.json(producto))
        .catch(err => res.json({message: "Hubo un error " + err }))
}


//borramos el producto
module.exports.delete_product =(req, res) =>{
    Producto.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.json({message:"hubo un error"+ err }))
}

//buscar x
// module.exports.ordenarMayor = (req, res)=>{
//     Producto.find().sort({precio: 1})
//         .then(result =>res.json(result))
//         .catch(err=> res.json({message:"hubo un error"+err}))
// }

// module.exports.ordenarmenor = (req, res)=>{
//     Producto.find().sort({precio: 1})
//         .then(result =>res.json(result))
//         .catch(err=> res.json({message:"hubo un error"+err}))
// }
