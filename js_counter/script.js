//..set initial count 
let count = 0

//..declare the value and buttons 
const value = document.querySelector("#value")
const allBtns = document.querySelectorAll(".btn")

allBtns.forEach(function (item){
   item.addEventListener("click", function(e){
    console.log(e.currentTarget.classList)
   })
})