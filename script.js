function changeLogo() {
  const selectedLogo = document.querySelector('.dropdown .dropdown-item.selected');
  if (selectedLogo) {
    selectedLogo.classList.remove('selected'); // Elimina la clase seleccionada
  }
  
  const selectedOption = document.querySelector('.dropdown-item[data-logo="' + event.target.value + '"]');
  if (selectedOption) {
    selectedOption.classList.add('selected');
  }

  const selectedLogoValue = event.target.value;
  console.log('Logo seleccionado:', selectedLogoValue);  // Aquí puedes usar la selección del logo según lo que necesites.
}
