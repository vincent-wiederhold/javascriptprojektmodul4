
document.getElementById("plusknap").addEventListener("click", addOne);

function addOne() {
    let x = parseInt(document.getElementById("antal").value); // får den aktuelle værdi
    let maksGraense = 9; // sætter en maks begrænsning på "9+"
    let antalForoegelser = 1; // det antal som kurven stiger med pr. click.

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

    