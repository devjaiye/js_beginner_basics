const hex = ["#000000","#f16025","#f16125"]
const color = document.querySelector(".color")
const hexBtn = document.getElementById("btn")

hexBtn.addEventListener("click", function(){
    const getHexColor = myhexColor()
document.body.style.backgroundColor = hex[getHexColor]
color.textContent = hex[getHexColor]    
    
})

function myhexColor(){
    return Math.floor(Math.random() * hex.length)
}