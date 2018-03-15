// How to run:
// > npm i -g typescript  # if you haven't
// > tsc --target ES6 --module CommonJS app.ts
// > node app.js
//

import {myFunction} from './util';

//
// Notice:
// Now we want to use 'Promise' object in myFunction. 
// Bacause 'Promise' is ES6 feature we have to
// set tsc option '--target ES6'.
// Otherwise, tsc notify the error like
// unknown syntax 'Promise'.
// When the target is set as ES6, the default value for
// '--module' option become 'ES6'.
// So just only executing
// > tsc --target ES6 app.ts
// makes ES6 code and it can't be run on Node.js.
// So we have to specify --module option like this
// > tsc --target ES6 --module CommonJS app.ts
//
myFunction('Hello').then(s => {
    console.log(s);
});
