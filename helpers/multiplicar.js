const fs = require('fs');

const crearArchivo = async ( argv ) =>{
    try {
        let salida = 
        `=============\nTabla del ${argv.b}\n=============\n`;
    
        for (let i = 1; i <= argv.h; i++) {
            salida += `${argv.b} x ${i} = ${argv.b * i}\n`;
        }
        
        if(argv.l) console.log(salida);
    
        //Si no se pone el path tomara como argv.b la carpeta donde está este archivo
        // fs.writeFile(`C:/Users/faranedam/OneDrive - Gasco GLP S.A/Escritorio/tabla-${argv.b}.txt`, salida, (error) => {
        //     if(error) throw error;
    
        //     console.log('Archivo creado');
        // });
    
        //La diferencia con el anterior es que si ocurre un error hay que atraparlo con un catch
        fs.writeFileSync(`tabla-${argv.b}.txt`, salida);
        
        return `tabla-${argv.b}.txt`;
        
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}