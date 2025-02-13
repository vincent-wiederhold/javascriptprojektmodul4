let slideIndex = 1;
visBilleder(slideIndex);

function nySlide(n) {
  visBilleder(slideIndex += n);
}

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

