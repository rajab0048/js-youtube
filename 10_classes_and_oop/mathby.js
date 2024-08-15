// Object

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descriptor);

// console.log(Math.PI);


const chai = {
    name: 'ginger chai',
    price: 250,
    isavaiable:true,

    orderchai: function () {
        console.log("chai nai bani");
        
    }
}

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false,

})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    } 
    
    
}


