document.getElementById("plusknap").addEventListener("click", addOne);

function addOne() {
    let x = parseInt(document.getElementById("antal").value);
    let result = x + 1;
    document.getElementById("antal").value = result;
}

document.getElementById("minusknap").addEventListener("click", subtractOne);

function subtractOne() {
    let x = parseInt(document.getElementById("antal").value);
    let result = x - 1;
    document.getElementById("antal").value = result;
}