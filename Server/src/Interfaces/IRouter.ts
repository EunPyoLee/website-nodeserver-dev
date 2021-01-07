import {ServerResponse} from 'http';

import {IRequestHandler} from './IRequestHandler';

export interface IRouter{
    (handler: IRequestHandler, pathname: string, response: ServerResponse) : void
};