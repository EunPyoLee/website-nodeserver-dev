import * as http from 'http';
import * as url from 'url';
import {IRequestHandler} from './Interfaces/IRequestHandler';
import {IRouter}  from './Interfaces/IRouter';


export function start(route: IRouter, handler: IRequestHandler): void {
    function onRequest(request: http.IncomingMessage, response: http.ServerResponse): void {
        const myUrl = new url.URL(request.url === undefined ? "" : request.url, 'http://localhost:8888');
        var pathname : string = myUrl.pathname;
        console.log("Request for " + pathname + " received.");
        route(handler, pathname, response);
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}