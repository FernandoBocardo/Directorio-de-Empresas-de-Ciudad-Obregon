async function enviarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const password = document.getElementById('password').value;

    var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var correoEsValido = regexCorreo.test(correo);

    if (nombre.length <= 0) {
        alert("El nombre no puede estar vacio");
        return;
    }

    if(!correoEsValido) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return;
    }

    if (password.length < 4) {
        alert("La contraseña debe tener al menos 4 caracteres.");
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre, correo, password }),
        });
        
        if (!response.ok) {
            const { mensaje } = await response.json();
            //console.error(mensaje);
            throw new Error(mensaje);
        }

        alert('El usuario se registró correctamente.');

        // Redirigir a otra página
        window.location.href = 'login.html';
    } catch (error) {
        console.error(error.message);
        alert(error.message);
        // Manejar el error, por ejemplo, mostrar un mensaje al usuario
    }


    
}
