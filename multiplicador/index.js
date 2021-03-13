//IMPORT documentacion de Node para escribir archivos del SO
const fs = require('fs');
const {logica}= require("./logica");

//Creo funcion 
const multiplicar=(base)=>{
    console.log("==================");
    console.log(`   Tabla del ${base}`);
    console.log("==================");

    const resultado=logica(base);

    console.log(resultado);
    const nombreArchivo = `tablas/tabla-del-${base}`;
    fs.writeFile(nombreArchivo,resultado,(err) => {
        if (err) throw err;
        console.log(`El archivo ${nombreArchivo} fue creado`);
      });


};


//EXPORTAMOS UN OBJETO
module.exports={
    multiplicar:multiplicar,//Cuando llamemos a multi, ejecuta la funcion smultiplicar.
}