const http = require("http");
const PORT = 5000;
const server = http.createServer();

server.on("request", (request, response) => {
    if (request.url === "/" && request.method === "GET"){
        response.end("<h1>You're served by server B of service A </h1>");
    }
});

server.listen(PORT, () => {
    console.log("Service running at port: " + PORT);
});

