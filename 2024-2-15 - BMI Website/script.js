//credits Lukas K
class Person {
    constructor(name, gender, groesseM, gewichtKG) {
        if (gender !== 'm' && gender !== 'f') {
            alert("Gib das Geschlecht Korrekt an! m...Mänlich f....Weiblich");
        }

        this.name = name;
        this.gender = gender;
        this.groesseM = groesseM;
        this.gewichtKG = gewichtKG;
    }

    groesseCM() {
        return this.groesseM * 100;
    }

    vorName() {
        return this.name.split(' ')[0];
    }

    nachName() {
        return this.name.split(' ')[1];
    }

    toString() {
        return `${this.name} (${this.groesseCM()}cm, ${this.gewichtKG}kg)`;
    }

    getBmi() {
        return this.gewichtKG / (this.groesseM ** 2);
    }

    getGewichtType() {
        const bmi = this.getBmi();

        if ((this.gender === 'f' && bmi >= 19 && bmi <= 24) ||
            (this.gender === 'm' && bmi >= 20 && bmi <= 25)) {
                return 'Normalgewichtig';
        } else if (bmi < 19) {
            return 'Untergewichtig';
        } else {
            return 'Übergewichtig';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("myForm").addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("form submitted");
        let username = document.getElementById("name").value;
        let usergender = document.getElementById("gender").value;
        let usergroesseM = document.getElementById("groesse").value;
        let usergewichtKG = document.getElementById("gewicht").value;
        var person = new Person(username, usergender, usergroesseM, usergewichtKG);
        var bmi = person.getBmi();
        var commentwert = person.getGewichtType();

        var circleContainer = document.getElementById("parent");
        console.log("circleContainer:", circleContainer);
        var mybody = document.getElementById("mybody");


        if (usergroesseM > '3') {
            alert('Es scheint das du die Größe falsch angegeben hast, gebe Sie in meter an. ZB 1.80')
        }

        if (username == 'snake' && usergender == 'snake' && usergroesseM == 'snake' && usergewichtKG == 'snake') {
            window.location.href = "snake.html";
        }

        if (circleContainer) {  
            console.log("Setting visibility to visible");
            circleContainer.style.visibility = "visible";

        }

        if (username == 'seasalt' && usergender == 'OwO' && usergroesseM == 'e621' && usergewichtKG == '69') {
            img1.style.visibility = "visible";
            console.log("shown")
        }

        if (commentwert == 'Normalgewichtig') {
            mybody.style.background = "linear-gradient(to bottom, white, rgb(0, 165, 0))"
            console.log('body backround changed')
            console.log("Normalgewicht sent");
        }
        else {
            mybody.style.background = "linear-gradient(to bottom, white, rgb(235, 28, 28))"
            console.log('body backround changed')
            console.log("Normalgewicht not sent");
        }



        document.getElementById('startingcomment').innerHTML = "Hey " + username + ", das sind deine Werte";
        document.getElementById('comment').innerHTML = "Du bist:";
        document.getElementById('introbmi').innerHTML = "Dein Bmi beträgt:"; console.log("bmiintro sent");
        document.getElementById('bmiwert').innerHTML = bmi.toFixed(2);
        document.getElementById('commentwert').innerHTML = commentwert;
    });
});

//credits Lukas K.