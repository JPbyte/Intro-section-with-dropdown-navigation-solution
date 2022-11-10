//variables//
const feature = document.querySelector("#features")
const company = document.querySelector("#company")

//functions//
feature.addEventListener("click", () => {
    let first = document.querySelector(".first")
    let arrowF = document.querySelector(".arrow-down-features")
    if (feature){
        first.classList.toggle("active")
        arrowF.classList.toggle("rotate")
    }
})

company.addEventListener("click", () => {
    let secund = document.querySelector(".secund")
    let arrowC = document.querySelector(".arrow-down-company")

    if (company) {
        secund.classList.toggle("active")
        arrowC.classList.toggle("rotate")
    }
})

//variables//
const menu = document.querySelector(".menu-i")
const x = document.querySelector(".x")
const left = document.querySelector(".menu-left")
const menuLeftFirst = document.querySelector(".menu-left-first")
const menuLeftSecund = document.querySelector(".menu-left-a")
const show = document.querySelector(".show")
const show2 = document.querySelector(".show2")


//functions//
menuLeftFirst.addEventListener("click", () => {
    let arrow2 = document.querySelector(".arrow-down")
    if (menuLeftFirst) {
        show.classList.toggle("active1")
        arrow2.classList.toggle("rotate")
    }
       
})

menuLeftSecund.addEventListener("click", () => {
    let arrow2 = document.querySelector(".arrow-down2")

    if(menuLeftSecund) {
        show2.classList.toggle("active1")
        arrow2.classList.toggle("rotate")
    }
})

//functions//
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

