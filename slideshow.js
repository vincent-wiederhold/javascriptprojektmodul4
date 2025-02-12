//SlideIndex er den viste slide, som starter på 1 (første slide). visBilleder viser så slideIndex.
let slideIndex = 1;
visBilleder(slideIndex);
console.log("hej")

//nySlide (n) lægger så n til slideIndexet, som altså startede på 1.
function nySlide(n) {
  visBilleder(slideIndex += n);
}

//aktuelleSlide (n) viser så den slide, som slideIndex har sat som n.
function aktuelleSlide(n) {
  visBilleder(slideIndex = n);
}

//slides-variablen indeholder nu mine to billeder, der har classen "stortbillede". 
//Hvis n bliver større end længden på slides, altså 2, så går den tilbage til første billede på slideIndex. 
//Hvis n er mindre end 1, så viser den sidste slide.
function visBilleder(n) {
  let i;
  let slides = document.getElementsByClassName("stortbillede");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    console.log("det virker"+i)
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}