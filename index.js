
    const wrapper = document.querySelector(".wrapper")
const loginLink = document.querySelector(".login-link")
const registeLink = document.querySelector(".register-link")
const btnPopup = document.querySelector(".btnLogin-popup")
const IconClose = document.querySelector(".icon-close", "closee")

const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");


registeLink.addEventListener("click", ()=> {
    wrapper.classList.add("active")
})
loginLink.addEventListener("click", ()=> {
    wrapper.classList.remove("active")
})

btnPopup.addEventListener("click", ()=> {
    wrapper.classList.add("active-popup")
})
IconClose.addEventListener("click", ()=> {
    wrapper.classList.remove("active-popup")
})
hamburger.addEventListener("click", ()=>{
    navigation.classList.toggle("bar")

})





  

