// Bloques de informacion 
const infoEcoturismo = document.getElementById("infoEcoturismo");
const infoGastronomia = document.getElementById("infoGastronomia"); 
const infoHistoria = document.getElementById("infoHistoria");
const infoGaleria = document.getElementById("infoGaleria");
const infoReligion = document.getElementById("infoReligion");
const infoComoLlegar = document.getElementById("infoComoLlegar");

// Cards de caracteristicas
const cardAreaEco = document.getElementById("cardAreaEco");
const cardAreaRel = document.getElementById("cardAreaRel");
const cardAreaHist = document.getElementById("cardAreaHist");
const cardAreaGal = document.getElementById("cardAreaGal");
const cardAreaLle = document.getElementById("cardAreaLle");
const cardAreaGas = document.getElementById("cardAreaGas");

var jsonURL = '../info_dptos.json';

function mostrarInfo(infoElement, cardAreaElement) {
    infoElement.style.display = "none";
    cardAreaElement.addEventListener("click", () => {
      infoElement.style.display = "block";
      infoElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
  
  mostrarInfo(infoEcoturismo, cardAreaEco);
  
  mostrarInfo(infoGastronomia, cardAreaGas);

  mostrarInfo(infoHistoria, cardAreaHist);

  mostrarInfo(infoGaleria, cardAreaGal);
  
  mostrarInfo(infoReligion, cardAreaRel);

  mostrarInfo(infoComoLlegar, cardAreaLle);