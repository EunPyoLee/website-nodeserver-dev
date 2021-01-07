import * as server from './Server';
import * as RequestHandlers from './RequestHandlers';
import * as router from './Router';

import {IRequestHandler} from './Interfaces/IRequestHandler';


const handlers: IRequestHandler= {
    '/' : RequestHandlers.start
};

server.start(router.route, handlers)


