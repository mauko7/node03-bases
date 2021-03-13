

const logica=(base)=>{
    let resultado="";
    for(i=1;i<=10;i++){
        resultado +=`${base} * ${i} = ${base*i}\n`
    }
    return resultado;
}

//EXPORT

module.exports={
    logica:logica,
}
