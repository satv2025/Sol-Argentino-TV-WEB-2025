const schedules = {
  lunes: [
    { hora: "06:00", programa: "Buen Día - La Previa De BMN", descripcion: "La previa de Buena Mañana Noticias." },
    { hora: "08:00", programa: "Buena Mañana", descripcion: "Un noticiero matutino que te informa antes de ir al trabajo, a la escuela, universidad o simplemente empezar tu día." },
    { hora: "10:00", programa: "Todavía Es Temprano", descripcion: "Un magazine que resume todo lo acontecido en la semana mas la actualidad, mientras termina la media mañana." },
    { hora: "11:00", programa: "Mañana y Espectáculo", descripcion: "Un magazine que resume todo lo acontecido en la semana mas la actualidad y algo de chimento, mientras termina la media mañana." },
    { hora: "12:00", programa: "NotiAlMuerzo (Mediodía)", descripcion: "El noticiero que te acompaña en el almuerzo y en la sobremesa." },
    { hora: "14:00", programa: "Hoy Noticias", descripcion: "Un noticiero que se enfoca en la actualidad y lo popular." },
    { hora: "15:00", programa: "NotiTarde", descripcion: "El noticiero de las tardes, que te mantiene informado mientras merendas, trabajas o estas haciendo ocio." },
    { hora: "16:00", programa: "FTV", descripcion: "Un magazine informativo, que combina chimento con noticias, es decir, noticias con humor. Su nombre, lo dice todo. Farándula TV." },
    { hora: "18:00", programa: "NotiFlash", descripcion: "Noticiero vespertino previo al noticiero nocturno. Cubriendo noticias de la historia argentina, los casos mas impactantes. Dos años con vos." },
    { hora: "20:00", programa: "Sol Argentino TV Noticias", descripcion: "El noticiero noctuno, noticias, impacto, noche y la cena." },
    { hora: "22:00", programa: "Reite666", descripcion: "Cilio, en España, recibe un mensaje que lo obliga a volver a Argentina para un juego macabro. Un error inesperado desata sucesos perturbadores que lo regresan de forma inexplicable. ¿Vos estás preparado para vivir una terrorífica experiencia?" },
    { hora: "00:00", programa: "Fin de transmisión", descripcion: "Fin de transmisión, fuera de aire. En agosto de 2026 se estrenará Llamá y Cortá" }
  ],
  martes: [
    { hora: "06:00", programa: "Buen Día - La Previa De BMN", descripcion: "La previa de Buena Mañana Noticias." },
    { hora: "08:00", programa: "Buena Mañana", descripcion: "Un noticiero matutino que te informa antes de ir al trabajo, a la escuela, universidad o simplemente empezar tu día." },
    { hora: "10:00", programa: "Todavía Es Temprano", descripcion: "Un magazine que resume todo lo acontecido en la semana mas la actualidad, mientras termina la media mañana." },
    { hora: "11:00", programa: "Mañana y Espectáculo", descripcion: "Un magazine que resume todo lo acontecido en la semana mas la actualidad y algo de chimento, mientras termina la media mañana." },
    { hora: "12:00", programa: "NotiAlMuerzo (Mediodía)", descripcion: "El noticiero que te acompaña en el almuerzo y en la sobremesa." },
    { hora: "14:00", programa: "Hoy Noticias", descripcion: "Un noticiero que se enfoca en la actualidad y lo popular." },
    { hora: "15:00", programa: "NotiTarde", descripcion: "El noticiero de las tardes, que te mantiene informado mientras merendas, trabajas o estas haciendo ocio." },
    { hora: "16:00", programa: "FTV", descripcion: "Un magazine informativo, que combina chimento con noticias, es decir, noticias con humor. Su nombre, lo dice todo. Farándula TV." },
    { hora: "18:00", programa: "NotiFlash", descripcion: "Noticiero vespertino previo al noticiero nocturno. Cubriendo noticias de la historia argentina, los casos mas impactantes. Dos años con vos." },
    { hora: "20:00", programa: "Sol Argentino TV Noticias", descripcion: "El noticiero noctuno, noticias, impacto, noche y la cena." },
    { hora: "22:00", programa: "Reite666", descripcion: "Cilio, en España, recibe un mensaje que lo obliga a volver a Argentina para un juego macabro. Un error inesperado desata sucesos perturbadores que lo regresan de forma inexplicable. ¿Vos estás preparado para vivir una terrorífica experiencia?" },
    { hora: "00:00", programa: "Fin de transmisión", descripcion: "Fin de transmisión, fuera de aire. En agosto de 2026 se estrenará Llamá y Cortá" }
  ],
  miercoles: [
    { hora: "06:00", programa: "Buen Día - La Previa De BMN", descripcion: "La previa de Buena Mañana Noticias." },
    { hora: "08:00", programa: "Buena Mañana", descripcion: "Un noticiero matutino que te informa antes de ir al trabajo, a la escuela, universidad o simplemente empezar tu día." },
    { hora: "10:00", programa: "Todavía Es Temprano", descripcion: "Un magazine que resume todo lo acontecido en la semana mas la actualidad, mientras termina la media mañana." },
    { hora: "11:00", programa: "Mañana y Espectáculo", descripcion: "Un magazine que resume todo lo acontecido en la semana mas la actualidad y algo de chimento, mientras termina la media mañana." },
    { hora: "12:00", programa: "NotiAlMuerzo (Mediodía)", descripcion: "El noticiero que te acompaña en el almuerzo y en la sobremesa." },
    { hora: "14:00", programa: "Hoy Noticias", descripcion: "Un noticiero que se enfoca en la actualidad y lo popular." },
    { hora: "15:00", programa: "NotiTarde", descripcion: "El noticiero de las tardes, que te mantiene informado mientras merendas, trabajas o estas haciendo ocio." },
    { hora: "16:00", programa: "FTV", descripcion: "Un magazine informativo, que combina chimento con noticias, es decir, noticias con humor. Su nombre, lo dice todo. Farándula TV." },
    { hora: "18:00", programa: "NotiFlash", descripcion: "Noticiero vespertino previo al noticiero nocturno. Cubriendo noticias de la historia argentina, los casos mas impactantes. Dos años con vos." },
    { hora: "20:00", programa: "Sol Argentino TV Noticias", descripcion: "El noticiero noctuno, noticias, impacto, noche y la cena." },
    { hora: "22:00", programa: "Reite666", descripcion: "Cilio, en España, recibe un mensaje que lo obliga a volver a Argentina para un juego macabro. Un error inesperado desata sucesos perturbadores que lo regresan de forma inexplicable. ¿Vos estás preparado para vivir una terrorífica experiencia?" },
    { hora: "00:00", programa: "Fin de transmisión", descripcion: "Fin de transmisión, fuera de aire. En agosto de 2026 se estrenará Llamá y Cortá" }
  ],
  jueves: [
    { hora: "06:00", programa: "Buen Día - La Previa De BMN", descripcion: "La previa de Buena Mañana Noticias." },
    { hora: "08:00", programa: "Buena Mañana", descripcion: "Un noticiero matutino que te informa antes de ir al trabajo, a la escuela, universidad o simplemente empezar tu día." },
    { hora: "10:00", programa: "Todavía Es Temprano", descripcion: "Un magazine que resume todo lo acontecido en la semana mas la actualidad, mientras termina la media mañana." },
    { hora: "11:00", programa: "Mañana y Espectáculo", descripcion: "Un magazine que resume todo lo acontecido en la semana mas la actualidad y algo de chimento, mientras termina la media mañana." },
    { hora: "12:00", programa: "NotiAlMuerzo (Mediodía)", descripcion: "El noticiero que te acompaña en el almuerzo y en la sobremesa." },
    { hora: "14:00", programa: "Hoy Noticias", descripcion: "Un noticiero que se enfoca en la actualidad y lo popular." },
    { hora: "15:00", programa: "NotiTarde", descripcion: "El noticiero de las tardes, que te mantiene informado mientras merendas, trabajas o estas haciendo ocio." },
    { hora: "16:00", programa: "FTV", descripcion: "Un magazine informativo, que combina chimento con noticias, es decir, noticias con humor. Su nombre, lo dice todo. Farándula TV." },
    { hora: "18:00", programa: "NotiFlash", descripcion: "Noticiero vespertino previo al noticiero nocturno. Cubriendo noticias de la historia argentina, los casos mas impactantes. Dos años con vos." },
    { hora: "20:00", programa: "Sol Argentino TV Noticias", descripcion: "El noticiero noctuno, noticias, impacto, noche y la cena." },
    { hora: "22:00", programa: "Reite666", descripcion: "Cilio, en España, recibe un mensaje que lo obliga a volver a Argentina para un juego macabro. Un error inesperado desata sucesos perturbadores que lo regresan de forma inexplicable. ¿Vos estás preparado para vivir una terrorífica experiencia?" },
    { hora: "00:00", programa: "Fin de transmisión", descripcion: "Fin de transmisión, fuera de aire. En agosto de 2026 se estrenará Llamá y Cortá" }
  ],
  viernes: [
    { hora: "06:00", programa: "Buen Día - La Previa De BMN", descripcion: "La previa de Buena Mañana Noticias." },
    { hora: "08:00", programa: "Buena Mañana", descripcion: "Un noticiero matutino que te informa antes de ir al trabajo, a la escuela, universidad o simplemente empezar tu día." },
    { hora: "10:00", programa: "Todavía Es Temprano", descripcion: "Un magazine que resume todo lo acontecido en la semana mas la actualidad, mientras termina la media mañana." },
    { hora: "11:00", programa: "Mañana y Espectáculo", descripcion: "Un magazine que resume todo lo acontecido en la semana mas la actualidad y algo de chimento, mientras termina la media mañana." },
    { hora: "12:00", programa: "NotiAlMuerzo (Mediodía)", descripcion: "El noticiero que te acompaña en el almuerzo y en la sobremesa." },
    { hora: "14:00", programa: "Hoy Noticias", descripcion: "Un noticiero que se enfoca en la actualidad y lo popular." },
    { hora: "15:00", programa: "NotiTarde", descripcion: "El noticiero de las tardes, que te mantiene informado mientras merendas, trabajas o estas haciendo ocio." },
    { hora: "16:00", programa: "FTV", descripcion: "Un magazine informativo, que combina chimento con noticias, es decir, noticias con humor. Su nombre, lo dice todo. Farándula TV." },
    { hora: "18:00", programa: "NotiFlash", descripcion: "Noticiero vespertino previo al noticiero nocturno. Cubriendo noticias de la historia argentina, los casos mas impactantes. Dos años con vos." },
    { hora: "20:00", programa: "Sol Argentino TV Noticias", descripcion: "El noticiero noctuno, noticias, impacto, noche y la cena." },
    { hora: "22:00", programa: "Reite666", descripcion: "Cilio, en España, recibe un mensaje que lo obliga a volver a Argentina para un juego macabro. Un error inesperado desata sucesos perturbadores que lo regresan de forma inexplicable. ¿Vos estás preparado para vivir una terrorífica experiencia?" },
    { hora: "00:00", programa: "Fin de transmisión", descripcion: "Fin de transmisión, fuera de aire. En agosto de 2026 se estrenará Llamá y Cortá" }
  ],
  sabado: [
    { hora: "10:00", programa: "Sábado y Café", descripcion: "Un resumen relajado de la semana con actualidad y temas livianos para arrancar el finde." },
    { hora: "12:00", programa: "El Noticiero De Las Doce", descripcion: "El noticiero del mediodía que te pone al tanto mientras almorzás." },
    { hora: "16:30", programa: "NotiTarde (Sábado)", descripcion: "Noticias de la tarde para mantenerte al tanto entre la merienda, el descanso o lo que estés haciendo." },
    { hora: "23:30", programa: "La Previa de El Noticiero De Las 12 AM", descripcion: "Un repaso tranquilo antes de la medianoche con lo que necesitás saber." },
    { hora: "00:00", programa: "El Noticiero De Las 12 AM", descripcion: "Un noticiero que te mantiene informado antes de dormir, con el cierre del día." },
    { hora: "02:00", programa: "Fin de transmisión", descripcion: "Fin de transmisión, fuera de aire. En agosto de 2026 se estrenará Llamá y Cortá" }
  ],
  domingo: [
    { hora: "10:00", programa: "Sábado y Café", descripcion: "Un resumen relajado de la semana con actualidad y temas livianos para arrancar el finde." },
    { hora: "12:00", programa: "El Noticiero De Las Doce", descripcion: "El noticiero del mediodía que te pone al tanto mientras almorzás." },
    { hora: "16:30", programa: "NotiTarde (Domingo)", descripcion: "Noticias de la tarde para mantenerte al tanto entre la merienda, el descanso o lo que estés haciendo." },
    { hora: "00:45", programa: "Fin de transmisión", descripcion: "Fin de transmisión, fuera de aire. En agosto de 2026 se estrenará Llamá y Cortá" }
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

const epg = document.getElementById("epg");
const timeline = document.getElementById("timeline");
const dropdown = document.getElementById("dropdownMenu");
const btn = document.getElementById("dayBtn");
const clock = document.getElementById("clock");

/* clock + temperatura en el mismo bloque */
clock.innerHTML = `
  <span id="clock-time">--:--:--</span>
  <span id="clima-temp">T --°</span>
`;

const clockTime = document.getElementById("clock-time");
const climaTemp = document.getElementById("clima-temp");

/* detectar hoy */
const days = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
const today = days[new Date().getDay()];

/* reloj 24 hs con segundos */
function actualizarReloj() {
  clockTime.textContent = new Date().toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });
}

actualizarReloj();
setInterval(actualizarReloj, 1000);

/* convertir 10°6 a 10.6° */
function formatearTemperaturaWeb(temp) {
  if (!temp) return "--°";

  return String(temp)
    .replace("°", ".")
    .replace(/\.([0-9])$/, ".$1°");
}

/* clima desde Supabase */
async function cargarClima() {
  if (!window.sb) {
    console.error("Supabase no está cargado. Revisá que sb.js esté antes que grilla.js");
    return;
  }

  const { data, error } = await window.sb
    .from("clima_actual")
    .select("temperatura")
    .eq("id", 1)
    .single();

  if (error) {
    console.error("Error cargando clima:", error);
    return;
  }

  climaTemp.textContent = `T ${formatearTemperaturaWeb(data.temperatura)}`;
}

cargarClima();

/* actualizar clima cada 5 minutos sin recargar la página */
setInterval(cargarClima, 5 * 60 * 1000);

/* timeline */
for (let h = 6; h <= 24; h++) {
  const d = document.createElement("div");
  d.textContent = (h < 10 ? "0" : "") + h + ":00";
  timeline.appendChild(d);
}

/* dropdown */
Object.keys(schedules).forEach(day => {
  const el = document.createElement("div");

  const displayDay = day === today
    ? "Hoy"
    : day.charAt(0).toUpperCase() + day.slice(1);

  el.textContent = displayDay;

  el.onclick = () => {
    btn.textContent = displayDay;
    render(day);
    closeDropdown();
  };

  dropdown.appendChild(el);
});

/* mostrar hoy al iniciar */
btn.textContent = "Hoy";
render(today);

/* dropdown toggle */
document.querySelector(".dropdown button").addEventListener("click", () => {
  document.querySelector(".dropdown").classList.toggle("open");
});

/* cerrar dropdown si clickeamos fuera */
document.addEventListener("click", event => {
  if (!dropdown.contains(event.target) && !btn.contains(event.target)) {
    closeDropdown();
  }
});

/* cerrar dropdown con Escape */
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeDropdown();
  }
});

/* cerrar dropdown */
function closeDropdown() {
  document.querySelector(".dropdown").classList.remove("open");
}

/* render */
function render(day) {
  epg.innerHTML = "";

  const list = schedules[day];

  if (!list) {
    console.error("No existe programación para:", day);
    return;
  }

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  list.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "program";

    const [h, m] = p.hora.split(":");
    const start = parseInt(h) * 60 + parseInt(m);

    const next = list[i + 1];
    let end = 1440;

    if (next) {
      const [nh, nm] = next.hora.split(":");
      end = parseInt(nh) * 60 + parseInt(nm);
    }

    if (p.programa === "Fin de transmisión") {
      end = 6 * 60;
    }

    let live =
      (currentMinutes >= start && currentMinutes < end) ||
      (start === 0 && currentMinutes < 1440);

    const currentDay = today === day;

    if (p.programa === "Fin de transmisión" && currentMinutes >= 6 * 60) {
      live = false;
    }

    card.innerHTML = `
      <h4>${p.programa}</h4>
      <span>${p.hora}</span>
      ${live && currentDay ? '<div class="live">EN VIVO</div>' : ''}
      <p class="program-description">${p.descripcion}</p>
    `;

    epg.appendChild(card);
  });
}