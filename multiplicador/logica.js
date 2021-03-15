const { argv } = require("yargs");


const logica=(base,limite)=>{
    let resultado="";
    for(i=1;i<=limite;i++){
        resultado +=`${base} * ${i} = ${base*i}\n`
    }
    return resultado;
}

//EXPORT

module.exports={
    logica:logica,
}
