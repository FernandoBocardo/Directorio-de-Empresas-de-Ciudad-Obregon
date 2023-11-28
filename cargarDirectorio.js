document.addEventListener('DOMContentLoaded', function () {
    // Espera a que el DOM esté completamente cargado

    // Llama al método para obtener los datos del servicio RESTful
    obtenerDatosYActualizarMenu();
});

function obtenerDatosYActualizarMenu() {
    // URL del servicio RESTful para obtener empresas
    const urlEmpresas = 'http://localhost:3000/empresa';
    const token = localStorage.getItem('token');

    // Realiza la solicitud para obtener las empresas utilizando la Fetch API
    fetch(urlEmpresas, {
        method: 'GET',
        headers: {
            'Authorization': token
        }
    })
        .then(response => {
            // Verifica si la solicitud fue exitosa (código de estado 200)
            if (!response.ok) {
                throw new Error('No se pudo obtener los datos del servicio de empresas.');
            }
            // Convierte la respuesta a formato JSON
            return response.json();
        })
        .then(empresas => {
            // Llama al método para obtener las categorías y pasar las empresas
            obtenerCategoriasYActualizarMenu(empresas);
        })
        .catch(error => {
            console.error('Error al obtener datos de empresas:', error);
        });
}

function obtenerCategoriasYActualizarMenu(empresas) {
    // URL del servicio RESTful para obtener categorías
    const urlCategorias = 'http://localhost:3000/categoria';

    // Realiza la solicitud para obtener las categorías utilizando la Fetch API
    fetch(urlCategorias)
        .then(response => response.json())
        .then(categorias => {
            // Llena el menú de navegación con los datos obtenidos
            actualizarMenu(empresas, categorias);
        })
        .catch(error => {
            console.error('Error al obtener datos de categorías:', error);
        });
}

function actualizarMenu(empresas, categorias) {
    const navElement = document.getElementById('directorioEmpresas');

    // Verifica que empresas y categorias sean arrays válidos
    if (!Array.isArray(empresas) || !Array.isArray(categorias)) {
        console.error('Los datos no son arrays válidos:', empresas, categorias);
        return;
    }

    // Crea un objeto de mapeo para convertir IDs de categorías en nombres
    const mapaCategorias = {};
    categorias.forEach(categoria => {
        mapaCategorias[categoria.id] = categoria.nombre;
    });

    // Itera sobre las empresas y crea tarjetas para cada elemento
    empresas.forEach(empresa => {
        // Crea un elemento div para la tarjeta
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta'); // Ajusta según tus estilos

        // Crea elementos p para cada atributo (excepto el 'id') y agrega al div de la tarjeta
        for (const key in empresa) {
            if (empresa.hasOwnProperty(key) && key !== 'id') {
                const parrafo = document.createElement('p');
                // Comprueba si la propiedad es 'idCategoria'
                if (key === 'idCategoria') {
                    // Obtiene el nombre de la categoría usando el objeto de mapeo
                    const nombreCategoria = mapaCategorias[empresa[key]];
                    // Cambia el nombre de la propiedad a 'Categoria'
                    parrafo.innerHTML = `<strong>Categoria:</strong> ${nombreCategoria}`;
                } else {
                    // Si no es 'idCategoria', simplemente agrega el valor al párrafo
                    parrafo.innerHTML = `<strong>${capitalizar(key)}:</strong> ${empresa[key]}`;
                }
                // Agrega el párrafo al div de la tarjeta
                tarjeta.appendChild(parrafo);
            }
        }

        // Agrega la tarjeta como hijo del menú de navegación
        navElement.appendChild(tarjeta);
    });
}

function capitalizar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
