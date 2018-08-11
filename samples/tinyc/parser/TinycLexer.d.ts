import {InputStream, Lexer} from 'antlr4';

export declare class TinycLexer extends Lexer {
    readonly channelNames: string[];
    readonly modeNames: string[];
    readonly symbolicNames: string[];
    readonly grammarFileName: string;

    constructor(input: InputStream);
}
