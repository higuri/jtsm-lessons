var secretHeader = 'Woooooooo!!! ';
var secretFooter = ' !!!!!!!!!!!!';

function myFunction(s) {
    console.log(secretHeader + s + secretFooter);
}

// export function declaration
// with CommonJS syntax.
module.exports = myFunction;
