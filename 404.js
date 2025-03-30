// Crear el contenido de la página 404 dinámicamente
document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");
  container.innerHTML = `
    <div class="error-page">
      <h1 class="error-title">ERROR</h1>
      <p class="error-description">
        En la conexión con la página, hubo un error. Las posibles causas son:
      </p>
      <ol class="error-causes">
        <li>
          <strong>Tu computadora/ordenador:</strong>
          <ul>
            <li>No tienes conexión a internet.</li>
            <li>Estás usando una VPN lenta o inestable.</li>
            <li>Tu navegador tiene bloqueadores que interfieren con la página.</li>
            <li>El firewall de tu red está bloqueando el acceso.</li>
            <li>Tu dispositivo está desactualizado o tiene problemas de configuración.</li>
          </ul>
        </li>
        <li>
          <strong>La página no existe:</strong>
          <ul>
            <li>El enlace que seguiste está roto o desactualizado.</li>
            <li>La página fue eliminada o movida.</li>
            <li>No tienes permisos para acceder a esta página.</li>
          </ul>
        </li>
        <li>
          <strong>Dominio o URL incorrecto:</strong>
          <ul>
            <li>Escribiste mal la dirección web.</li>
            <li>El dominio ya no está activo.</li>
            <li>Se utilizó una extensión de dominio incorrecta (por ejemplo, .com en lugar de .org).</li>
          </ul>
        </li>
        <li>
          <strong>Otros:</strong>
          <ul>
            <li>Problemas temporales en los servidores del sitio.</li>
            <li>Interrupciones de red entre tu proveedor y el servidor del sitio.</li>
          </ul>
        </li>
      </ol>
    </div>
  `;
  document.body.appendChild(container);
});
