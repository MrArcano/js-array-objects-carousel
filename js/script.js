// carousel image
const carouselImg = document.querySelector(".carousel-img");
const thumbnailsImg = document.querySelector(".carousel-thumb");

// button
const btnUp = document.querySelector(".btn-up") 
const btnDown = document.querySelector(".btn-down")

// Array di img
const imgArray = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp",
];
// -----------------------------------------------
//  CARICO il div "carousel-img"
// -----------------------------------------------
for(let i=0; i<imgArray.length; i++){
  carouselImg.innerHTML += `<img src="${imgArray[i]}" class="hide img-car">`
  thumbnailsImg.innerHTML += `<img src="${imgArray[i]}" class="thumb-car">`
}
// -----------------------------------------------

// Indice dell'immagine visibile nel carousel
let indexImg = 0;

// Array di elementi html per "img-car" e "thumb-car"
const carouselArray = document.getElementsByClassName("img-car")
const thumbArray = document.getElementsByClassName("thumb-car")

// Di default rimuovo al primo elemento la classe hide
carouselArray[indexImg].classList.remove("hide");
thumbArray[indexImg].classList.add("active");

// al click del button up
btnUp.addEventListener("click", function(){
  console.log("cliccato UP");

  carouselArray[indexImg].classList.add("hide");
  thumbArray[indexImg].classList.remove("active");

  if(indexImg == 0){
    indexImg = carouselArray.length - 1;
  }else{
    indexImg--;
  }

  carouselArray[indexImg].classList.remove("hide");
  thumbArray[indexImg].classList.add("active");

});

// al click del button down
btnDown.addEventListener("click", function(){
  console.log("cliccato DOWN");

  carouselArray[indexImg].classList.add("hide");
  thumbArray[indexImg].classList.remove("active");

  if(indexImg == carouselArray.length - 1){
    indexImg = 0;
  }else{
    indexImg++;
  }
  
  carouselArray[indexImg].classList.remove("hide");
  thumbArray[indexImg].classList.add("active");
});