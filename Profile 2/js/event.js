// navbar
const nav = document.querySelector(".nav_main")
const list = document.querySelector(".list")
const parent1 = document.querySelector(".parent1")
const link = document.querySelectorAll


nav.addEventListener("click",function(){
	nav.classList.toggle("active")
	list.classList.toggle("active")
	parent1.classList.toggle("active")

})

document.querySelectorAll(".link").forEach(n => 
	n.addEventListener("click",function(){
		nav.classList.remove("active")
	    list.classList.remove("active")
	    parent1.classList.remove("active")
	})
	)

// over

// icon

const icon = document.querySelector(".ic")
const icons = document.querySelector(".icon2")
icon.addEventListener("click",function(){
    icon.classList.toggle("action")
    icons.classList.toggle("action")
})



// over
// Auto-text 
var typed = new Typed(".auto-text",{
	strings :["FullStack-Developer"],
	typeSpeed : 100,
	backSpeed : 100,
	loop:true,
}); 