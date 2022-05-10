import React,{useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const NuevoProducto = () =>{
    const[nombre,setNombre]=useState("");
    const[precio,setPrecio] = useState("");
    const[descripcion, setDescripcion] = useState("");
    const history = useHistory();
//funcion para guardar con conexion a backend
const guardarProducto = e =>{
    e.preventDefault();
    axios.post("http://localhost:8000/api/productos",{
        nombre,
        precio,
        descripcion
    })
        .then(res =>{
            console.log(res);
            history.push("/");
        })
        .catch(err =>{
            console.log(err);
        })
}

    return(
        <div>
            <form onSubmit={guardarProducto}>
                <div className='form-group' >
                    <h1>Nuevo Producto</h1>
                    <label htmlFor="nombre" >Nombre</label>
                    <input id="nombre" name="nombre" type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)} className='form-control'/>
                </div>
                <div className='form-group' >
                    <label>Precio</label>
                    <input id="precio" name="precio" type="number" value={precio} onChange={(e)=> setPrecio(e.target.value)} className='form-control'/>
                </div>
                <div className='form-group' >
                    <label>Descripcion</label>
                    <input id="descipcion" name="descripcion" type="text" value={descripcion} onChange={(e)=> setDescripcion(e.target.value)} className='form-control'/>
                </div>
                    <button type="submit" className="btn btn-success" value="Guardar Producto">Guardar Producto</button>
                
                
            </form>
        </div>
    )

}

export default NuevoProducto;