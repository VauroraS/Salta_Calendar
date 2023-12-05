/* Elementos del calendario */
const monthYearElement = document.getElementById("monthYear");
const daysContainer = document.getElementById("daysContainer");
const eventCard = document.getElementById("eventCard");
const eventDateElement = document.getElementById("eventDate");
const eventListElement = document.getElementById("eventList");
const eventTitleElement = document.getElementById("eventTitle");
const eventDescriptionElement = document.getElementById("eventDescription");

/*Elementos de Departamento*/
const cardAreaGas = document.getElementById("cardAreaGas");
const infoGastronomia = document.getElementById("infoGastronomia");
infoGastronomia.style.display = "none";

/* Funciones del calendario */
let currentDate = new Date();
let selectedDate = null;

function renderCalendar() {
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const startDayIndex = firstDayOfMonth.getDay();
    eventCard.style.display = "none";
    monthYearElement.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;

    daysContainer.innerHTML = "";

    for (let i = 0; i < startDayIndex; i++) {
        const emptyDay = document.createElement("div");
        emptyDay.classList.add("day");
        daysContainer.appendChild(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.textContent = day;
        dayElement.addEventListener("click", () => showEventCard(day));
        daysContainer.appendChild(dayElement);
    }
}

function showEventCard(day) {
    let event = document.createElement("div");
    eventCard.style.display = "flex";
    event.innerHTML = eventCard;
    document.appendChild(event);  
    document.getElementById("btnClose").addEventListener("click", () => event.style.display="none");
}

document.getElementById("prevBtn").addEventListener("click", () => {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    renderCalendar();
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    renderCalendar();
});

renderCalendar();
renderInfo();

/* Footer */
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

/* Funciones de Departamento */

function showInfo(){
    let info = document.createElement("div");
    infoGastronomia.style.display = "flex";
    info.innerHTML = "infoGastronomia";
    document.appendChild(info);
}

function renderInfo(){
    cardAreaGas.addEventListener("click", () => showInfo());
}


