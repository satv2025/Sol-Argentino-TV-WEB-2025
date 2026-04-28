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

/* modal generado por JS */
const modal = document.createElement("div");
modal.id = "modal";
modal.innerHTML = `
  <div class="modal-content">
    <div id="modalLive"></div>
    <h2 id="modalTitle"></h2>
    <div id="modalTime"></div>
    <p id="modalDescription"></p>
    <button id="closeModal" type="button">Cerrar</button>
  </div>
`;

document.body.appendChild(modal);

const modalLive = document.getElementById("modalLive");
const modalTitle = document.getElementById("modalTitle");
const modalTime = document.getElementById("modalTime");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");

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

/* aplicar clima en pantalla */
function aplicarClima(data) {
  if (!data) return;

  climaTemp.textContent = `T ${formatearTemperaturaWeb(data.temperatura)}`;
}

/* clima inicial desde Supabase */
async function cargarClima() {
  if (!window.sb) {
    console.error("Supabase no está cargado. Revisá que sb.js esté antes que grilla.js");
    return;
  }

  const { data, error } = await window.sb
    .from("clima_actual")
    .select("id, temperatura")
    .eq("id", 1)
    .single();

  if (error) {
    console.error("Error cargando clima:", error);
    return;
  }

  aplicarClima(data);
}

/* escuchar cambios en tiempo real */
function escucharClimaEnTiempoReal() {
  if (!window.sb) {
    console.error("Supabase no está cargado para Realtime");
    return;
  }

  window.sb
    .channel("clima-actual-realtime")
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "clima_actual",
        filter: "id=eq.1"
      },
      payload => {
        console.log("Cambio recibido en clima_actual:", payload);

        if (payload.new) {
          aplicarClima(payload.new);
        }
      }
    )
    .subscribe(status => {
      console.log("Estado Realtime clima:", status);
    });
}

cargarClima();
escucharClimaEnTiempoReal();

/* fallback: por si Realtime se corta, actualiza cada 5 minutos */
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

/* cerrar dropdown con Escape y modal */
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeDropdown();
    cerrarModal();
  }
});

/* cerrar dropdown */
function closeDropdown() {
  document.querySelector(".dropdown").classList.remove("open");
}

/* abrir modal */
function abrirModal(programa, hora, descripcion, live) {
  modalTitle.textContent = programa;
  modalTime.textContent = hora;
  modalDescription.textContent = descripcion || "Sin descripción disponible.";

  if (live) {
    modalLive.innerHTML = `<span class="live modal-live">EN VIVO</span>`;
  } else {
    modalLive.innerHTML = "";
  }

  modal.style.display = "flex";
  document.body.classList.add("modal-open");
}

/* cerrar modal */
function cerrarModal() {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

closeModal.addEventListener("click", cerrarModal);

modal.addEventListener("click", event => {
  if (event.target === modal) {
    cerrarModal();
  }
});

/* calcula si un programa está en vivo */
function estaEnVivo(p, list, i, day) {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

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

  return live && currentDay;
}

/* render */
function render(day) {
  epg.innerHTML = "";

  const list = schedules[day];

  if (!list) {
    console.error("No existe programación para:", day);
    return;
  }

  list.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "program";

    const live = estaEnVivo(p, list, i, day);

    card.innerHTML = `
      <span class="program-hour">${p.hora}</span>

      <div class="program-main">
        <h4>${p.programa}</h4>
      </div>

      <div class="program-actions">
        ${live ? '<div class="live">EN VIVO</div>' : ''}
        <button class="program-detail" type="button">Ver detalle</button>
      </div>
    `;

    const detailButton = card.querySelector(".program-detail");

    detailButton.addEventListener("click", event => {
      event.stopPropagation();
      abrirModal(p.programa, p.hora, p.descripcion, live);
    });

    epg.appendChild(card);
  });
}