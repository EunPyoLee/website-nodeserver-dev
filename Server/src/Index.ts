import * as http from 'http';

import * as server from './Server';
import * as RequestHandlers from './RequestHandlers';
import * as router from './Router';



const handlers: {[key: string]: (response: http.ServerResponse) => void} = {
    '/' : RequestHandlers.start
};

server.start(router.route, handlers)


