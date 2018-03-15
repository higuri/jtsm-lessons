// How to run:
// > npm i -g typescript
// > tsc app.ts
// > node app.js
//
// Notice:
// Executing 'tsc app.ts' generates app.js & util.js.
// If you read the files you will notice
// that the CommonJS syntax is used for module management.
// When you execute 'tsc' without options
// tsc generates CommonJS-style code.
// If you prefer ES6-style one you can execute
// > tsc --module ES6 app.ts
// But the generated 'app.js' cannnot be run by
// > node app.js
// because current Node.js (v 8.10) doesn't support
// the ES6-style module management.
//

// import function declaration
// with ES6 syntax.
import {myFunction} from './util';

//
// Notice:
// You can also use CommonJS syntax
// because Node.js supports it along with ES6 syntax.
// However, using ES6 syntax is prefereble because it is the JS standard.
// *) In order to use CommonJS syntax (especially 'require' keyword)
//    you have to get @types (type declaration) for Node.js.
//    > npm i @types/node
//
//let myFunction = require('./util');

myFunction('Hello');
