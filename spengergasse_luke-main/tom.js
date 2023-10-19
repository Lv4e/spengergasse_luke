const butt = document.querySelector("#wie");
butt.addEventListener("click", f);

function f() {
  let k = Math.floor(Math.random() * 2); //javascript Gruppenarbeit credit an Nicolas Daniel der Herr Prof Graf und Ich

  if (k == 1) {
    d = "Tom hat blaue Augen";
  } else {
    d = "Tom hat keine blauen Augen";
  }

  if (d == "Tom hat blaue Augen") {
    let f = " und blonde Haare";
    alert(d + f);
  } else {
    alert(d + " und hat keine blonden Haare");
  }
}
