async function login() {
    // Obtener datos del formulario
    const correo = document.getElementById('correo').value;
    const password = document.getElementById('password').value;

    var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var correoEsValido = regexCorreo.test(correo);

    if(!correoEsValido) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return;
    }

    if (password.length < 4) {
        alert("La contraseña debe tener al menos 4 caracteres.");
        return;
    }

    // Realizar una solicitud al servidor para autenticar al usuario
    try {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ correo, password }),
        });
        
        if (!response.ok) {
            const { mensaje } = await response.json();
            //console.error(mensaje);
            throw new Error(mensaje);
        }

        // Obtener el token del cuerpo de la respuesta
        const { token } = await response.json();

        // Guardar el token en el almacenamiento local
        localStorage.setItem('token', token);

        // Redirigir a otra página
        window.location.href = 'index.html';
    } catch (error) {
        console.error(error.message);
        alert(error.message);
        // Manejar el error, por ejemplo, mostrar un mensaje al usuario
    }
}