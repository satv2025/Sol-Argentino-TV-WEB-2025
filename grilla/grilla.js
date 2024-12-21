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
    "24diciembre": [
      { hora: "06:00", programa: "Mi Pobre Angelito", descripcion: "Navidad" },
      { hora: "20:00", programa: "Cuenta Regresiva a Navidad", descripcion: "Especial Navidad" }
    ],
    "25diciembre": [
      { hora: "06:00", programa: "Mi Pobre Angelito", descripcion: "Navidad" }
    ],
    "30diciembre": [
      { hora: "00:00", programa: "Caso Cromañón", descripcion: "Homenaje a Los Pibes De Cromañón" }
    ],
    "31diciembre": [
      { hora: "20:00", programa: "Cuenta Regresiva a Año Nuevo", descripcion: "Especial Año Nuevo" }
    ]
  };
  
  // Función para mostrar la programación
  function showSchedule() {
    const selectedDay = document.getElementById('day-select').value;
    const schedule = schedules[selectedDay];
    const scheduleContent = document.getElementById('schedule-content');
  
    // Limpiar el contenido anterior
    scheduleContent.innerHTML = '';
  
    // Crear y agregar las filas de la tabla según la programación del día
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
  
  // Mostrar la programación del lunes por defecto al cargar la página
  window.onload = showSchedule;

// Función para obtener la hora actual en formato HH:mm (24 horas)
function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');  // Asegura que tenga dos dígitos
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Asegura que tenga dos dígitos
    return `${hours}:${minutes}`;
  }
  
  // Función para mostrar la programación con la opción "EN VIVO"
  function showSchedule() {
    const selectedDay = document.getElementById('day-select').value;
    const schedule = schedules[selectedDay];
    const scheduleContent = document.getElementById('schedule-content');
    
    // Limpiar el contenido anterior
    scheduleContent.innerHTML = '';
  
    // Obtener la hora actual
    const currentTime = getCurrentTime();
    
    // Crear y agregar las filas de la tabla según la programación del día
    schedule.forEach(item => {
      const row = document.createElement('tr');
      
      // Verificar si el horario actual coincide con el de la programación
      let isLive = false;
      if (item.hora.startsWith(currentTime)) {
        isLive = true;
      }
      
      row.innerHTML = `
        <td${isLive ? ' style="background-color: #007bff; color: white;"' : ''}>
          ${isLive ? 'EN VIVO' : item.hora}
        </td>
        <td>${item.programa}</td>
        <td>${item.descripcion}</td>
      `;
      
      scheduleContent.appendChild(row);
    });
  }
  
  // Mostrar la programación del lunes por defecto al cargar la página
  window.onload = showSchedule;
  