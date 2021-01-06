import * as http from 'http';
import * as url from 'url';


export function start(route: (handler: {[key: string]: (response: http.ServerResponse) => void}, pathname: string, response: http.ServerResponse) => void, handle:  {[key: string]: (response: http.ServerResponse) => void}): void {
    function onRequest(request: http.IncomingMessage, response: http.ServerResponse): void {
        const myUrl = new url.URL(request.url === undefined ? "" : request.url, 'http://localhost:8888');
        var pathname : string = myUrl.pathname;
        console.log("Request for " + pathname + " received.");
        route(handle, pathname, response);
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}