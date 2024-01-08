//"use strict";

// this in global space

console.log(this);  //global object - window, global

// this inside a function

function x() {
    // the value depends on strict or non-strict mode
    console.log(this);
}

//this inside non-strict mode - (this substitution)

// If the value of this keyword is undefined or null
// this keyword will be replaced with globalObject
// only in non-strict mode

//  this value depends on how 'this' is called (window)
x(); // prints undefined
window.x() // prints window object

// this inside a object's method
const obj = {
    a: 10,
    x: function() {
        console.log(this.a);
    }
}
obj.x();

// call, apply, bind methods (sharing methods)
// this inside nested arrow function
const obj2 = {
    a: 20,
    x: function () {
        // enclosing lexical content
        const y = () => {
            console.log(this);
        };
        y();
    }
}
obj2.x();
// this inside DOM - reference to the HTML element