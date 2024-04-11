const rl = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question('Wie viel geild gibst du ihm?  \n', (geldGegeben) => {rl.close();});        //nicht fertig spiele mich erst damit rum rest des codes funktioniert



class Kassa {
    #geldlade;
    #gescannteArtikel
    constructor(geldlade, geldGegeben) {
        this.#geldlade = geldlade;
        this.#gescannteArtikel = []
        this.geldGegeben = geldGegeben;
    }
    scannen(artikel) {
        this.#gescannteArtikel.push(artikel)
    }
     get offenerBetrag() {
        let betrag = 0;
        this.#gescannteArtikel.forEach(a => betrag += a.preis)
        return betrag;
    }
    
    rückgeld(){
            return this.geldGegeben - this.offenerBetrag;
        }
    
    get Kassenstand(){
        let t = this.#geldlade + this.offenerBetrag;
        return t.toString();
    }

     get returngescannteArtikel() {
        return this.#gescannteArtikel;
    }
}



class Produkt {
    constructor(name, preis,) {
        this.preis = preis;
        this.name = name;

    }
}

const x = new Produkt('Tomate', 5);
const y = new Produkt('Brot', 2.49)
const cola = new Produkt('Cola', 1.99)
const kassa = new Kassa(100, 50)
kassa.scannen(x);
kassa.scannen(y);
kassa.scannen(y);
kassa.scannen(cola);
kassa.scannen(cola);
console.log(`Offen sind: ${kassa.offenerBetrag}`)
console.log(`Sie haben gezahlt: ${kassa.geldGegeben}, Rückgeld: ${kassa.rückgeld()}`)
console.log('Der Aktuelle Kassenstand ist: ' + kassa.Kassenstand + '€')
