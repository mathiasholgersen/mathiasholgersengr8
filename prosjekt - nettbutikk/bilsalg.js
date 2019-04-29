let detaljer = document.querySelector("#detaljer")
let bilbilde = document.querySelector("#bilbilde")

var url_string = window.location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");
console.log(id);

let db = firebase.database();
let biler = db.ref("Biler" + id)

function genererHTML(snapshot){
  let biler = snapshot.val(); //fikk opp feilmelding her uansett hva jeg  gjorde så jeg begynte å endre på litt av hvert for å eksperimentere meg fram og nå er jeg lost D: //
  bilbilde.innerHTML = `
  <img src="${biler.Bilde}" alt="">
  `;

  detaljer.innerHTML = `
  <p>Vi har følgende informasjon: ${biler.detaljer}</p>
  `;
}

biler.on("value",genererHTML);
