import "./styles.css";

let taulukko = document.getElementById("board");

let ruudut = new Array(5);
for (let i = 0; i < 5; i++) {
  ruudut[i] = new Array(5);
}
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    ruudut[i][j] = 0;
  }
}

document.getElementById("demo").innerHTML = "Pelaajan 1 vuoro!";

let vuoro = 1; //1 kun pelaaja 1 ja 2 kun pelaaja 2
let count = 0; //laskee monta klikkausta tehty

var si = "";
var sj = "";
var id = "";
for (let j = 0; j < 5; j++) {
  let rivi = taulukko.insertRow();
  for (let i = 0; i < 5; i++) {
    si = i.toString();
    sj = j.toString();
    id = si + sj;
    //id = sj + si;
    let solu = rivi.insertCell(i);
    solu.id = id;
    solu.addEventListener("click", function () {
      let tulos;
      let elementti = solu;
      if (ruudut[i][j] == 0) {
        if (vuoro == 1) {
          ruudut[i][j] = 1;
          elementti.innerHTML = "X";
          tulos = Funktio(ruudut);
          if (tulos == 1) {
            document.getElementById("demo").innerHTML = "Player 1 won!";
            alert("Player 1 won!");
            return;
          }
        }
        if (vuoro == 2) {
          ruudut[i][j] = 2;
          elementti.innerHTML = "O";
          tulos = Funktio(ruudut);
          if (tulos == 1) {
            document.getElementById("demo").innerHTML = "Player 2 won!";
            alert("Player 2 won!");
            return;
          }
        }
        count = count + 1;
        if (count == 25) {
          document.getElementById("demo").innerHTML = "Tasapeli!";
          return;
        }
        if (vuoro == 1) {
          vuoro = 2;
          document.getElementById("demo").innerHTML = "Pelaajan 2 vuoro!";
        } else if (vuoro == 2) {
          vuoro = 1;
          document.getElementById("demo").innerHTML = "Pelaajan 1 vuoro!";
        }
        return;
      }
      return;
    });
  }
}

function Funktio(ruudut) {
  var found = false;

  //tarkistetaan vaakarivit ja pystyrivit
  for (let i = 0; i < 5; i++) {
    //

    //ensin tarkistetaan vaakarivit
    if (
      ruudut[i][0] == 1 &&
      ruudut[i][1] == 1 &&
      ruudut[i][2] == 1 &&
      ruudut[i][3] == 1 &&
      ruudut[i][4] == 1
    ) {
      found = true;
    }
    if (
      ruudut[i][0] == 2 &&
      ruudut[i][1] == 2 &&
      ruudut[i][2] == 2 &&
      ruudut[i][3] == 2 &&
      ruudut[i][4] == 2
    ) {
      found = true;
    }

    //sitten tarkistetaan pystyrivit
    if (
      ruudut[0][i] == 1 &&
      ruudut[1][i] == 1 &&
      ruudut[2][i] == 1 &&
      ruudut[3][i] == 1 &&
      ruudut[4][i] == 1
    ) {
      found = true;
    }
    if (
      ruudut[0][i] == 2 &&
      ruudut[1][i] == 2 &&
      ruudut[2][i] == 2 &&
      ruudut[3][i] == 2 &&
      ruudut[4][i] == 2
    ) {
      found = true;
    }
  } // for loppuu

  //tarkistetaan vinot pystyrivit
  if (
    ruudut[0][0] == 1 &&
    ruudut[1][1] == 1 &&
    ruudut[2][2] == 1 &&
    ruudut[3][3] == 1 &&
    ruudut[4][4] == 1
  ) {
    found = true;
  }
  if (
    ruudut[0][0] == 2 &&
    ruudut[1][1] == 2 &&
    ruudut[2][2] == 2 &&
    ruudut[3][3] == 2 &&
    ruudut[4][4] == 2
  ) {
    found = true;
  }
  if (
    ruudut[0][4] == 1 &&
    ruudut[1][3] == 1 &&
    ruudut[2][2] == 1 &&
    ruudut[3][1] == 1 &&
    ruudut[4][0] == 1
  ) {
    found = true;
  }
  if (
    ruudut[0][4] == 2 &&
    ruudut[1][3] == 2 &&
    ruudut[2][2] == 2 &&
    ruudut[3][1] == 2 &&
    ruudut[4][0] == 2
  ) {
    found = true;
  }

  //funktion palautus
  if (found == true) return 1;
  else return 0;
}
