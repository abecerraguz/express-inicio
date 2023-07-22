import express from "express";
const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>Juan Perez</h1>');
})




app.listen( 3000,()=> console.log(`Servidor levantado en el puerto 3000`) )

// import http from 'http';
// const servidor =  http.createServer((req,res) =>{

//     const { url, method } = req

//     if(url === '/usuarios' && method === 'GET'){
//         // res.writeHead(200,{co})
//         res.write('respuesta del server')
//         res.end();
//     }

// })
// servidor.listen(3000,()=> console.log(`Servidor levantado en el puerto 3000 con Node puro`) )