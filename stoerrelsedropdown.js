document.getElementById("stoerrelser").style.display = "none";

const alleStoerrelser = ["S", "M", "L", "XL"];
let alle = "";

/*Loopet henter størrelserne i et array ovenover og udskriver dem sammen med p tag og onclick funktion i html'en*/
for (let i = 0; i < alleStoerrelser.length; i++) {
    alle += '<p onclick="udskrivStoerrelse(this)">' + alleStoerrelser[i] + '</p>';
}
document.getElementById("stoerrelser").innerHTML = alle;


/*Når man klikker på knappen, så vil den åbne, hvis den er lukket, ellers hvis den er åben, så lukker den*/
function chooseSize () {
    let s = document.getElementById("stoerrelser");
    if (s.style.display == "none") {
        s.style.display = "block";
    }
    
    else {
        s.style.display = "none"
    }
}

/*Når man klikker uden for dropdown-boksen, så vil den lukke sig sammen*/
window.addEventListener('click', function(klik) {
    if (!document.getElementById('stoerrelser').contains(klik.target) && (!document.getElementById('stoerrelsedropdown').contains(klik.target))) {
        document.getElementById('stoerrelser').style.display = "none";
    }
})

/*Når der bliver klikket på et element i dropdown'en, så henter den værdien og displayer det og lukker dropdown'en bagefter*/
function udskrivStoerrelse(element) {
    let valgt = element.innerHTML;
    document.getElementById('valgte-stoerrelse').innerHTML = valgt;
    document.getElementById('stoerrelser').style.display = "none";
}


