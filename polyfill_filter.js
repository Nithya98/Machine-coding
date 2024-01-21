const arr = [1, 2, 3, 4, 5];

// const result = arr.filter((el) => el % 2 === 0);
// console.log(result);

Array.prototype.myFilter = function(cb) {
    let res = [];
    for(index = 0 ; index < this.length; index++){
        if(cb(this[index], index, this)){
            res.push(this[index]);
        }
    }
    return res;
}

const result = arr.myFilter((el) => el > 2);
console.log(result);