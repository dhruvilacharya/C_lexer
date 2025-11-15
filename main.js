"use strict";
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var lexer_js_1 = require("./lexer.js");
var log;
log = console.log;
var lxr;
var inp;
inp = 'int main() {\n'
    + '  return 5;\n'
    + '}';
do {
    lxr = new lexer_js_1.default(inp);
    if (!lxr)
        log('error');
    else {
        // log('input: ' + lxr.input);
        log(((_a = lxr.token) === null || _a === void 0 ? void 0 : _a.tag) + ' ' + ((_b = lxr.token) === null || _b === void 0 ? void 0 : _b.contents));
        inp = lxr.input;
    }
} while (((_c = lxr.token) === null || _c === void 0 ? void 0 : _c.tag) != '<eof>');
