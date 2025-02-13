
    document.getElementById("tilfoejtilkurv").addEventListener("click", addOne);

    function addOne() {
        let x = parseInt(document.getElementById("kurvtal").value);
        let maxvaerdi = 9;
        let antalTilforoejelser = 1; 

        for (let i = 0; i < antalTilforoejelser; i++) {
            if (x < maxvaerdi) {
                x += 1;
            } else {
                break;
            }
        }
        if (x >= maxvaerdi) {
            document.getElementById("kurvtal").value = "9+";
        } else {
            document.getElementById("kurvtal").value = x;
        }
    }
    
    


   

