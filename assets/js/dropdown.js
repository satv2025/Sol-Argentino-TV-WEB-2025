  document.addEventListener('DOMContentLoaded', function() {
    // Obtén el botón y el contenedor del dropdown
    var dropdown = document.querySelector('.dropdown');
    var dropbtn = document.querySelector('.dropbtn');

    // Agrega el evento de clic para alternar la visibilidad
    dropbtn.addEventListener('click', function() {
      // Alterna la clase 'open' para mostrar u ocultar el menú
      dropdown.classList.toggle('open');
    });

    // Cierra el dropdown si se hace clic fuera de él
    window.addEventListener('click', function(event) {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('open');
      }
    });
  });
