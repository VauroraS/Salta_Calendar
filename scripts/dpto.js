// Bloques de informacion 
const infoEcoturismo = document.getElementById("infoEcoturismo");
const infoGastronomia = document.getElementById("infoGastronomia"); 

// Cards de caracteristicas
const cardAreaEco = document.getElementById("cardAreaEco");
const cardAreaRel = document.getElementById("cardAreaRel");
const cardAreaHist = document.getElementById("cardAreaHist");
const cardAreaGal = document.getElementById("cardAreaGal");
const cardAreaLle = document.getElementById("cardAreaLle");
const cardAreaGas = document.getElementById("cardAreaGas");



function mostrarInfo(infoElement, cardAreaElement) {
    infoElement.style.display = "none";
    cardAreaElement.addEventListener("click", () => {
      infoElement.style.display = "block";
      infoElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
  
  mostrarInfo(infoEcoturismo, cardAreaEco);
  
  mostrarInfo(infoGastronomia, cardAreaGas);
  
  //Falta hacer un json por informacion, no por dpto
  // Cada dpto tendria un id
  