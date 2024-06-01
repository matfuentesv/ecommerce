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

function showToast(message,status) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast show  text-white '.concat(status);
    toast.role = 'alert';
    toast.ariaLive = 'assertive';
    toast.ariaAtomic = 'true';
    toast.innerHTML = `
        <div class="toast-body">
            ${message}
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    `;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 500); // Remove after transition
    }, 3000);
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

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!validateEmail(email)) {
        showToast("Por favor, introduce una dirección de correo electrónico válida.","bg-danger");
        return;
    }

    const user = findUser(email, password);

    if (user) {
        // Ocultar modal de inicio de sesión
        const loginModal = document.getElementById('loginModal');
        loginModal.style.display = 'none';
        document.body.classList.remove('modal-open');
        const backdrops = document.getElementsByClassName('modal-backdrop');
        while (backdrops.length > 0) {
            backdrops[0].parentNode.removeChild(backdrops[0]);
        }

        // Guardar la información del usuario en el localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(user));

        // Actualizar navbar para mostrar el nombre del usuario y el submenú
        document.getElementById("login-link").classList.add("d-none");
        document.getElementById("user-menu").classList.remove("d-none");
        document.getElementById("userName").innerText = user.nombre;

        // Agregar opción "Administración" al menú si el usuario es admin
        if (user.roles.includes("admin")) {
            addAdminMenuOption();
        }
    } else {
        // Mostrar toast
        showToast("Correo electrónico o contraseña incorrectos.","bg-danger");
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
    const loginModal = document.getElementById('loginModal');
    loginModal.style.display = 'block';
    document.body.classList.add('modal-open');
}

function checkLoginStatus() {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
        // Actualizar navbar para mostrar el nombre del usuario y el submenú
        document.getElementById("login-link").classList.add("d-none");
        document.getElementById("user-menu").classList.remove("d-none");
        document.getElementById("userName").innerText = user.nombre;

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

// Añadir event listener al botón de cierre del modal
document.querySelector('#loginModal .close').addEventListener('click', function() {
    const loginModal = document.getElementById('loginModal');
    loginModal.style.display = 'none';
    document.body.classList.remove('modal-open');
    const backdrops = document.getElementsByClassName('modal-backdrop');
    while (backdrops.length > 0) {
        backdrops[0].parentNode.removeChild(backdrops[0]);
    }
});

function recoverPass(){
    const email = document.getElementById("email-recover").value;

    if (!validateEmail(email)) {
        showToast("Por favor, introduce una dirección de correo electrónico válida.","bg-danger");
    }else {
        showToast("Correo enviado con exito,favor validar","bg-info");
    }
}

// Verificar el estado de inicio de sesión al cargar la página
document.addEventListener('DOMContentLoaded', checkLoginStatus);
