const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = (res, id) => {            
    axios(URL + id)   
    // hacemos una promesa 
    .then((response) => response.data)  // nos devuelve otra promesa 
    .then((data) =>{
        const character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin?.name,
            Image: data.Image,
            status: data.status
        }
        res.writeHead(200, {"Content-type":"application/json"}) // Respuesta en en formato JSON y status 200
        res.end(JSON.stringify(character)) // Respuesta final con el personaje requerido 
    })
    .catch((error) => {      // Un catch para manejar el error siempre al final
        res.writeHead(500, {"Content-type":"text/plain"})
        res.end(error.message)
        // res.writeHead(500, {"Content-type":"applicationa/json"}) // Utilizamos este tipo de contenido para enviar un objeto como respuesta final
        // res.end({error: error.message})
    })
}


module.exports =getCharById // exportamos 