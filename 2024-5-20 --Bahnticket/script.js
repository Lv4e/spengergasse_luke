document.addEventListener("DOMContentLoaded", function() {
    const ortsliste = {
        Wien: 20,
        SalzB: 10,
        Türkei: 50,
        Stlel: 30,
    };
    let kontostand = 0;
    let geldstandhtml = document.getElementById("geldStand");
    const geldGebenButton = document.getElementById("geldGeben");
    const geldInput = document.getElementById("geldIN");
    let selected = document.querySelector(`#wohin`);
    const personen = document.getElementById("personen");
    const preisoutput = document.getElementById("preis");
    let preisAllein = ortsliste[selected.value];
    const buttonKaufen = document.getElementById("kaufen");
    

    function calculatePreis() {
        preisoutput.textContent = preisAllein * Number(personen.value);
        return preisAllein * Number(personen.value);
        
    
    }
    

    class Automat {
        #geldNeeded
        #geldInStorage
        constructor(geldInStorage) {
            this.#geldInStorage = geldInStorage;
            this.geldNeeded = 0;
    
    
    
        }
    
        set geldNeeded(geldNeeded) {
            this.#geldNeeded = calculatePreis();
        }
        get geldNeeded() {
            return this.#geldNeeded;
        }
        get geldInStorage() {
            return this.#geldInStorage;
        }

        set setGeldInStorage(a){
         this.#geldInStorage += a;
        }
        set storageMinus(b){
            this.#geldInStorage -= b;
        }
        
    }
    
    const Automatinstance = new Automat(100);



    geldGebenButton.addEventListener("click", function() {
       
        const geldEingabe = parseFloat(geldInput.value);
        if (!isNaN(geldEingabe)) {
            Automatinstance.setGeldInStorage = geldEingabe;
            geldstandhtml.textContent = Automatinstance.geldInStorage;
          
        } else {
            alert("Bitte geben Sie eine gültige Zahl ein.");
        }
        geldInput.value = '';
    });
    
selected.addEventListener("change", () => {
    preisAllein = ortsliste[selected.value];
    if (personen.value) {
        calculatePreis();
    }
});

personen.addEventListener("input", function() {
    calculatePreis();
    
});


buttonKaufen.addEventListener("click", kaufen)

function kaufen() {
    const preis = calculatePreis();
    if (Automatinstance.geldInStorage < 1 || Automatinstance.geldInStorage < preis) {
        alert("Sie haben nicht genug Geld.");
    } else {
        Automatinstance.storageMinus = preis;
        geldstandhtml.textContent = Automatinstance.geldInStorage;
    }
}
});
