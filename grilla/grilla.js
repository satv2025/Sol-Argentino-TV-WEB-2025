// Datos de la programación por días y fechas especiales
const schedules = {
    lunes: [
      { hora: "08:00", programa: "Buen Día - La Previa De BMN", descripcion: "" },
      { hora: "10:00", programa: "Buena Mañana", descripcion: "" },
      { hora: "12:10", programa: "HoyNoticias (Mediodía)", descripcion: "" },
      { hora: "13:30", programa: "Los Argentinos Deciden (LAD)", descripcion: "" },
      { hora: "15:15", programa: "Pasapalabra (Versión Sol Argentino TV)", descripcion: "" },
      { hora: "16:30", programa: "Qatar Interviews", descripcion: "" },
      { hora: "18:15", programa: "Notitarde", descripcion: "" },
      { hora: "18:45", programa: "Historias Del Pasado", descripcion: "" },
      { hora: "20:00", programa: "SATVNOTICIAS", descripcion: "" },
      { hora: "21:00", programa: "Reality De Bronce", descripcion: "" },
      { hora: "22:00", programa: "Gran Hermanastro", descripcion: "" },
      { hora: "01:00", programa: "Llamá y Cortá", descripcion: "" }
    ],
    martes: [
      { hora: "08:00", programa: "Buen Día - La Previa De BMN", descripcion: "" },
      { hora: "10:00", programa: "Buena Mañana", descripcion: "" },
      { hora: "12:10", programa: "HoyNoticias (Mediodía)", descripcion: "" },
      { hora: "13:30", programa: "Los Argentinos Deciden (LAD)", descripcion: "" },
      { hora: "15:15", programa: "Pasapalabra (Versión Sol Argentino TV)", descripcion: "" },
      { hora: "16:30", programa: "Qatar Interviews", descripcion: "" },
      { hora: "18:15", programa: "Notitarde", descripcion: "" },
      { hora: "18:45", programa: "Historias Del Pasado", descripcion: "" },
      { hora: "20:00", programa: "SATVNOTICIAS", descripcion: "" },
      { hora: "21:00", programa: "Reality De Bronce", descripcion: "" },
      { hora: "22:00", programa: "Gran Hermanastro", descripcion: "" },
      { hora: "01:00", programa: "Llamá y Cortá", descripcion: "" }
    ],
    miercoles: [
      { hora: "08:00", programa: "Buen Día - La Previa De BMN", descripcion: "" },
      { hora: "10:00", programa: "Buena Mañana", descripcion: "" },
      { hora: "12:10", programa: "HoyNoticias (Mediodía)", descripcion: "" },
      { hora: "13:30", programa: "Los Argentinos Deciden (LAD)", descripcion: "" },
      { hora: "15:15", programa: "Pasapalabra (Versión Sol Argentino TV)", descripcion: "" },
      { hora: "16:30", programa: "Qatar Interviews", descripcion: "" },
      { hora: "18:15", programa: "Notitarde", descripcion: "" },
      { hora: "18:45", programa: "Historias Del Pasado", descripcion: "" },
      { hora: "20:00", programa: "SATVNOTICIAS", descripcion: "" },
      { hora: "21:00", programa: "Reality De Bronce", descripcion: "" },
      { hora: "22:00", programa: "Gran Hermanastro", descripcion: "" },
      { hora: "01:00", programa: "Llamá y Cortá", descripcion: "" }
    ],
    jueves: [
      { hora: "08:00", programa: "Buen Día - La Previa De BMN", descripcion: "" },
      { hora: "10:00", programa: "Buena Mañana", descripcion: "" },
      { hora: "12:10", programa: "HoyNoticias (Mediodía)", descripcion: "" },
      { hora: "13:30", programa: "Los Argentinos Deciden (LAD)", descripcion: "" },
      { hora: "15:15", programa: "Pasapalabra (Versión Sol Argentino TV)", descripcion: "" },
      { hora: "16:30", programa: "Qatar Interviews", descripcion: "" },
      { hora: "18:15", programa: "Notitarde", descripcion: "" },
      { hora: "18:45", programa: "Historias Del Pasado", descripcion: "" },
      { hora: "20:00", programa: "SATVNOTICIAS", descripcion: "" },
      { hora: "21:00", programa: "Gala de nominación de Reality De Bronce", descripcion: "" },
      { hora: "22:00", programa: "Gala de nominación de Gran Hermanastro", descripcion: "" },
      { hora: "01:00", programa: "Llamá y Cortá", descripcion: "" }
    ],
    viernes: [
      { hora: "08:00", programa: "Buen Día - La Previa De BMN", descripcion: "" },
      { hora: "10:00", programa: "Buena Mañana", descripcion: "" },
      { hora: "12:10", programa: "HoyNoticias (Mediodía)", descripcion: "" },
      { hora: "13:30", programa: "Los Argentinos Deciden (LAD)", descripcion: "" },
      { hora: "15:15", programa: "Pasapalabra (Versión Sol Argentino TV)", descripcion: "" },
      { hora: "16:30", programa: "Qatar Interviews", descripcion: "" },
      { hora: "18:15", programa: "Notitarde", descripcion: "" },
      { hora: "18:45", programa: "Historias Del Pasado", descripcion: "" },
      { hora: "20:00", programa: "SATVNOTICIAS", descripcion: "" },
      { hora: "21:00", programa: "Reality De Bronce", descripcion: "" },
      { hora: "22:00", programa: "Gran Hermanastro", descripcion: "" },
      { hora: "23:00", programa: "NoFerpaNoParty", descripcion: "" },
      { hora: "03:00", programa: "Llamá y Cortá", descripcion: "" }
    ],
    sabado: [
      { hora: "07:00", programa: "Batime El Café", descripcion: "" },
      { hora: "09:00", programa: "Matías Ponce - La Película", descripcion: "" },
      { hora: "10:00", programa: "Reite666", descripcion: "" },
      { hora: "12:00", programa: "Reite666", descripcion: "" },
      { hora: "15:45", programa: "Batime El Café", descripcion: "" },
      { hora: "18:00", programa: "Payasos De La Deep Web", descripcion: "" },
      { hora: "20:00", programa: "Reite666", descripcion: "" },
      { hora: "23:00", programa: "NoFerpaNoParty", descripcion: "" },
      { hora: "03:00", programa: "Llamá y Cortá", descripcion: "" }
    ],
    domingo: [
      { hora: "07:00", programa: "Batime El Café", descripcion: "" },
      { hora: "10:00", programa: "100%Lucha", descripcion: "" },
      { hora: "12:00", programa: "Reite666", descripcion: "" },
      { hora: "15:35", programa: "Batime El Café", descripcion: "" },
      { hora: "18:00", programa: "Payasos De La Deep Web", descripcion: "" },
      { hora: "20:00", programa: "Reite666", descripcion: "" },
      { hora: "21:00", programa: "Gala de eliminación de Reality De Bronce", descripcion: "" },
      { hora: "22:00", programa: "Gala de eliminación de Gran Hermanastro", descripcion: "" },
      { hora: "01:00", programa: "Llamá y Cortá", descripcion: "" }
    ],
    "24/12": [
      { hora: "06:00", programa: "Mi Pobre Angelito", descripcion: "Navidad" },
      { hora: "20:00", programa: "Cuenta Regresiva a Navidad", descripcion: "Especial Navidad" }
    ],
    "25/12": [
      { hora: "06:00", programa: "Mi Pobre Angelito", descripcion: "Navidad" }
    ],
    "30/12": [
      { hora: "00:00", programa: "Caso Cromañón", descripcion: "Homenaje a Los Pibes De Cromañón" }
    ],
    "31/12": [
      { hora: "20:00", programa: "Cuenta Regresiva a Año Nuevo", descripcion: "Especial Año Nuevo" }
    ]
  };
  
  // Función para mostrar la programación
  function showSchedule(day) {
    const schedule = schedules[day];
    const scheduleContent = document.getElementById('schedule-content');
    
    // Limpiar el contenido anterior
    scheduleContent.innerHTML = '';
  
    schedule.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.hora}</td>
        <td>${item.programa}</td>
        <td>${item.descripcion}</td>
      `;
      scheduleContent.appendChild(row);
    });
  }
  
  // Función para manejar la selección del día
  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function (event) {
      const selectedDay = event.target.getAttribute('data-day');
      document.getElementById('dropdown-btn').textContent = event.target.textContent;
      showSchedule(selectedDay);  // Mostrar la programación del día seleccionado
    });
  });
  
  // Mostrar la programación del lunes por defecto al cargar la página
  window.onload = () => showSchedule('lunes');  

  // Obtiene el elemento del dropdown y los elementos necesarios
const dropdown = document.querySelector('.dropdown');
const dropdownContent = dropdown.querySelector('.dropdown-content');

// Agrega eventos para abrir y cerrar el menú cuando el mouse entra y sale
dropdown.addEventListener('mouseenter', () => {
  dropdownContent.style.display = 'block';  // Mostrar el menú
});

dropdown.addEventListener('mouseleave', () => {
  dropdownContent.style.display = 'none';  // Ocultar el menú
});
