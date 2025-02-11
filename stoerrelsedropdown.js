function chooseSize () {
    document.getElementById("stoerrelser").style.display = "block";
}
/*
function chooseSize () {
    document.getElementById("stoerrelser").classList.toggle('show');
}*/

/*const hidden = document.getElementById('stoerrelser');
const knap = document.getElementsByClassName('stoerrelseknap');*/

window.addEventListener('click', function(e) {
    if (!document.getElementById('stoerrelser').contains(e.target) && (!document.getElementById('stoerrelsedropdown').contains(e.target))) {
        /*alert("hej");*/
        document.getElementById('stoerrelser').style.display = "none";
        /*document.getElementById('stoerrelser').classList.toggle('hide');*/
    }
})
