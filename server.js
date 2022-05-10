const express = require ("express");
const app = express();
const cors = require("cors");
//para usar json
app.use( express.json(), express.urlencoded({ extended: true }) );

//Permite accesar desde un origen distinto
app.use(
    cors({
        //Url de Front end
        origin:"http://localhost:3000"
    })
)

//inicializa DB
require("./server/config/mongoose.config");

//importar Rutas
const misRutas = require("./server/routes/producto.routes");
misRutas(app);

//ejecutamos server
app.listen(8000,()=>console.log("Servidor haciendo cardio :D"));
