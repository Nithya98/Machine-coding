// old way
const cart = ['laptop', 'mobile', 'mouse'];

// createOrder(cart, function(orderId) {
//     proceedToPayment(orderId);
// })

// Promise

// promise object is a placeholder  for a certain period of time, until we receive a value from a async operation
//promise is an object, that represents a eventual completion of async operation.

const createOrder = (cart) => {
    return new Promise((resolve, reject) => {
        if(!cartEmpty()){
            const err = new Error('cart is empty');
            reject(err);
        }
        const orderId = '12345';
        if(orderId !== null){
            resolve(orderId);
        }
    })
}

function cartEmpty () {
    return false;
}

createOrder(cart)
.then((orderId) => console.log(orderId))
.catch((err) => console.log(err.message));

// Promise.all - will wait for all of them to finish and it'll collect and give u the resukt (array of output)
//if any of the promise.all will get rejected, it will throw an error.  promise.all will also be a failure 
// wheverever the error it got from the promise, it'll return that as output.  
// if one promise fails, it'll not wait for other promises to get success or reject or whatever
// u cannot cancel the promise in between

// promise.allSettled - whether it's success or failure, it'll wait for all the promises to settle

// promise.race - as soon as whichever promise is settled first, 
// it'll immedially give me the value of the result (1st settled promise whether it's resolves or rejects)
// it's kinda like a race, whichever wins first will be returned

// promise.any - it's very much similar to race.  the only difference is, it waits for the any promise to success
// incase if all fails, it'll give u back the list of failed errors(agrigated errors)
// it's a success seeking api (for 1st success)

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p1 fails"), 3000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p2 resolves"), 1000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p3 resolves"), 2000);
})

// try here with all, allSettled, race, any
Promise.any([p1, p2, p3])
.then((resolve) => {
    console.log(resolve);
})
.catch((err) => {
    console.error(err);
    console.log(err.errors) //for agregated errors
})

