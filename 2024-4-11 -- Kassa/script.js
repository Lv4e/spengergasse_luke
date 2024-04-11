class Kassa {
    #geldlade;
    #gescannteArtikel
    constructor(geldlade) {
        this.#geldlade = geldlade;
        this.#gescannteArtikel = []
    }
    scannen(artikel) {
        this.#gescannteArtikel.push(artikel)
    }
    get offenerBetrag() {
        let betrag = 0;
        this.#gescannteArtikel.forEach(a => betrag += a.preis)
        return betrag;
    }

}


class Produkt {
    constructor(name, preis) {
        this.preis = preis;
        this.name = name;

    }
}

const x = new Produkt('Tomate', 5);
const y = new Produkt('Brot', 2.49)
const kassa = new Kassa()
kassa.scannen(x);
kassa.scannen(y);
kassa.scannen(y);
console.log(`Offen sind: ${kassa.offenerBetrag}`)
// console.log(x.scannen);