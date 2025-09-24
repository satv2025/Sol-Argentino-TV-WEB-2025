// Función para cambiar el logo
function changeLogo(event) {
  // Obtiene el valor de la opción seleccionada
  const selectedLogo = event.target.dataset.logo;
  
  // Cambia la fuente de la imagen del logo
  const logoImage = document.getElementById('logoImage');
  logoImage.src = selectedLogo;  // Asigna la nueva imagen seleccionada
  
  console.log('Logo seleccionado:', selectedLogo);  // Imprime en consola el logo seleccionado
}

// Agregar evento a cada item del dropdown
const dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach(item => {
  item.addEventListener('click', changeLogo);  // Escucha el click en cada item
});
