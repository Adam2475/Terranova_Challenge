Link for TS compiler for VScode:

https://code.visualstudio.com/docs/typescript/typescript-compiling


Install typescript globally:
npm install -g typescript

Install typescript locally in the project:
npm install --save-dev typescript

1) tsconfig.json
Typically the first step in any new TypeScript 
project is to add a tsconfig.json file.

2) Transpile TypeScript into JavaScript
VS Code integrates with tsc through our integrated task runner. 
We can use this to transpile .ts files into .js files.

    a) tsc "file_name.ts"
        genera un file js con lo stesso nome
    b) node "file_name.js"
        compilatore di JavaScript

Ctrl + Shift + B = build tasks