const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

crearArchivo( argv.base, argv.l, argv.h )
    .then( file => console.log(file, 'creado') )
    .catch( err => console.log(err) ); 


    // fs.writeFile( `tabla-${ base }.txt`, salida, (err) => {
//     if(err) throw err;

//     console.log(`tabla-${ base }.txt creado`);
// });




