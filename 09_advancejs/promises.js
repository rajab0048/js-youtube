// fetch('https://smothing.com').then().catch().finally()

const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network

    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise consumed");

})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");

})


const promisethree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "chai", email: "chai@example.com" })
    }, 1000)
})

promisethree.then(function (user) {
    console.log(user);

})


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Rajab", password: "123" })
        } else {
            reject('ERROR Somthing went wrong')
        }

    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username

}).then((username) => {
    console.log(username);

}).catch(function (error) {
    console.log(error);
}).finally(() => console.log("The promise is either resolve or rejected"))


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "JavaScript", password: "123" })
        } else {
            reject('ERROR: Js went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const respone = await promiseFive
        console.log(respone);
    } catch (error) {
        console.log(error);
    }

}
consumePromiseFive()


async function getAllUsers() {
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await respone.json()
    console.log(data);
   } catch (error) {
    console.log("E:", error);
   } 
}

getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((respone) => {
    return respone.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error);
)