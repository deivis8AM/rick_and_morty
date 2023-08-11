const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const server = express();
const PORT = 3001;
const {conn} = require('./DB_connection')


conn.sync({ force: true }).then(()=>{
   server.listen(PORT, () =>{
      console.log("Server raised in port: " + PORT);
   })
})


server.use((req, res, next) => {
       res.header('Access-Control-Allow-Origin', '*');
       res.header('Access-Control-Allow-Credentials', 'true');
       res.header(
          'Access-Control-Allow-Headers',
          'Origin, X-Requested-With, Content-Type, Accept'
       );
       res.header(
          'Access-Control-Allow-Methods',
          'GET, POST, OPTIONS, PUT, DELETE'
       );
       next();
    });

server.use(express.json()); // transforma los archivos json

server.use(morgan("dev"));

server.use("/rickandmorty",router);   //Crea un middleware que agregue el string "/rickandmorty" antes de cada una de tus rutas.











// const express = require('express')   // importamos express
// const server = express() // Ejecutamos a express
// const router = require("./routes") // importamos a router
// const PORT = 3001
// const cors = require('cors')

// server.use(cors())



// server.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header(
//        'Access-Control-Allow-Headers',
//        'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     res.header(
//        'Access-Control-Allow-Methods',
//        'GET, POST, OPTIONS, PUT, DELETE'
//     );
//     next();
//  });


//  server.use(express.json()); 
//  server.use('/rickandmorty', router)

// server.listen(PORT, () => console.log('Server raised in port: ' + PORT)) // Ejecutamos el metodo listen-->(escuchar) para que escuche nuestro puerto
// //Acabamos de crear el servidor con express






















// const http = require("http") // Generar mi servido 
// const getCharById = require("./controllers/getCharById")   // Importamos el getCharById

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*'); // permite el acceso al fron para que puedad acceder y levantarlo desde el navegador
// // Creamos un condicional 
// if(req.url.includes("/rickandmorty/character")) {
//     let id = req.url.split("/").at(-1)
//     getCharById(res, id)
//  }

// }).listen(3001, () => console.log("port on 3001"))



//--------------------------------------------------------------------







// const http = require('http');  //importamos http
// const character = require('./utils/data');  //importamos a los personajes.
// const PORT = 3001

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*'); // permite el acceso al fron para que puedad acceder y levantarlo desde el navegador 
//     if(req.url.includes('/rickandmorty/character/')) {
//         const id = req.url.split('/').at(-1)
//         let characterFilter = character.find((character) => 
//         character.id === Number(id))
//         res.writeHead(200, { "Content-type": "application/json"}) // definim el status y el tipo de contenido
//         res.end(JSON.stringify(characterFilter))

//     }
// }).listen(PORT, console.log("port on 3001"))