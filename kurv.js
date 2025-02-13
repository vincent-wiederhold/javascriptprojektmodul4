
document.getElementById("plusknap").addEventListener("click", addOne);

let antalbukserhistorik = []

function addOne() {
    let x = parseInt(document.getElementById("antal").value); // får den aktuelle værdi
    let maksGraense = 9; // sætter en maks begrænsning på "9+"
    let antalForoegelser = 1; // det antal som kurven stiger med pr. click.

    // Loop
    for (let i = 0; i < antalForoegelser; i++) {
        if (x < maksGraense) {
            x += 1; // forøgelse med 1
        } else {
            // Når den når til maksgrænse, stop forøgelse
            break; // Stop loop når maksgrænsen er nået
        }
    }
    
    // Opdater inpiutfeltet sådan at der står "9+", når maksgrænsen er nået.
    if (x >= maksGraense) {
        document.getElementById("antal").value = "9+";
    } else {
        document.getElementById("antal").value = x; // Ellers vis det aktuelle nummer
    }

    antalbukserhistorik.push(x);
    console.log(antalbukserhistorik)

}

    