
var popUp = document.getElementById("pop-up")

// loader page
 let loadingPage = document.querySelector(".loader")
window.addEventListener("load" , function(){
    loadingPage.style.display="none";
})
//  setInterval(function(){
//  loadingPage.classList.add("hide-loader")

// },1000)

// scroll to top 


let soP = document.querySelector(".top")
window.onscroll= function(){
if(window.scrollY >= 300){
  soP.classList.add("show")
}
else{
  soP.classList.remove("show")
}
}

soP.onclick = function(){
 window.scrollTo({
left:0,
top:0

 })
}

// pop up toggle
function openSearchPopUp(){
popUp.style.transform=" translate(-50%,-50%) scale(1)"
}
function closeSearchPopUp(){
    popUp.style.transform=" translate(-50%,-50%) scale(0)"
}


// menu current page  selected
let links = document.querySelectorAll("#list li a");
links.forEach((link)=>{
    link.addEventListener("click" , removeActive )
})
function removeActive(){
links.forEach((link)=>{
    link.classList.remove("active")
    this.classList.add("active")
})}



// menu toggle
function openNavMenu(){
    var menu = document.getElementById("list")
    menu.classList.toggle("flex");
}
// animate skill section
let section = document.getElementById("skills-section")
let spans = document.querySelectorAll(".prog span")
window.onscroll = function(){
if(window.scrollY >= section.offsetTop - 250)
{
    spans.forEach((span)=>{span.style.width = span.dataset.progress;}

    
    
    
    )
}
}

// portfolio filter 
let filters = document.querySelectorAll(".shuffel li");
filters.forEach((filter)=>{
    filter.addEventListener("click" , removeCurrentClass)
    filter.addEventListener("click" , filterImgs)
    
})
function removeCurrentClass(){
    filters.forEach((filter)=> {
    filter.classList.remove("active-tab")
    this.classList.add("active-tab")
   
})
}
let imgs = document.querySelectorAll(".box")

function filterImgs(){
imgs.forEach((img)=>{
    img.style.display="none";
}) 
document.querySelectorAll(this.dataset.filter).forEach((ele)=>{
    ele.style.display="block";
})

}
