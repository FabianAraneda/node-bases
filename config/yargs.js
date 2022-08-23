const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Base de la tabla a multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Mostrar la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Limite de número a multiplcar por la base'
                })
                .check( (argv, options) => {
                    if ( isNaN(argv.b) ){
                        throw 'La base debe ser un numero';
                    }
                    return true;
                })
                .argv;

module.exports = argv;