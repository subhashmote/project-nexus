




const wrapper = document.querySelector(".wrapper"),
 signupheader = document.querySelector(".signup header"),
 loginheader = document.querySelector(".login header");

 loginheader.addEventListener("click",()=>{
    wrapper.classList.add("active");
 })

 signupheader.addEventListener("click",()=>{
    wrapper.classList.remove("active");
 })