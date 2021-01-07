import * as http from 'http';
import {IRequestHandler}  from './Interfaces/IRequestHandler';

export function route(handler: IRequestHandler, pathname: string, response: http.ServerResponse): void{
    console.log("About to route a request for " + pathname);
    if (typeof handler[pathname] === 'function'){
        handler[pathname](response);
    }
    else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not Found");
        response.end();
    }
}