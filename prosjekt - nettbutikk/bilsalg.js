let detaljer = document.querySelector("#detaljer")
let bilbilde = document.querySelector("#bilbilde")

var url_string = window.location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");
console.log(id);

let db = firebase.database();
let bilannonse = db.ref("Biler" + id)

function genererHTML(snapshot){
  let biler = snapshot.val()
  bilbilde.innerHTML = `
  <img src="${biler.Bilde}" alt="">
  `;
  // her lages koden til sykdom-taggen. i html fila. Må stemme overens med referansen øverst i koden
  detaljer.innerHTML = `
  <p>Vi har følgende informasjon: ${biler.detaljer}</p>
  `;
}
