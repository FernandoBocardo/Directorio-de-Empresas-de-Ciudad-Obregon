// Función para obtener y llenar las opciones del select
function llenarOpcionesCategoria() {
    // Obtener el select
    const selectCategoria = document.getElementById('idCategoria');

    // Realizar una solicitud para obtener las categorías desde tu servidor
    fetch('http://localhost:3000/categoria')
        .then(response => response.json())
        .then(data => {
            // Limpiar las opciones actuales del select
            selectCategoria.innerHTML = '';

            // Agregar cada categoría como una opción
            data.forEach(categoria => {
                const option = document.createElement('option');
                option.value = categoria.id;
                option.textContent = categoria.nombre;
                selectCategoria.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error al obtener las categorías:', error);
        });
}

// Llamar a la función al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    llenarOpcionesCategoria();
});


   function enviarFormulario() {
    var formulario = document.getElementById('formularioEmpresa');
    var formData = new FormData(formulario);

    var jsonObject = {};
    formData.forEach(function (value, key) {
        jsonObject[key] = value;
    });

    // El valor seleccionado del select estará en jsonObject.idCategoria
    var jsonData = JSON.stringify(jsonObject);

    fetch('http://localhost:3000/empresa', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud. Por favor, inténtelo de nuevo.');
        }
        return response.json();
    })
    .then(data => {
        console.log('Respuesta del servidor:', data);

        alert('La empresa se registró correctamente.'); // Alerta de éxito
        formulario.reset(); // Limpiar el formulario

        // Puedes realizar cualquier otra acción para actualizar el formulario aquí

    })
    .catch(error => {
        console.error('Error al enviar la solicitud:', error);
        alert(error.message);
    });
}
