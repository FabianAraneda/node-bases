const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs.js');
const color = require('colors');


crearArchivo(argv)
    .then(nombreArchivo => console.log(color.green(nombreArchivo, 'creado exitosamente')))
    .catch(error => console.log(error));