const monthYearElement = document.getElementById("monthYear");
const daysContainer = document.getElementById("daysContainer");
const eventCard = document.getElementById("eventCard");
const eventDateElement = document.getElementById("eventDate");
const eventListElement = document.getElementById("eventList");

const eventTitleElement = document.getElementById("eventTitle");
const eventDescriptionElement = document.getElementById("eventDescription");

let currentDate = new Date();
let selectedDate = null;

function renderCalendar() {
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const startDayIndex = firstDayOfMonth.getDay();
    eventCard.style.display="none";
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
    //selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    let opcion = document.createElement("div");
    eventCard.style.display = "flex";
    opcion.innerHTML(eventCard);
    document.appendChild(opcion);
    let btnCard = document.getElementById("btnCard");
    btnCard.addEventListener("click", () => showEvent(opcion));
}

function showEvent (opcion){
    let evento = document.createElement("div");
    
    
    
}

/*function showEventDetails(eventTitle, eventDescription) {
    eventTitleElement.textContent = eventTitle;
    eventDescriptionElement.textContent = eventDescription;

    eventDetails.style.display = "block";
    eventCard.style.display = "none";
}*/

document.getElementById("prevBtn").addEventListener("click", () => {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    renderCalendar();
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    renderCalendar();
});


/*eventCard.querySelector("#closeBtn").addEventListener("click", () => {
    eventCard.style.display = "none";
});

eventDetails.querySelector("#backBtn").addEventListener("click", () => {
    eventDetails.style.display = "none";
});*/

renderCalendar();

/* Footer */
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

