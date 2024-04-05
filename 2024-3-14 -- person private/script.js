const faker = require('faker');
class Person {
    #name;
    #gender;
    #groesseM;
    #gewichtKG;

    constructor(name, gender, groesseM, gewichtKG) {
        if (gender !== 'm' && gender !== 'f') {
            throw new Error('wrong gender');
        }
        this.#name = name;
        this.#gender = gender;
        this.#groesseM = groesseM;
        this.#gewichtKG = gewichtKG;
    }

    get name() {
        return this.#name;
    }

    get gender() {
        return this.#gender;
    }

    get groesseM() {
        return this.#groesseM;
    }

    get gewichtKG() {
        return this.#gewichtKG;
    }

    groesseCM() {
        return this.#groesseM * 100;
    }

    vorName() {
        return this.#name.split(' ')[0];
    }

    nachName() {
        return this.#name.split(' ')[1];
    }

    toString() {
        return `${this.#name} (${this.#groesseM * 100}cm, ${this.#gewichtKG}kg)`;
    }

    get bmi() {
        return this.#gewichtKG / this.#groesseM / this.#groesseM;
    }

    get gewichtType() {
        if (this.#gender == 'f') {
            if (this.bmi < 19) return 'Untergewicht';
            if (this.bmi > 24) return 'Übergewicht';
            return 'Normalgewicht';
        } else {
            if (this.bmi < 20) return 'Untergewicht';
            if (this.bmi > 25) return 'Übergewicht';
            return 'Normalgewicht';
        }
    }
}

// Demo-Personen

    function Personname(l) {
        if (l === "m") {
            return faker.name.firstName('male') + ' ' + faker.name.lastName();
        }
        else {
            return faker.name.firstName('female') + ' ' + faker.name.lastName(); // es war nicht so wie Sie in der Angabe geschrieben haben mit faker.person sondern mit faker.name (;
         
    }}

    const person1 = new Person(Personname("m"), 'm',  1.8, 80);
    const person2 = new Person(Personname("f"), 'f', 1.7, 60);
    const person3 = new Person(Personname("m"), 'm', 1.9, 90);



console.log(person1.name);
console.log(person2.groesseM);
console.log(person3.bmi);
console.log(person1.toString());