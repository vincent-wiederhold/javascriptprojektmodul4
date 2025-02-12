/*document.getElementById("plusknap").addEventListener("click", addOne);

function addOne() {
    let x = parseInt(document.getElementById("antal").value);
    let result = x + 1;
    document.getElementById("antal").value = result;
}

/*document.getElementById("minusknap").addEventListener("click", subtractOne);

function subtractOne() {
    let x = parseInt(document.getElementById("antal").value);
    let result = x - 1;
    document.getElementById("antal").value = result;
}
document.getElementById("minusknap").addEventListener("click", subtractBuks);

function subtractBuks() {
    let x = parseInt(document.getElementById("antal").value);
    let buks = parseInt(document.getElementById("buks").value); // Get the amount to subtract
    let result = x - buks; // Subtract the value of 'buks'
    document.getElementById("antal").value = result;
}


*/
// Add event listener for the plus button
document.getElementById("plusknap").addEventListener("click", addOne);

// Add event listener for the minus button
document.getElementById("minusknap").addEventListener("click", subtractBuks);

function addOne() {
    let x = parseInt(document.getElementById("antal").value) || 0; // Default to 0 if empty
    let result = x + 1;
    document.getElementById("antal").value = result;
}

function subtractBuks() {
    let x = parseInt(document.getElementById("antal").value) || 0; // Default to 0 if empty
    let buks = parseInt(document.getElementById("buks").value) || 1; // Default to 1 if empty

    let result = x - buks;
    
    // Prevent negative values
    if (result < 0) {
        result = 0;
    }

    document.getElementById("antal").value = result;
}
