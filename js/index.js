const users = [
    {
        email: "mfuentes@gmail.com",
        password: "admin123",
        nombre: "Matias",
        apellido: "Fuentes",
        edad: 28,
        direccion: "123 Admin St.",
        roles: ["admin"]
    },
    {
        email: "user1@example.com",
        password: "user123",
        nombre: "Matias",
        apellido: "Fuentes",
        edad: 28,
        direccion: "456 User Ave.",
        roles: ["customer"]
    },
    {
        email: "user2@example.com",
        password: "user123",
        nombre: "Juan",
        apellido: "Perez",
        edad: 32,
        direccion: "789 User Blvd.",
        roles: ["customer"]
    }
];

function findUser(email, password) {
    return users.find(user => user.email === email && user.password === password);
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = findUser(email, password);

    if (user) {
        // Ocultar modal de inicio de sesión
        document.getElementById("loginModal").style.display = 'none';
        document.body.classList.remove('modal-open');
        let backdrops = document.getElementsByClassName('modal-backdrop');
        while (backdrops.length > 0) {
            backdrops[0].parentNode.removeChild(backdrops[0]);
        }

        // Guardar la información del usuario en el localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(user));

        // Actualizar navbar para mostrar el nombre del usuario y el submenú
        document.getElementById("login-link").classList.add("d-none");
        document.getElementById("user-menu").classList.remove("d-none");
        document.getElementById("userName").innerText =  user.nombre;
    } else {
        alert("Correo electrónico o contraseña incorrectos.");
    }
}

function logout() {
    // Eliminar la información del usuario del localStorage
    localStorage.removeItem('loggedInUser');

    // Actualizar navbar para ocultar el nombre del usuario y el submenú
    document.getElementById("login-link").classList.remove("d-none");
    document.getElementById("user-menu").classList.add("d-none");
    document.getElementById("userName").innerText = '';

    // Mostrar modal de inicio de sesión
    document.getElementById("loginModal").style.display = 'block';
    document.body.classList.add('modal-open');
    document.getElementById("email").value= '';
    document.getElementById("password").value= '';
}

function checkLoginStatus() {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
        // Actualizar navbar para mostrar el nombre del usuario y el submenú
        document.getElementById("login-link").classList.add("d-none");
        document.getElementById("user-menu").classList.remove("d-none");
        document.getElementById("userName").innerText = `Hola, ${user.nombre}`;
    }
}

// Añadir event listener al formulario de login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    login();
});

// Añadir event listener al botón de cierre del modal
document.querySelector('#loginModal .close').addEventListener('click', function() {
    document.getElementById("loginModal").style.display = 'none';
    document.body.classList.remove('modal-open');
    let backdrops = document.getElementsByClassName('modal-backdrop');
    while (backdrops.length > 0) {
        backdrops[0].parentNode.removeChild(backdrops[0]);
    }
});

// Verificar el estado de inicio de sesión al cargar la página
document.addEventListener('DOMContentLoaded', checkLoginStatus);
