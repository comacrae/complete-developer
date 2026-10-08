import { routeHello, routeAPINames, routeWeather } from "./routes.js";
import express from "express";
const server = express();
const port = 3000;
server.get('/hello', function (_req, res) {
    const response = routeHello();
    res.send(response);
});
server.get('/api/names', async function (_req, res) {
    let response;
    try {
        response = await routeAPINames();
    }
    catch (error) {
        console.log(error);
    }
    res.send(response);
});
server.listen(port, "localhost", 0, function () {
    console.log('Listening on ' + port);
});
server.get("/api/weather/:zipcode", function (req, res) {
    const response = routeWeather({ zipcode: req.params.zipcode });
    res.send(response);
});
//# sourceMappingURL=index.js.map