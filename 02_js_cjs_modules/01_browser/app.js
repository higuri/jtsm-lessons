// import function declaration
// with CommonJS syntax.
//
// Notice:
// * [OK] './util', './util.js'
// * [NG] 'util', 'util.js' 
// > ComonJS::Modules/1.1 Specification:
// > Module identifiers may not have file-name extensions like ".js".
var myFunction = require('./util');

myFunction('Hello');
