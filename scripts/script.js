document.addEventListener("DOMContentLoaded", function () {
    const monthYearElement = document.getElementById("monthYear");
    const daysContainer = document.getElementById("daysContainer");
    const eventCard = document.getElementById("eventCard");
    const eventDateElement = document.getElementById("eventDate");
    const eventListElement = document.getElementById("eventList");
    const daysOfWeekContainer = document.getElementById("daysOfWeek");
  
  
    let currentDate = new Date();
    let selectedDate = null;
  
    async function renderCalendar() {
        const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
  
        // Agregar los nombres de los días de la semana
        daysOfWeekContainer.innerHTML = "";
  
        for (let i = 0; i < 7; i++) {
            const dayOfWeekElement = document.createElement("div");
            dayOfWeekElement.classList.add("day-of-week");
            dayOfWeekElement.textContent = daysOfWeek[i];
            daysOfWeekContainer.appendChild(dayOfWeekElement);
        }
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        const daysInMonth = lastDayOfMonth.getDate();
        const startDayIndex = firstDayOfMonth.getDay();
        eventCard.style.display = "none";
        
        const capitalizedMonth = currentDate.toLocaleString('default', { month: 'long' }).charAt(0).toUpperCase() + currentDate.toLocaleString('default', { month: 'long' }).slice(1);
        monthYearElement.textContent = `${capitalizedMonth} ${currentDate.getFullYear()}`;
  
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
            dayElement.addEventListener("click", () => handleDayClick(day));
            daysContainer.appendChild(dayElement);
        }
    }
  
    async function showEventCard(day) {
        selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        
        const capitalizedMonth = selectedDate.toLocaleString('default', { month: 'long' }).charAt(0).toUpperCase() + selectedDate.toLocaleString('default', { month: 'long' }).slice(1);
        eventDateElement.textContent = `${capitalizedMonth} ${day}, ${currentDate.getFullYear()}`;
        eventDateElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  
        try {
            const response = await fetch("eventos.json");
            const data = await response.json();
  
            const eventsForDate = data.eventos.filter(event => {
                const eventDate = new Date(event.Fecha);
                return eventDate.toDateString() === selectedDate.toDateString();
            });
  
            eventListElement.innerHTML = "";
  
            eventsForDate.forEach(event => {
                const eventItem = document.createElement("div");
                eventItem.classList.add("event-item");
                eventItem.innerHTML = `
                <h3>${event.Título}</h3>
                <p>${event.Descripción}</p>
                <p>${event.Hora}</p>
                <div class="map-container">
                <iframe src="${event['Link de mapa']}" width="400" height="300" frameborder="0" style="border: 1px solid #57364E; border-radius: 10px;" allowfullscreen></iframe>
                </div>
            `;
  
                eventListElement.appendChild(eventItem);
            });
  
           eventCard.style.display = "block";
        } catch (error) {
            console.error('Error al obtener eventos:', error);
        }
    }
  
    function handleDayClick(day) {
        showEventCard(day);
    }
  
    // document.getElementById("btnClose").addEventListener("click", () => eventCard.style.display = "none");
  
    document.getElementById("prevBtn").addEventListener("click", () => {
        currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        renderCalendar();
    });
  
    document.getElementById("nextBtn").addEventListener("click", () => {
        currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
        renderCalendar();
    });
  
    renderCalendar();
  });

/* Footer */
const currentYear = new Date().getFullYear();
const footer = document.getElementById("current-year").textContent = currentYear;
