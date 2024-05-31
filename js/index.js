const users = [
    {
        email: "mfuentes@gmail.com",
        password: "admin123",
        nombre: "Matias",
        apellido: "Fuentes",
        edad: 28,
        direccion: "Los naranjos 0228",
        roles: ["admin"]
    },
    {
        email: "frojas@gmail.com",
        password: "admin123",
        nombre: "Francisca",
        apellido: "Rojas",
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

function showToast(message) {
    const toast = document.getElementById('login-toast');
    const toastBody = toast.querySelector('.toast-body');
    toastBody.childNodes[0].nodeValue = message;  // Update message text
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
}

function addAdminMenuOption() {
    const adminMenuOption = document.getElementById("admin-menu-option");
    if (adminMenuOption) {
        adminMenuOption.classList.remove("d-none");
    }
}

function removeAdminMenuOption() {
    const adminMenuOption = document.getElementById("admin-menu-option");
    if (adminMenuOption) {
        adminMenuOption.classList.add("d-none");
    }
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = findUser(email, password);

    if (user) {
        // Ocultar modal de inicio de sesión
        $('#loginModal').modal('hide');
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
        document.getElementById("userName").innerText = `Hola, ${user.nombre}`;

        // Agregar opción "Administración" al menú si el usuario es admin
        if (user.roles.includes("admin")) {
            addAdminMenuOption();
        }
    } else {
        // Mostrar toast
        showToast("Correo electrónico o contraseña incorrectos.");
    }
}

function logout() {
    // Eliminar la información del usuario del localStorage
    localStorage.removeItem('loggedInUser');

    // Actualizar navbar para ocultar el nombre del usuario y el submenú
    document.getElementById("login-link").classList.remove("d-none");
    document.getElementById("user-menu").classList.add("d-none");
    document.getElementById("userName").innerText = '';

    // Limpiar los campos del formulario de inicio de sesión
    document.getElementById("email").value = '';
    document.getElementById("password").value = '';

    // Remover la opción "Administración" del menú
    removeAdminMenuOption();

    // Mostrar modal de inicio de sesión
    $('#loginModal').modal('show');
}

function checkLoginStatus() {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
        // Actualizar navbar para mostrar el nombre del usuario y el submenú
        document.getElementById("login-link").classList.add("d-none");
        document.getElementById("user-menu").classList.remove("d-none");
        document.getElementById("userName").innerText = `Hola, ${user.nombre}`;

        // Agregar opción "Administración" al menú si el usuario es admin
        if (user.roles.includes("admin")) {
            addAdminMenuOption();
        }
    }
}

// Añadir event listener al formulario de login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    login();
});

// Verificar el estado de inicio de sesión al cargar la página
document.addEventListener('DOMContentLoaded', checkLoginStatus);
