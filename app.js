
const videoss = document.getElementById("date")
videoss.innerHTML = new Date().getFullYear()  


const co = document.querySelector(".links-container")
const btn = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

btn.addEventListener('click',()=>{
    const lis = co.getBoundingClientRect().height;
    const li = links.getBoundingClientRect().height;
    if(lis===0){
        co.style.height = `${li}px`
    }else{
        co.style.height = 0

    }

})

const nav = document.getElementById("nav")
const navf = document.querySelector(".fixed-nav")
window.addEventListener('scroll',()=>{
    const hagt = nav.getBoundingClientRect().height; 
    const pag = window.pageYOffset
    if(pag>hagt){
        nav.classList.add("fixed-nav")
    }else{
        nav.classList.remove("fixed-nav")
        
    }
    const scrool = document.querySelector(".top-link")
    if(pag>200){
        scrool.classList.add("show-link")
    }else{
        scrool.classList.remove("show-link")
    }
    
})