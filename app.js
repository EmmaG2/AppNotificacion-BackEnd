var express = require("express");
var mysql = require("mysql");
var app = express();

app.use(express.json());

var conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "backend"
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("Conectado wapo <3")
    }
    
});

app.get("/api/motivacion", (req, res) => {
    conexion.query(
        "SELECT * FROM motivacion",
        (error, resultado) => {
            if(error){
                throw error;
            }else{
                res.send(resultado);
            }
        }
    )
});

app.listen(3000, function(){
    console.log("Funcionando c:")
});