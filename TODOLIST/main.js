const userInput = document.getElementById("userInput");
const checkBox = document.querySelector('input[type="checkbox"]');
let contador = 1; //Contador para asignar un id único a cada nuevo div creado.

userInput.addEventListener('submit', (event) => {

  event.preventDefault(); //Previene el comportamiento predeterminado del formulario. 
  
  contador++; //Incrementa el contador cada vez que se envía el formulario.
  
  const nuevoDiv = document.createElement('div')
  const contenedor = document.querySelector('.list-container')
  contenedor.appendChild(nuevoDiv)
  nuevoDiv.classList.add('class-container')
  nuevoDiv.id = `${contador}` //Agrega un id al nuevo div creado.
  nuevoDiv.innerHTML = `
  <input type="checkbox">
  <label>${userInput.elements[0].value}</label>
  <img src="./images/eliminar.png" alt="Delete" class="closeBtn">
  `; //Agrega el valor del input al nuevo div creado.
  stats.innerHTML = `
    <div>Tareas Pendientes: ${contador} Tareas Completadas: 1</div>`
});


checkBox.addEventListener('change', (event) => {
  const checkbox = event.target; //Obtiene el checkbox que se ha cambiado.
  const label = checkbox.nextElementSibling; //Obtiene el label asociado al checkbox.
  if (checkbox.checked) {
    label.style.textDecoration = 'line-through'; //Si el checkbox está marcado, agrega una línea a través del texto del label.
    const stats = document.getElementById('stats');
    stats.innerHTML = `
    <div>Tareas Pendientes:1  Tareas Completadas: 1</div>`
  } else {
    label.style.textDecoration = 'none'; //Si el checkbox no está marcado, elimina la línea a través del texto del label.
  }
});