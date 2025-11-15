"use strict";
/*
            int main(){
                return 5;
            }
*/
/*
type Identifier = string;
type Openround = '(';
type Closeround = ')';
type Opencurly = '{';
type Closecurly = '}';
type Semicolon = ';';
type Whitespaces = ' ';
type Keyword = 'int' | 'return';
type Token = Tkeyword | Tnumberconst | Topenround | Tcloseround | Topencurly | Tclosecurly | Tsemicolon
 | Tidentifier | Twhitespace;
type Numberconst = number;


interface Twhitespace {
    tag: string;
    contents ?: Whitespaces;
}
interface Tidentifier {
    tag: string;
    contents ?: Identifier;
}
interface Tnumberconst {
    tag: string;
    contents ?: Numberconst;
}
interface Tkeyword {
    
    tag: string;
    contents ?: Keyword;
}
interface Topenround {
    tag : string;
    contents ?: Openround;
}
interface Tcloseround {
    tag: string;
    contents ?: Closeround;
}
interface Topencurly {
    tag : string;
    contents ?: Opencurly;
}
interface Tclosecurly {
    tag: string;
    contents ?: Closecurly;
}
interface Tsemicolon {
    tag: string;
    contents ?: Semicolon;
}


let openround : ()=> Topenround;
let closeround : ()=> Tcloseround;
let opencurly : ()=> Topencurly;
let closecurly : ()=> Tclosecurly;
let whitespace : ()=> Twhitespace;
let keyword : (arg : string)=> Tkeyword;
let semicolon : ()=> Tsemicolon;
let numberconst : (arg: number)=> Tnumberconst;
let identifier : (arg: string)=> Tidentifier;

numberconst = (arg : number): Tnumberconst => ({

    tag : 'numberconstant',
    contents : arg as Numberconst

});
whitespace = (): Twhitespace => ({
    tag : 'whitespace',
    contents : undefined as unknown as Whitespaces
})
keyword = (arg: string): Tkeyword => ({

    tag : 'keyword',
    contents : arg as Keyword

});
openround = (): Topenround => ({

    tag : 'openround',
    contents : undefined as unknown as Openround

});
closeround = (): Tcloseround => ({

    tag : 'closeround',
    contents : undefined as unknown as Closeround

});
opencurly = (): Topencurly => ({

    tag : 'opencurly',
    contents : undefined as unknown as Opencurly

});
closecurly = (): Tclosecurly => ({

    tag : 'closecurly',
    contents : undefined as unknown as Closecurly

});
semicolon = (): Tsemicolon => ({

    tag : 'semicolon',
    contents : undefined as unknown as Semicolon

});
identifier = (arg: string): Tidentifier => ({

    tag : 'identifier',
    contents : arg as Identifier

});



interface Iregexp {
    regexp : RegExp;
    tokenname : string;
}

let regexplist : Iregexp[];

regexplist =[
    {regexp : / ^\s /, tokenname : 'space'},
    {regexp : / ^\( /, tokenname : 'openround'},
    {regexp : / ^\) /, tokenname : 'closeround'},
    {regexp : / ^{ /, tokenname : 'opencurly'},
    {regexp : / ^} /, tokenname : 'closecurly'},
    {regexp : / ^; /, tokenname : 'semicolon'},
    {regexp : / ^[0-9]+ /, tokenname : 'numberconst'},
    {regexp : / ^[a-zA-Z_'$][a-zA-Z_0-9'$]+/, tokenname : 'identifier'},
    {regexp : / ^(int) | (return) /, tokenname: 'keyword' }

];

// lexer

interface Ilexer {
    constructor: Function;
    lex : () => void;
    input : string;
    token ?: Token;
}

export class Lexer implements Ilexer{
    public input : string;
    public token ?: Token;

    constructor (str : string) {
        this.input = str;
        this.lex();

        return this;
    }
    public lex() {
        let regexp : RegExp;
        let tokenname : string;
        let entry : Iregexp | undefined;
        let input : string;
        let n : number;
        let matcharr : RegExpMatchArray;
        let inputarr : string[];
        let token : Token | null;
        let tmp : string;
        let ident : string;
        let kw : string;
        let numconst : number;

        
        input = this.input;
        entry = regexplist.find((x : Iregexp) : boolean =>
            (input.match(x.regexp)) ? true : false);

        if (!entry)
            throw "Parse error (lexer)";
        regexp = entry.regexp;
        tokenname = entry.tokenname;
        matcharr = input.match(regexp) as RegExpMatchArray;
           // console.log('matcharr: ', matcharr);
        n = matcharr.length;

        inputarr = input.split(' ');
        while (n--)
            inputarr.shift()
        input = inputarr.join();

/*
        Tkeyword | Tnumberconst | Topenround | Tcloseround | Topencurly | Tclosecurly | Tsemicolon | Tidentifier
*/
/*
        switch(tokenname){

            case 'openround':   token = openround(); break;
            case 'closeround':  token = closeround(); break;
            case 'opencurly':   token = opencurly(); break;
            case 'closecurly':  token = closecurly(); break;
            case 'semicolon':   token = semicolon(); break;
            case 'identifier':
                tmp = matcharr[0];
                token = identifier(tmp);

                break;
            case 'keyword':
                tmp = matcharr[0];
                token = keyword(tmp);

                break;
            case 'numberconst':
                tmp = matcharr[0];
                numconst = Number.parseInt(tmp);
                token = numberconst(numconst);

                break;
            default :
                throw "Parse error (lexer)";
        }

        if (!token)
            throw "Parse error (lexer)"

        this.input = input;
        this.token = token;

        return void 0;
    }

}

*/
Object.defineProperty(exports, "__esModule", { value: true });
var regexplist;
regexplist = [
    { regexp: /^\s/, tokenname: 'whitespace' },
    { regexp: /^\(/, tokenname: 'openround' },
    { regexp: /^\)/, tokenname: 'closeround' },
    { regexp: /^{/, tokenname: 'opencurly' },
    { regexp: /^}/, tokenname: 'closecurly' },
    { regexp: /^;/, tokenname: 'semicolon' },
    { regexp: /^(int)|(return)/, tokenname: 'keyword' },
    { regexp: /^[0-9]+/, tokenname: 'numberconst' },
    { regexp: /^[a-zA-Z_'$][a-zA-Z_0-9'$]+/, tokenname: 'identifier' }
];
var keyword;
var whitespace;
var identifier;
var openround;
var closeround;
var opencurly;
var closecurly;
var semicolon;
var numberconst;
var eof;
keyword = function (arg) { return ({
    tag: 'keyword',
    contents: arg
}); };
whitespace = function () { return ({
    tag: 'whitespace',
    contents: undefined
}); };
identifier = function (arg) { return ({
    tag: 'identifier',
    contents: arg
}); };
openround = function () { return ({
    tag: 'openround',
    contents: undefined
}); };
closeround = function () { return ({
    tag: 'closeround',
    contents: undefined
}); };
opencurly = function () { return ({
    tag: 'opencurly',
    contents: undefined
}); };
closecurly = function () { return ({
    tag: 'closecurly',
    contents: undefined
}); };
semicolon = function () { return ({
    tag: 'semicolon',
    contents: undefined
}); };
numberconst = function (arg) { return ({
    tag: 'numberconst',
    contents: arg
}); };
eof = function () { return ({
    tag: '<eof>',
    contents: undefined
}); };
var Lexer = /** @class */ (function () {
    function Lexer(str) {
        this.input = str;
        this.lex();
        return this;
    }
    Lexer.prototype.lex = function () {
        var regexp;
        var tokenname;
        var entry;
        var input;
        var inputarr;
        var n;
        var matcharr;
        var token;
        var tmp;
        var numconst;
        input = this.input;
        if (!input.length) {
            this.token = eof();
            return void 0;
        }
        entry = regexplist.find(function (x) {
            return (input.match(x.regexp)) ? true : false;
        });
        if (!entry)
            throw "Parse error (lexer)";
        regexp = entry.regexp;
        tokenname = entry.tokenname;
        matcharr = input.match(regexp);
        // console.log('matcharr: ', matcharr);
        n = matcharr[0].length;
        inputarr = input.split('');
        while (n--)
            inputarr.shift();
        input = inputarr.join('');
        token = null;
        switch (tokenname) {
            case 'whitespace':
                token = whitespace();
                break;
            case 'openround':
                token = openround();
                break;
            case 'closeround':
                token = closeround();
                break;
            case 'opencurly':
                token = opencurly();
                break;
            case 'closecurly':
                token = closecurly();
                break;
            case 'semicolon':
                token = semicolon();
                break;
            case 'identifier':
                tmp = matcharr[0];
                token = identifier(tmp);
                break;
            case 'keyword':
                tmp = matcharr[0];
                token = keyword(tmp);
                break;
            case 'numberconst':
                tmp = matcharr[0];
                numconst = Number.parseInt(tmp);
                token = numberconst(numconst);
                break;
            default:
                throw 'Parse error (lexer)';
        }
        if (!token)
            throw 'Parse error (lexer)';
        this.input = input;
        this.token = token;
        return void 0;
    };
    return Lexer;
}());
exports.default = Lexer;
