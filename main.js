//variables
const feature = document.querySelector("#features")
const company = document.querySelector("#company")

feature.addEventListener("click", () =>{
    let first = document.querySelector(".first")
    let arrow = document.querySelector(".arrow-down")
    if (feature){
        first.classList.toggle("active")
        arrow.classList.toggle("rotate")
    }
})

company.addEventListener("click", () =>{
    let secund = document.querySelector(".secund")
    let arrow2 = document.querySelector(".arrow-down2")

    if (company) {
        secund.classList.toggle("active")
        arrow2.classList.toggle("rotate")
    }
})