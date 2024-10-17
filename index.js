const tabellone = document.getElementById("tabellone");
const estraiButton = document.getElementById("estrai");
const numeriEstratti = new Set();

for (let i = 1; i <= 90; i++) {
  const cella = document.createElement("div");
  cella.classList.add("cella");
  cella.textContent = i;
  cella.id = `cella-${i}`;
  tabellone.appendChild(cella);
}

function estraiNumero() {
  let numero;
  do {
    numero = Math.floor(Math.random() * 90) + 1;
  } while (numeriEstratti.has(numero));

  numeriEstratti.add(numero);
  evidenziaCella(numero);
  alert(`Numero estratto: ${numero}`);
}

function evidenziaCella(numero) {
  const cella = document.getElementById(`cella-${numero}`);
  cella.classList.add("evidenziata");
}

estraiButton.addEventListener("click", estraiNumero);
