/*document.getElementById("plusknap").addEventListener("click", addOne);

function addOne(n) {
    let x = parseInt(document.getElementById("antal").value);
    let result = x + 1;
    document.getElementById("antal").value = result;
    if(n > 10) {antal = 10}
    if(n < 1) {antal}
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
  }*/
    document.getElementById("plusknap").addEventListener("click", addOne);

    function addOne() {
        let x = parseInt(document.getElementById("antal").value); // Get the current value
        let maksGraense = 9; // Set a maximum limit for display "9+"
        let antalForoegelser = 1; // The number of times you want to increment (you can change this)
    
        // Loop to increment the value multiple times
        for (let i = 0; i < antalForoegelser; i++) {
            if (x < maksGraense) {
                x += 1; // Increment the value by 1 if under the limit
            } else {
                // If value exceeds or equals the max limit, stop incrementing
                break; // Exit the loop once maxLimit is reached
            }
        }
    
        // Update the input field with the incremented value or "9+" if the limit is reached
        if (x >= maksGraense) {
            document.getElementById("antal").value = "9+"; // Set to 9+ if we reach the max limit
        } else {
            document.getElementById("antal").value = x; // Otherwise, set the incremented number
        }
    }
    
    