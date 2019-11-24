// Requires.

const fs = require('fs');


let listarTabla = (base, limite = 10) => {

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`)
    }



}


let crearArchivo = (base, limite = 10) => {

    if (!Number(base)) {
        reject(`el valor introducido ${ base } no es un número`)
        return;
    }

    return new Promise((resolve, reject) => {

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }


        fs.writeFile(`ArchivosTabla/tabla ${ base }.txt`, data, (err) => {

            if (err) rejetc(err)
            else
                resolve(`tabla-${base}.txt`);

        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}