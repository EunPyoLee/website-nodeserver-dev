import * as http from 'http';

export function start(response : http.ServerResponse): void {
    console.log("Rquest handler 'start' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Start TESETING TEXT HELLO");
    response.end();
}