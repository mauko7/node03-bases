//IMPORT documentacion de Node para escribir archivos del SO
const fs = require('fs');
const colors=require("colors")
const { argv } = require('process');
const {logica}= require("./logica");


//Creo funcion 
const multiplicar=(base,limite,visualizar)=>{


    const resultado=logica(base,limite);

    if(visualizar){
        console.log("==================");
        console.log(`   Tabla del ${base}`);
        console.log("==================");
        console.log(resultado);
    }

    const nombreArchivo = `tablas/tabla-del-${base}.txt`;
    fs.writeFile(nombreArchivo,resultado,(err) => {
        if (err) throw err;
        console.log(`El archivo ${nombreArchivo} fue creado`.green);
      });


};


//EXPORTAMOS UN OBJETO
module.exports={
    multiplicar:multiplicar,//Cuando llamemos a multi, ejecuta la funcion smultiplicar.
}