//... green, red, rgba color and hex color
const colors = ["purple", "orange", "rgba(133,122,200)", "#f16025"]
const myBtn = document.getElementById("btn")
const color = document.querySelector(".color")

myBtn.addEventListener("click", function(){
     // console.log(document.body)
    //..get random number between 0 - 3 i.e the index of the colors array
    const getRandomNumber = randomNumber() //..invoking the getRandomNumber function
   // console.log(randomNumber)
    document.body.style.backgroundColor = colors[getRandomNumber]
    color.textContent = colors[getRandomNumber]
})

function randomNumber(){
 return Math.floor(Math.random() * colors.length) //..using floor to approximate the math value to the nearest number in the array

}