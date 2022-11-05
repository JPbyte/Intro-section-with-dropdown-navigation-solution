//variables
const feature = document.querySelector("#features")
const company = document.querySelector("#company")

feature.addEventListener("click", () =>{
    let first = document.querySelector(".first")

    if (feature){
        first.style.visibility = "visible"
    } else{
        first.style.visibility = "hidden"
    }
})