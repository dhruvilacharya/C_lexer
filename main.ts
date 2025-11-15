/*
import { Lexer } from './lexer.js';

let log:(x: string) => void;
log = console.log;

let lxr : Lexer;
let inp : string;

inp = 'int main() {';

do {
    lxr = new Lexer (inp);

    if (!lxr)
        log("error");

    else {
        log( 'input: ' + lxr.input);
        log( 'token: ' + lxr.token?.tag + ' ' + lxr.token?.contents);

        inp = lxr.input;
    }
} while (lxr);

*/

import Lexer from './lexer.js';

let log:(x:string)=>void;
log = console.log;

let lxr:Lexer;
let inp:string;

inp = 'int main() {\n'
    + '  return 5;\n'
    + '}';

do {
    lxr = new Lexer(inp);

    if (!lxr)
        log('error');
    else {
        // log('input: ' + lxr.input);
        log(lxr.token?.tag + ' ' + lxr.token?.contents);

        inp = lxr.input;
    }
} while(lxr.token?.tag != '<eof>');

