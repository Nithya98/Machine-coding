
// let arr = [10, 1, 2, 3, 4]

// let sum = arr.reduce((acc, current) => { 
//     if(acc < current){
//         acc = current;
//     }
//     return acc;
// }, 1)

// console.log('sum', sum);

function getData() {
    console.log('fetch data...')
}

const debounce = (cb, delay) => {
    let timer;
    return function() {
     clearTimeout(timer);
     timer = setTimeout(() => {cb.apply(this, arguments)}, delay);
    }
}

const getValues = debounce(getData, 300);


// call() - function borrowing
const name = {
    firstName: 'nithya',
    lastName: 'shanmugam',
    getFullName: function (hometown) {
        console.log(this.firstName + " " + this.lastName + " from " + hometown);
    }
}
name.getFullName('normal function');

const name2 = {
    firstName: 'namaste',
    lastName:'javascript'
}

name.getFullName.call(name2, 'pondicherry');

// apply() - the only difference from call and apply method is the way u pass the arguments

name.getFullName.apply(name2, ["delhi"])

// bind() - it gives the copy of the method which will be invoked later. rather than directly incoking wherever we are writing bind.
//there is a catch overe here, unline call and apply, it'll return a method which we need to call over again

let bindMethod = name.getFullName.bind(name2, 'bind method');
bindMethod();

//currying - one way: we make a copy of method using bind and make multiple method of it

const multiply = (x,y) => {
   console.log('currying', x * y)
}

const multiplyByTwo = multiply.bind(this, 2)
multiplyByTwo(3);

//  other way - is to use clouse method
let multiplyClosure = function (x) {
  return function (y) {
    console.log('closure currying', x * y);
  }
}

multiplyClosure(4)(5);


