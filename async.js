// async function always always return a promise
// either u return a promise from the function,
// if u don't return a promise then it'll put the return value inside the promise and then return the promise as output

// async and await combo is used to handle promises
// instead of doing promise.then -> use await <promise> then the data will return as a value
//  await is a keyword and it can be only used inside an async function.
// await resolves the promise
// await will wait for the promise to resolve, means it'll not let the next line of code to execute
//  unitil or unless the promise resolves
// wherever u have a async await code, wrap it inside a try and catch block
// bascially async and await is just a new way or syntactical sugar of using our old way of promise.catch

// how fetch works?
// fetch() is basically a promise, which retuens response object
//  the response object has a body which is a readable string which u have to convert to json
// fetch() => response.json => jsonValue