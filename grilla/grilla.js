const schedules = {
  lunes: [
    { hora: "06:00", programa: "Buen Día - La Previa De BMN", descripcion: "La previa de Buena Mañana Noticias." },
    { hora: "08:00", programa: "Buena Mañana", descripcion: "Un noticiero matutino que te informa antes de ir al trabajo, a la escuela, universidad o simplemente empezar tu día." },
    { hora: "10:00", programa: "Todavía Es Temprano", descripcion: "Un magazine que resume todo lo acontecido en la semana mas la actualidad, mientras termina la media mañana." },
    { hora: "12:00", programa: "NotiAlMuerzo (Mediodía)", descripcion: "El noticiero que te acompaña en el almuerzo y en la sobremesa." },
    { hora: "14:00", programa: "Hoy Noticias", descripcion: "Un noticiero que se enfoca en la actualidad y lo popular." },
    { hora: "15:00", programa: "NotiTarde", descripcion: "El noticiero de las tardes, que te mantiene informado mientras merendas, trabajas o estas haciendo ocio." }
  ],
  martes: [
    { hora: "06:00", programa: "Buen Día - La Previa De BMN", descripcion: "La previa de Buena Mañana Noticias." },
    { hora: "08:00", programa: "Buena Mañana", descripcion: "Un noticiero matutino que te informa antes de ir al trabajo, a la escuela, universidad o simplemente empezar tu día." },
    { hora: "10:00", programa: "Todavía Es Temprano", descripcion: "Un magazine que resume todo lo acontecido en la semana mas la actualidad, mientras termina la media mañana." },
    { hora: "12:00", programa: "NotiAlMuerzo (Mediodía)", descripcion: "El noticiero que te acompaña en el almuerzo y en la sobremesa." },
    { hora: "14:00", programa: "Hoy Noticias", descripcion: "Un noticiero que se enfoca en la actualidad y lo popular." },
    { hora: "15:00", programa: "NotiTarde", descripcion: "El noticiero de las tardes, que te mantiene informado mientras merendas, trabajas o estas haciendo ocio." }
  ],
  miercoles: [
    { hora: "06:00", programa: "Buen Día - La Previa De BMN", descripcion: "La previa de Buena Mañana Noticias." },
    { hora: "08:00", programa: "Buena Mañana", descripcion: "Un noticiero matutino que te informa antes de ir al trabajo, a la escuela, universidad o simplemente empezar tu día." },
    { hora: "10:00", programa: "Todavía Es Temprano", descripcion: "Un magazine que resume todo lo acontecido en la semana mas la actualidad, mientras termina la media mañana." },
    { hora: "12:00", programa: "NotiAlMuerzo (Mediodía)", descripcion: "El noticiero que te acompaña en el almuerzo y en la sobremesa." },
    { hora: "14:00", programa: "Hoy Noticias", descripcion: "Un noticiero que se enfoca en la actualidad y lo popular." },
    { hora: "15:00", programa: "NotiTarde", descripcion: "El noticiero de las tardes, que te mantiene informado mientras merendas, trabajas o estas haciendo ocio." }
  ],
  jueves: [
    { hora: "06:00", programa: "Buen Día - La Previa De BMN", descripcion: "La previa de Buena Mañana Noticias." },
    { hora: "08:00", programa: "Buena Mañana", descripcion: "Un noticiero matutino que te informa antes de ir al trabajo, a la escuela, universidad o simplemente empezar tu día." },
    { hora: "10:00", programa: "Todavía Es Temprano", descripcion: "Un magazine que resume todo lo acontecido en la semana mas la actualidad, mientras termina la media mañana." },
    { hora: "12:00", programa: "NotiAlMuerzo (Mediodía)", descripcion: "El noticiero que te acompaña en el almuerzo y en la sobremesa." },
    { hora: "14:00", programa: "Hoy Noticias", descripcion: "Un noticiero que se enfoca en la actualidad y lo popular." },
    { hora: "15:00", programa: "NotiTarde", descripcion: "El noticiero de las tardes, que te mantiene informado mientras merendas, trabajas o estas haciendo ocio." }
  ],
  viernes: [
    { hora: "06:00", programa: "Buen Día - La Previa De BMN", descripcion: "La previa de Buena Mañana Noticias." },
    { hora: "08:00", programa: "Buena Mañana", descripcion: "Un noticiero matutino que te informa antes de ir al trabajo, a la escuela, universidad o simplemente empezar tu día." },
    { hora: "10:00", programa: "Todavía Es Temprano", descripcion: "Un magazine que resume todo lo acontecido en la semana mas la actualidad, mientras termina la media mañana." },
    { hora: "12:00", programa: "NotiAlMuerzo (Mediodía)", descripcion: "El noticiero que te acompaña en el almuerzo y en la sobremesa." },
    { hora: "14:00", programa: "Hoy Noticias", descripcion: "Un noticiero que se enfoca en la actualidad y lo popular." },
    { hora: "15:00", programa: "NotiTarde", descripcion: "El noticiero de las tardes, que te mantiene informado mientras merendas, trabajas o estas haciendo ocio." }
  ],
  sabado: [
    { hora: "10:00", programa: "Sábado y Café", descripcion: "Un resumen relajado de la semana con actualidad y temas livianos para arrancar el finde." },
    { hora: "12:00", programa: "El Noticiero De Las Doce", descripcion: "El noticiero del mediodía que te pone al tanto mientras almorzás." },
    { hora: "16:30", programa: "NotiTarde (Sábado)", descripcion: "Noticias de la tarde para mantenerte al tanto entre la merienda, el descanso o lo que estés haciendo." },
    { hora: "23:30", programa: "La Previa de El Noticiero De Las 12 AM", descripcion: "Un repaso tranquilo antes de la medianoche con lo que necesitás saber." },
    { hora: "00:00", programa: "El Noticiero De Las 12 AM", descripcion: "Un noticiero que te mantiene informado antes de dormir, con el cierre del día." }
  ],
  domingo: [
    { hora: "10:00", programa: "Sábado y Café", descripcion: "Un resumen relajado de la semana con actualidad y temas livianos para arrancar el finde." },
    { hora: "12:00", programa: "El Noticiero De Las Doce", descripcion: "El noticiero del mediodía que te pone al tanto mientras almorzás." },
    { hora: "16:30", programa: "NotiTarde (Domingo)", descripcion: "Noticias de la tarde para mantenerte al tanto entre la merienda, el descanso o lo que estés haciendo." }
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
        <td class='psynop'>${item.descripcion}</td>
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
