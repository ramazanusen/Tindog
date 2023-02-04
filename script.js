import {dogs} from '/data.js'

class Dog {
    constructor(data){
        Object.assign(this, data)
    }
}

console.log(dogs)
const myDog = new Dog(dogs)

console.log(myDog[0].hasBeenLiked)
