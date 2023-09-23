// carousel image
const carouselImg = document.querySelector(".carousel-img");
const thumbnailsImg = document.querySelector(".carousel-thumb");

// button
const btnUp = document.querySelector(".btn-up") 
const btnDown = document.querySelector(".btn-down")

// Array di oggetti
const images = [
  {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];
// -----------------------------------------------
//  CARICO il div "carousel-img"
// -----------------------------------------------
images.forEach((element) => {
  carouselImg.innerHTML += `
  <div class="hide img-car">
    <img src="${element.image}">
    <div class="carousel-text">
      <h3>${element.title}</h3>
      <p>${element.text}</p>
    </div>
  </div>
  `;
  thumbnailsImg.innerHTML += `<img src="${element.image}" class="thumb-car">`;

})
// -----------------------------------------------

// Indice dell'immagine visibile nel carousel
let indexImgHide = 0;
let indexImgShow = 0;

// Array di elementi html per "img-car" e "thumb-car"
const carouselArray = document.getElementsByClassName("img-car")
const thumbArray = document.getElementsByClassName("thumb-car")

// Di default rimuovo al primo elemento la classe hide
carouselArray[indexImgShow].classList.remove("hide");
thumbArray[indexImgShow].classList.add("active");

// Variabili, che conterranno l'identificativo degli intervalli
let prevIntervall;
let nextIntervall;

// Add event listener alle "thumb-car"
for (const index in thumbArray) { 
  // il [for in] mi restituisce un elemento "lenght" ?
  if(!isNaN(index)){
    const element = thumbArray[index];
    element.addEventListener("click",function(){
      goToImage(index);
    })
  }
}

// Click del button up
btnUp.addEventListener("click",function(){
  resetTimer();
  prevImage();
});

// Click del button down
btnDown.addEventListener("click",function(){
  resetTimer();
  nextImage();
});

// --------------------------------------------------------
// ----------------------- FUNCTION -----------------------
// --------------------------------------------------------

// Function PREV IMAGE
function prevImage(){
  indexImgHide = indexImgShow;
  if(indexImgShow == 0){
    indexImgShow = carouselArray.length - 1;
  }else{
    indexImgShow--;
  }
  toggleClassHideActive(indexImgHide,indexImgShow);

  // avvio un setIntervall per continuare a scorrere UP
  if (!prevIntervall){
    prevIntervall = setInterval(prevImage,1000);
  }
};

// Function NEXT IMAGE
function nextImage(){
  indexImgHide = indexImgShow;
  if(indexImgShow == carouselArray.length - 1){
    indexImgShow = 0;
  }else{
    indexImgShow++;
  }
  toggleClassHideActive(indexImgHide,indexImgShow);
  
  // avvio un setIntervall per continuare a scorrere DOWN
  if (!nextIntervall){
    nextIntervall = setInterval(nextImage,1000);
  }
};

// Function RESET TIMER
function resetTimer(){
  clearInterval(prevIntervall);
  clearInterval(nextIntervall);
  prevIntervall = null;
  nextIntervall = null;
}

// Function GoToImage
function goToImage(index){
  resetTimer();
  indexImgHide = indexImgShow;
  indexImgShow = index;
  toggleClassHideActive(indexImgHide,indexImgShow);
}

// Function ToggleClassHideActive
function toggleClassHideActive(iHide,iShow) {
  carouselArray[iHide].classList.toggle("hide");
  carouselArray[iShow].classList.toggle("hide");
  thumbArray[iHide].classList.toggle("active");
  thumbArray[iShow].classList.toggle("active");
}