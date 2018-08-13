import * as fs from 'fs';

const ejs = require('ejs');

export const templates = {
    index: fs.readFileSync(__dirname + '/index.js.ejs').toString(),
    indexHtml: fs.readFileSync(__dirname + '/index.html.ejs').toString(),
    test: fs.readFileSync(__dirname + '/test.js.ejs').toString(),
    app: fs.readFileSync(__dirname + '/app.js.ejs').toString(),
    editor: fs.readFileSync(__dirname + '/editor.js.ejs').toString()
} as { [name: string]: string };
