let detaljer = document.querySelector("#detaljer")
let bilbilde = document.querySelector("#bilbilde")
let overskrift = document.querySelector("#overskrift")
let skjema = document.querySelector("#skjema")

var url_string = window.location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");


let db = firebase.database();
let biler = db.ref("Biler/" + id)

function genererannonse(snapshot){
  console.log(snapshot.val());
  let biler = snapshot.val();
  bilbilde.innerHTML = `
  <img src="bilderIT/${biler.Bilde}" class="annonsebilde">
  `;

  overskrift.innerHTML = `
  <h2> ${biler.Merke} ${biler.Modell} </h2>
  <h3> ${biler.Pris},- </h3>
  `;
  detaljer.innerHTML = `
  <p>${biler.detaljer}</p>
  <h5>Merke</h5><p>${biler.Merke}</p>
  <h5>Modell</h5><p>${biler.Modell}</p>
  <h5>År</h5><p>${biler.År}</p>
  <h5>Km-stand</h5><p>${biler.Kmstand}</p>
  <h5>Hk</h5>
  `;
  skjema.innerHTML = `
  <form action="mailto:kontakt@HB.no" method="post" enctype="text/plain">
  <h4>Lurer du på noe? send oss en mail under!</h4>
    Navn:<br>
    <input autocomplete="off" type="text" name="Navn ">
    <br>
    <br>
    <input type="hidden" name="Bil det gjelder " value=" ${biler.Merke} ${biler.Modell}"><br>
    Kommentar:<br>
    <input autocomplete="off" type="text" name="Kommentar" size="50"><br><br>
    <div class="skjemasend">
    <button class="sortereknapper" type="submit"><span><a>Send</a></span></button>
    <button class="sortereknapper" type="reset"><span><a>Reset</a></span></button>
    </div>
  </form>
  `
}

biler.on("value",genererannonse);
