//IMPORT

const argv = require("yargs")

            .option("b",{
                alias: "base",
                type:"number",
                demandOption:true,
                describe:"Es la base de la tabla de multiplicar"
            })
            .option("l",{
                alias:"limite",
                type:"number",
                demandOption:false,
                default:10,
                describe:"Limite para multiplicar"
            })
            .option("v",{
                alias:"visualizar",
                type:"boolean",
                demandOption:false,
                default:false,
                describe:"Permite visualizar en consola"
            })
            .check((argv,option)=>{
                if(isNaN(argv.b)){
                    throw new Error("La base tiene que ser un numero")
                }
                return true
            })
            
            .argv


const {multiplicar} = require("./multiplicador")


//llamado de funcion
multiplicar(argv.b,argv.l,argv.v);


