//Requireds
const { rejects } = require('assert');
const fs = require('fs');
const colors = require('colors');
//const fs = require('express');  //paquete de terceros
//const fs = require('./fs'); //paquete de terceros

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, rejects) => {
        if (!Number(base)) {
            rejects('No es un numero');
            return;
        }
        let data = '';

        console.log('============================'.green);
        console.log(`=======tabla de ${ base}===========`.green);
        console.log('============================'.green);


        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} =  ${base * i}\n`;
        }

        resolve(data);
    });
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, rejects) => {

        if (!Number(base)) {
            rejects('No es un numero');
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} =  ${base * i}\n`;
        }


        fs.writeFile(`tablas/table-${base}-al-${limite}.txt`, data, (err) => {
            if (err) rejects(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`.blue);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}