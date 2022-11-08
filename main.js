//variables
const feature = document.querySelector("#features")
const company = document.querySelector("#company")

feature.addEventListener("click", () => {
    let first = document.querySelector(".first")
    let arrow = document.querySelector(".arrow-down")
    if (feature){
        first.classList.toggle("active")
        arrow.classList.toggle("rotate")
    }
})

company.addEventListener("click", () => {
    let secund = document.querySelector(".secund")
    let arrow2 = document.querySelector(".arrow-down2")

    if (company) {
        secund.classList.toggle("active")
        arrow2.classList.toggle("rotate")
    }
})

const menu = document.querySelector(".menu-i")
const x = document.querySelector(".x")
const left = document.querySelector(".menu-left")


menu.addEventListener("click", () => {
    
    if (menu) {
        menu.style.display = "none"
        x.style.display = "flex"
        left.style.display = "flex"
    }
})

x.addEventListener("click", () => {

    if(x){
        menu.style.display = "flex"
        x.style.display = "none"
        left.style.display = "none"
    }
})