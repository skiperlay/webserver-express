const hhtp = require('http');

hhtp.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' })

        let salida = {
            nombre: 'samuel',
            edad: 26,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        // res.write('hola mundo');
        res.end();

    })
    .listen(8080);

console.log('Escuchando el puerto 8080');