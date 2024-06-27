var c = 300

let a = 300

if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("inner: " , a);

}

// console.log(a);
// console.log(b);
// console.log(c);



// lecture 22

function one(){
    const username = "Rajab"

    function two(){
        const website = "YouTube"
        // console.log(username);
    }
    // console.log(website)

    // two()
}


// one()

if (true) {
    const username = "Rajab"
    if (username === "Rajab") {
        const website = " youtube"
        // console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);



// *********** interesting ************

addone(5)
function addone(num) {
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}

