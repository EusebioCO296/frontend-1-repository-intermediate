const userInput = document.getElementById("userInput");

let contador = 0; //Contador para asignar un id único a cada nuevo div creado.
let completas = 0; //Contador para llevar el seguimiento de las tareas completadas.
let id = 0; //Contador para asignar un id único a cada nuevo div creado.

userInput.addEventListener('submit', (event) => {

  event.preventDefault(); //Previene el comportamiento predeterminado del formulario. 
  id++; //Incrementa el contador de id cada vez que se envía el formulario.
  contador++; //Incrementa el contador cada vez que se envía el formulario.
  const nuevoDiv = document.createElement('div')
  nuevoDiv.classList.add('class-container')
  nuevoDiv.id = `${id}` //Agrega un id al nuevo div creado.
  nuevoDiv.innerHTML = `
    <input type="checkbox">
    <label>${userInput.elements[0].value}</label>
    <img src="./images/eliminar.png" alt="Delete" class="closeBtn">
    `; //Agrega el valor del input al nuevo div creado.

  const contenedor = document.querySelector('.list-container')
  contenedor.appendChild(nuevoDiv)

  userInput.elements[0].value = '';
  
  stats.innerHTML = `
    <div>Tareas Pendientes: ${contador} Tareas Completadas: ${completas}</div>
    `

  const label = nuevoDiv.querySelector('label'); //Selecciona el label dentro del nuevo div creado.

  nuevoDiv.querySelector('input[type="checkbox"]').addEventListener('change', (event) => {
    
    if (event.target.checked) {
      completas++; //Incrementa el contador de tareas completadas cada vez que se marca un checkbox.
      contador--; 
      label.style.textDecoration = 'line-through'; //Si el checkbox está marcado, agrega una línea a través del texto del label.
      const stats = document.getElementById('stats');
      
    } else {
      completas--; //Decrementa el contador de tareas completadas cada vez que se desmarca un checkbox.
      contador++;
      label.style.textDecoration = 'none'; //Si el checkbox no está marcado, elimina la línea a través del texto del label.
    }  
    stats.innerHTML = `
        <div>Tareas Pendientes: ${contador}  Tareas Completadas: ${completas}</div>
        `;
  });

  nuevoDiv.querySelector('.closeBtn').addEventListener('click', () => {

    if (nuevoDiv.querySelector('input[type="checkbox"]').checked) {
      completas--; // Si la tarea estaba marcada como completada, actualiza el conteo de completadas
    } else {
    id--;
    contador--; // Decrementa el contador de tareas pendientes al eliminar una tarea
    }
    nuevoDiv.remove(); // Elimina el div del DOM
    stats.innerHTML = `
        <div>Tareas Pendientes: ${contador}  Tareas Completadas: ${completas}</div>
        `;

  });  

});

