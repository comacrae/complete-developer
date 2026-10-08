import {routeHello, routeAPINames, routeWeather} from "./routes.js";
import express from "express";
import type {Response, Request} from "express";
const server = express();
const port = 3000;

server.get('/hello',function(_req:Request,res:Response): void {
    const response = routeHello();
    res.send(response);
});

server.get('/api/names', async function(_req:Request,res:Response): Promise<void> {
    let response;
    try {
       response = await routeAPINames();
    }catch(error){
        console.log(error);
    }
    res.send(response);
});
server.listen(port,"localhost",0, function(){
    console.log('Listening on ' + port);
});

server.get("/api/weather/:zipcode",
    function (req:Request<{zipcode:string}>, res:Response): void{
            const response = routeWeather({zipcode: req.params.zipcode});
            res.send(response);
    }
)