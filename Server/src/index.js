const http = require('http');  //importamos http
const character = require('./utils/data');  //importamos a los personajes.
const PORT = 3001

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // permite el acceso al fron para que puedad acceder y levantarlo desde el navegador 
    if(req.url.includes('/rickandmorty/character/')) {
        const id = req.url.split('/').at(-1)
        let characterFilter = character.find((character) => 
        character.id === Number(id))
        res.writeHead(200, { "Content-type": "application/json"}) // definim el status y el tipo de contenido
        res.end(JSON.stringify(characterFilter))

    }
}).listen(PORT, console.log("port on 3001"))