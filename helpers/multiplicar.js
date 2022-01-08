const fs = require('fs');
const colors = require('colors');
 
const crearArchivo = async( base = 5, listar=false, hasta = 5 ) => {

    try {        
            let salida = '';
            
            
            // if(rango <= 1000){
            // console.log(rango);
                        

            for(let i = 1; i <= hasta; i++ ){
                salida += `${ base } x ${ i } = ${ base*i }\n`;
            }
                                    
            if( listar ){
                console.log('====================='.green);
                console.log(`==== TABLA DEL`.trap.green,colors.blue(`${base}`),`====`.green);
                console.log('====================='.green);
                console.log(salida.random);
                }
            
            
        
            fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );
            // console.log(`tabla-${ base }.txt creado`);
        
            return (`tabla-${ base }.txt`);
        
    } catch (err) {
        throw err;
    }

}


module.exports = {
    crearArchivo
}