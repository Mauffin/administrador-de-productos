const mongoose = require("mongoose");

const EsquemaProducto = new mongoose.Schema({
    nombre:String,
    precio:Number,
    descripcion:String
},{timestamps:true,versionKey:false});
//timestamps:creamos campos cretedAT y updatedat
//verionkey:flase estamos eliminando el atributo _V
const Productos = mongoose.model("productos",EsquemaProducto);

module.exports = Productos;
//const Productos = require("../models/producto.model") en controller