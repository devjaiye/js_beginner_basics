const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D",
"E","F"] //...hex colors 

const color = document.querySelector(".color")
const hexBtn = document.getElementById("btn")

hexBtn.addEventListener("click", function(){    
//...hex colors work with 6 hashtags, loop to generate hex color
  let hexColor = "#"
  for (let i = 0; i < 6; i++){
      hexColor += hex[randomNumber()] //..generate random number from the array,"+=" gives the hashtag values as a string 
  }    
  color.textContent = hexColor
  document.body.style.backgroundColor = hexColor
})
//..function to generate random number 
function randomNumber(){
    return Math.floor(Math.random()  * hex.length) //..to get the random number from the array we multiply random with hex array 

}