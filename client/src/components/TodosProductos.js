import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

// funcion para mostrar todos los productos
const TodosProductos = () =>{

    const [productos,setProductos] = useState([]);
    
    useEffect(()=>{

        axios.get("http://localhost:8000/api/productos")
            .then(res=>{
                setProductos(res.data);
            })
            .catch(err=> console.log(err))
    },[])

    const borrarProducto = idProd =>{
        axios.delete("http://localhost:8000/api/productos/"+idProd)
            .then(res =>{
                //actualizar lista FIlTER
                let nuevaListaProd = productos.filter(producto => producto._id !== idProd);
                setProductos(nuevaListaProd);
            })
    }


    return(
        <div>
            <h1>Todos los productos</h1>
            <Link className="btn btn-success" to="/nuevo">Nuevo producto</Link>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Descripcion</th>
                        <th>Acciones</th>
                        <th><select>
                                <option>Ordenar por</option>
                                <option value="ordenar">Precio Mayor a menor</option>
                                <option >Precio Menor a mayor</option>
                            </select></th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                        productos.map((producto,index)=>(
                            <tr key={index}>
                                <td>{producto.nombre}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.descripcion}</td>
                                <td>
                                    <Link className="btn btn-primary" to={`/producto/${producto._id}`}>Detalle</Link>
                                    <Link className="btn btn-warning" to={`/producto/editar/${producto._id}`}>Editar</Link>
                                    <button className="btn btn-danger" onClick={()=>borrarProducto(producto._id)}>Eliminar</button>
                            
                                </td>
                            </tr>
                            
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TodosProductos;