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


async function enviarFormulario() {
    var formulario = document.getElementById('formularioEmpresa');
    const nombre = document.getElementById('nombre').value;
    const ubicacion = document.getElementById('ubicacion').value;
    const telefono = document.getElementById('telefono').value;
    const descripcion = document.getElementById('descripcion').value;
    const horario = document.getElementById('horario').value;
    const tipoEmpresa = document.getElementById('tipoEmpresa').value;
    const idCategoria = document.getElementById('idCategoria').value;


    if (nombre.length <= 0) {
        alert("El nombre no puede estar vacio");
        return;
    }

    if (ubicacion.length <= 0) {
        alert("La ubicacion no puede estar vacia");
        return;
    }

    if (!/^\d{10}$/.test(telefono)) {
        alert("Por favor, ingrese un número de teléfono válido de 10 dígitos.");
        return;
    }

    if (descripcion.length <= 0) {
        alert("La descripcion no puede estar vacia");
        return;
    }

    if (horario.length <= 0) {
        alert("El horario no puede estar vacio");
        return;
    }

    if (tipoEmpresa.length <= 0) {
        alert("El tipo de la empresa no puede estar vacio");
        return;
    }

    try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3000/empresa', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({ nombre, ubicacion, telefono, descripcion, horario, tipoEmpresa, idCategoria }),
        });
        
        if (!response.ok) {
            const { error } = await response.json();
            //console.error(mensaje);
            throw new Error(error);
        }

        alert('La empresa se registró correctamente.'); // Alerta de éxito
        formulario.reset(); // Limpiar el formulario
    } catch (error) {
        console.error(error.message);
        alert(error.message);
    }
}
