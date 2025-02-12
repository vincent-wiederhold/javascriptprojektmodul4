document.getElementById("stoerrelser").style.display = "none";

let valgteStoerrelse = document.getElementById("valgte-stoerrelse").innerHTML = "VÆLG STØRRELSE";

const alleStoerrelser = ["S", "M", "L", "XL"];
let alle = "";

/*Loopet henter størrelserne i et array ovenover og udskriver dem sammen med p tag og class i html'en*/
for (let i = 0; i < alleStoerrelser.length; i++) {
    alle += '<p class="stoerrelseItem">' + alleStoerrelser[i] + '</p>';
}
document.getElementById("stoerrelser").innerHTML = alle;


/*Når man klikker på knappen, så vil den åbne, og hvis den er åben i forvejen, så lukker den*/
function chooseSize () {
    if (document.getElementById("stoerrelser").style.display == "none") {
        document.getElementById("stoerrelser").style.display = "block";
    }
    
    else if (document.getElementById("stoerrelser").style.display == "block") {
        document.getElementById("stoerrelser").style.display = "none";
    }
}


document.getElementsByClassName('stoerrelseItem').onclick = function() {udskrivStoerrelse()};

function udskrivStoerrelse() {
    valgteStoerrelse = document.getElementsByClassName('stoerrelseItem').innerHTML;
    alert("hejej");

}


/*
function chooseSize () {
    document.getElementById("stoerrelser").classList.toggle('show');
}*/

/*const hidden = document.getElementById('stoerrelser');
const knap = document.getElementsByClassName('stoerrelseknap');*/



/*Når man klikker uden for dropdown-boksen, så vil den lukke sig sammen*/
window.addEventListener('click', function(e) {
    if (!document.getElementById('stoerrelser').contains(e.target) && (!document.getElementById('stoerrelsedropdown').contains(e.target))) {
        /*alert("hej");*/
        document.getElementById('stoerrelser').style.display = "none";
        /*document.getElementById('stoerrelser').classList.toggle('hide');*/
    }
})
