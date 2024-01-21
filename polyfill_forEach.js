
const arr = [1, 2, 3, 4, 5];

// arr.forEach((item) => {
//     console.log(item);
// })

Array.prototype.myForEach = function(cb) {
    // console.log(this);
    for( let index = 0; index < this.length; index++){
        cb(this[index], index, this);
    }
}

arr.myForEach((item, index) => {
    console.log(item, index);
});