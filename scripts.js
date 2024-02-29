let btn = document.querySelector("button")
let displayphoto = document.querySelector("#wrapper")
let start = document.querySelector("#wrapper1")
let flip = document.querySelectorAll(".flip-card")
let timerDiv = document.querySelector("p")
let third =document.querySelector(".screen3")

// let flipInner = document.querySelector(".flip-card-inner")
let flipBack = document.querySelectorAll(".flip-card-back")
let flipFrontImages = document.querySelectorAll(".flip-card-front img")
let openImages = 0

let temp = ["one.jpg", "two.jpg", "three.jpg", "four.jpg", "five.jpg", "six.jpg"]

let actualImages = [...temp, ...temp]
let temp2 = []
let openImageStore = []
let counter = 0
let timmer = 0
createBackImages()
btn.addEventListener("click", () => {
	start.style.display = "none";
	displayphoto.style.display = "flex";
	timerDiv.style.display="block"
	
	settimer()
})

flipFrontImages.forEach((frontImage) => {
	frontImage.addEventListener("click", () => {
		openImages++
		frontImage.parentElement.parentElement.classList.add("backSide");
		openImageStore.push(frontImage.parentElement.nextElementSibling.children[0])
		console.log(openImageStore)
		timmer++
// timerDiv.innerHTML = timmer;
		
		setTimeout(() => {
			if (openImages > 1) {
				if (openImageStore[0].src === openImageStore[1].src) {
					//IMAGES MATCHED
					openImages = 0
					openImageStore.length = 0
					counter++
					console.log(counter)
				}
				else {
					// IMAGES NOT MATCHED
					openImageStore.forEach((img) => {
						img.parentElement.parentElement.classList.remove("backSide")
					})
					openImages = 0
					openImageStore.length = 0
				}
			}
		}, 500)
		// SECOND IMAGE OPENING, DO SOMETHING

	})
})


function createBackImages() {
	for (let i = 0; i < actualImages.length; i++) {
		let img = document.createElement("img")
		img.src = actualImages[getARandomValue()]
		flipBack[i].append(img)
	}
}

function getARandomValue() {
	let random = Math.floor(Math.random() * actualImages.length)
	if (temp2.includes(random)) return getARandomValue()
	else {
		temp2.push(random)
		return random
	}
}
function settimer(){
let set = setInterval(() => {
	timerDiv.innerHTML=timmer=timmer+1
		if (timmer === 60 || counter==6) {
		
		clearInterval(set)
	}
	screenthird()
	
}, 1000);
}

function screenthird(){
	if(timmer===60 || counter==6){
		third.classList.add("display")
		displayphoto.style.display="none"
		timerDiv.style.display="none"
		let head=document.createElement("h2")
		head.innerHTML="Thanks for playing"
		third.append(head)
		
	}
}




