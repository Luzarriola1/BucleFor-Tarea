fetch("http://jsonplaceholder.typicode.com/users") // Promesa
    .then((res) => res.json())
    .then((data) => {
        crearCard(data);
    });

let container = document.getElementById("container"); // Guardando en una variable el contenedor

// Crear una función
function crearCard(data) {
    container.innerHTML = '';  // Limpiar el contenido del contenedor
    for (let i = 0; i < data.length; i++) {  // Iterar sobre todos los elementos del array
        container.innerHTML += `
           <div class="card">
                <p>Nombre: ${data[i].name}</p>
                <p>Usuario: ${data[i].username}</p>
                <p>Email: ${data[i].email}</p>
            </div>
        `;
    }
}