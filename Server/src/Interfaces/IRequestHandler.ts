import {ServerResponse} from "http";

export interface IRequestHandler {
    [url: string]: (response: ServerResponse) => void;
};