import {dogs} from '/data.js'

let i = 0

class Dog {
    constructor(data){
        Object.assign(this, data)
    }

    renderDog(i) {
        document.querySelector(".dog-profile").innerHTML = `
        <img id="dog-image" src="${myDog[i].avatar}">
        <img class="like-or-nope hide" id="big-nope-img" src="/images/nope-image.svg">
        <img class="like-or-nope hide" id="big-like-img" src="/images/like-image.png">
        <div class="dog-info-container">
            <p id="dog-info">${myDog[i].name}, ${myDog[i].age}</p>
            <p id="dog-description">${myDog[i].bio}</p>
        </div>`
        
    }
}
const myDog = new Dog(dogs)


document.querySelector("footer").addEventListener("click", (e) => {
    
        if(e.target.className === "like-btn-section"){ //if dog liked
            document.getElementById("big-like-img").classList.remove("hide")
            document.querySelector(".nope-btn-section").style.pointerEvents = 'none';
            document.querySelector(".like-btn-section").style.pointerEvents = 'none';
            myDog[i].hasBeenLiked = true
            myDog[i].hasBeenSwiped = true
            i++
        }
        else if(e.target.className === "nope-btn-section"){ //if dog disliked
            document.getElementById("big-nope-img").classList.remove("hide")
            document.querySelector(".nope-btn-section").style.pointerEvents = 'none';
            document.querySelector(".like-btn-section").style.pointerEvents = 'none';
            myDog[i].hasBeenSwiped = true
            myDog[i].hasBeenLiked = false
            i++
        }
        setTimeout(() => {
           document.querySelector(".nope-btn-section").style.pointerEvents = 'auto';
           document.querySelector(".like-btn-section").style.pointerEvents = 'auto';
           myDog.renderDog(i)
        }, 1500);
        if(i >= Object.keys(myDog).length)
        {i=0}

})

myDog.renderDog(i)

