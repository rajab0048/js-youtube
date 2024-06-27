const user = {
    username: "Rajab",
    price: 999,


    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
    console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Rajab"
//     console.log(this.username);
// }

// chai()


// const chai = function () {
//     let username = "Rajab"
//     console.log(this.username);
// }


const chai = () => {
    let username = "Rajab"
    console.log(this);
}

// chai()


// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// const addTwo = (num1 , num2) => num1 + num2


// const addTwo = (num1 , num2) => ( num1 + num2 )

// const addTwo ( num1 , num2 ) => ({username: 'Rajab'})

console.log(addTwo(3, 4))


const myArray = [2, 5, 3, 7, 8]

myArray.forEach()