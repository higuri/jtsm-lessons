// How to run:
// > node app.js
//
// Notice:
// Node.js supports CommonJS module specifications.
// So you can run this sciprt as it is.
//

// import function declaration
// with CommonJS syntax.
//
// Notice:
// * [OK] './util', './util.js'
// * [NG] 'util', 'util.js' 
var myFunction = require('./util');

myFunction('Hello');
