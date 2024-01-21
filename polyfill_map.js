const arr = [1, 2, 3, 4, 5];

// arr.map((el) => console.log(el * 2));

Array.prototype.myMap = function(cb){
    let res = [];
    for(let index = 0; index < this.length; index++){
        res.push(cb(this[index], index, this));
    }
    return res;
}

arr.myMap((el, index) => console.log(el * 2, index));