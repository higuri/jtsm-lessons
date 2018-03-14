var secretHeader = 'Woooooooo!!! ';
var secretFooter = ' !!!!!!!!!!!!';

function myFunction(s) {
    alert(secretHeader + s + secretFooter);
}

// export function declaration
// with CommonJS syntax.
module.exports = myFunction;
