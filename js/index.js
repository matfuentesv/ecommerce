
let initialUsers = [
    {
        nombre: "Matias",
        apellido: "Fuentes",
        email: "mfuentes@gmail.com",
        password: "admin123",
        direccion: "Los naranjos 0228",
        roles: ["admin"]
    },
    {
        nombre: "Francisca",
        apellido: "Rojas",
        email: "frojas@gmail.com",
        password: "customer123",
        direccion: "456 User Ave.",
        roles: ["customer"]
    },
    {
        nombre: "Juan",
        apellido: "Perez",
        email: "jperez@gmail.com",
        password: "customer123",
        direccion: "789 User Blvd.",
        roles: ["customer"]
    }
];

let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || null;
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const products = [
    {
        img: 'images/asus.jpg',
        title: 'Asus',
        description: 'Asus ROG Phone 8 Pro AI2401 5G 512GB 16GB - Negro',
        price: '$1.411.990',
        discount: '-12%',
        originalPrice: '$2.000.000',
        rating: 4.3,
        reviews: 35,
        catalogo: true
    },
    {
        img: 'images/mac.jpg',
        title: 'Apple MacBook Pro',
        description: 'Por Apple',
        price: '$1.199.990',
        discount: '-5%',
        originalPrice: '$1.259.990',
        rating: 4.8,
        reviews: 200,
        catalogo: true
    },
    {
        img: 'images/thorben.jpg',
        title: 'Thorben Portable Air Conditioner',
        description: 'By Thorben',
        price: '$349.990',
        discount: '-10%',
        originalPrice: '$389.990',
        rating: 4.6,
        reviews: 85,
        catalogo: true
    },
    {
        img: 'images/huawei.jpg',
        title: 'Huawei P30 Pro',
        description: 'Por Huawei',
        price: '$799.990',
        discount: '-20%',
        originalPrice: '$874.990',
        rating: 4.5,
        reviews: 40,
        catalogo: true
    },
    {
        img: 'images/wurden.jpg',
        title: 'Wurden Coffee Maker',
        description: 'By Wurden',
        price: '$119.990',
        discount: '-10%',
        originalPrice: '$133.990',
        rating: 4.4,
        reviews: 75,
        catalogo: true

    },
    {
        img: 'images/dell.jpg',
        title: 'Dell Inspiron 15',
        description: 'Por Dell',
        price: '$549.990',
        discount: '-10%',
        originalPrice: '$610.000',
        rating: 4.2,
        reviews: 95,
        catalogo: true
    }
];

const notebooksArray = [
    {
        img: '../../images/dell.jpg',
        title: 'ASUS VivoBook 15',
        description: 'Por ASUS',
        price: '$499.990',
        discount: '-15%',
        originalPrice: '$599.990',
        rating: 4.5,
        reviews: 120
    },
    {
        img: '../../images/dell.jpg',
        title: 'Dell Inspiron 15',
        description: 'Por Dell',
        price: '$549.990',
        discount: '-10%',
        originalPrice: '$610.000',
        rating: 4.2,
        reviews: 95
    },
    {
        img: '../../images/hp.jpg',
        title: 'HP Pavilion 14',
        description: 'Por HP',
        price: '$479.990',
        discount: '-20%',
        originalPrice: '$599.990',
        rating: 4.7,
        reviews: 150
    },
    {
        img: '../../images/lenovo.jpg',
        title: 'Lenovo IdeaPad 3',
        description: 'Por Lenovo',
        price: '$459.990',
        discount: '-10%',
        originalPrice: '$510.000',
        rating: 4.3,
        reviews: 80
    },
    {
        img: '../../images/mac.jpg',
        title: 'Apple MacBook Pro',
        description: 'Por Apple',
        price: '$1.199.990',
        discount: '-5%',
        originalPrice: '$1.259.990',
        rating: 4.8,
        reviews: 200
    },
    {
        img: '../../images/samsung.jpg',
        title: 'Samsung Galaxy Book',
        description: 'Por Samsung',
        price: '$659.990',
        discount: '-12%',
        originalPrice: '$749.990',
        rating: 4.4,
        reviews: 110
    }
];

const cellPhonesArray = [
    {
        img: '../../huawei.jpg',
        title: 'Huawei P30 Pro',
        description: 'Por Huawei',
        price: '$799.990',
        discount: '-20%',
        originalPrice: '$874.990',
        rating: 4.5,
        reviews: 40
    },
    {
        img: '../../images/phones/motorola.jpg',
        title: 'Motorola Edge 20',
        description: 'Por Motorola',
        price: '$299.990',
        discount: '-10%',
        originalPrice: '$555.990',
        rating: 4,
        reviews: 30
    },
    {
        img: '../../images/phones/samsung.jpg',
        title: 'Samsung Galaxy S21',
        description: 'Por Samsung',
        price: '$1.299.990',
        discount: '-15%',
        originalPrice: '$1.469.990',
        rating: 4.5,
        reviews: 50
    },
    {
        img: '../../images/phones/xiomi.jpg',
        title: 'Xiaomi Mi 11',
        description: 'Por Xiaomi',
        price: '$139.990',
        discount: '-12%',
        originalPrice: '$200.000',
        rating: 4.3,
        reviews: 35
    },
    {
        img: '../../images/phones/bmobile.jpg',
        title: 'BMOBILE',
        description: 'Smartphone C41 32GB Gris',
        price: '$49.990',
        discount: '-12%',
        originalPrice: '$80.000',
        rating: 4.3,
        reviews: 35
    },
    {
        img: '../../images/phones/asus.jpg',
        title: 'Asus',
        description: 'Asus ROG Phone 8 Pro AI2401 5G 512GB 16GB - Negro',
        price: '$1.411.990',
        discount: '-12%',
        originalPrice: '$2.000.000',
        rating: 4.3,
        reviews: 35
    }
];

const airConditioningArray = [
    {
        img: '../../images/clark.jpg',
        title: 'Clark Portable Air Conditioner',
        description: 'By Clark',
        price: '$299.990',
        discount: '-15%',
        originalPrice: '$349.990',
        rating: 4.2,
        reviews: 80
    },
    {
        img: '../../images/gree.jpg',
        title: 'Gree Portable Air Conditioner',
        description: 'By Gree',
        price: '$319.990',
        discount: '-10%',
        originalPrice: '$355.990',
        rating: 4.5,
        reviews: 90
    },
    {
        img: '../../images/kendal.jpg',
        title: 'Kendal Portable Air Conditioner',
        description: 'By Kendal',
        price: '$289.990',
        discount: '-20%',
        originalPrice: '$369.990',
        rating: 4.3,
        reviews: 70
    },
    {
        img: '../../images/midea.jpg',
        title: 'Midea Portable Air Conditioner',
        description: 'By Midea',
        price: '$339.990',
        discount: '-12%',
        originalPrice: '$385.990',
        rating: 4.7,
        reviews: 100
    },
    {
        img: '../../images/soler.jpg',
        title: 'Soler & Palau Portable Air Conditioner',
        description: 'By Soler & Palau',
        price: '$299.990',
        discount: '-15%',
        originalPrice: '$349.990',
        rating: 4.1,
        reviews: 65
    },
    {
        img: '../../images/thorben.jpg',
        title: 'Thorben Portable Air Conditioner',
        description: 'By Thorben',
        price: '$349.990',
        discount: '-10%',
        originalPrice: '$389.990',
        rating: 4.6,
        reviews: 85
    }
];

const coffeeMakersArray = [
    {
        img: '../../images/coffee-makers/delonghi.jpg',
        title: 'DeLonghi Coffee Maker',
        description: 'By DeLonghi',
        price: '$129.990',
        discount: '-15%',
        originalPrice: '$152.990',
        rating: 4.5,
        reviews: 80
    },
    {
        img: '../../images/coffee-makers/krups.jpg',
        title: 'Krups Coffee Maker',
        description: 'By Krups',
        price: '$149.990',
        discount: '-10%',
        originalPrice: '$166.990',
        rating: 4.7,
        reviews: 90
    },
    {
        img: '../../images/coffee-makers/nescafe.jpg',
        title: 'Nescafé Coffee Maker',
        description: 'By Nescafé',
        price: '$109.990',
        discount: '-20%',
        originalPrice: '$137.990',
        rating: 4.3,
        reviews: 70
    },
    {
        img: '../../images/coffee-makers/oster.jpg',
        title: 'Oster Coffee Maker',
        description: 'By Oster',
        price: '$99.990',
        discount: '-12%',
        originalPrice: '$113.990',
        rating: 4.6,
        reviews: 100
    },
    {
        img: '../../images/coffee-makers/phillips.jpg',
        title: 'Phillips Coffee Maker',
        description: 'By Phillips',
        price: '$139.990',
        discount: '-15%',
        originalPrice: '$164.990',
        rating: 4.2,
        reviews: 85
    },
    {
        img: '../../images/coffee-makers/wurden.jpg',
        title: 'Wurden Coffee Maker',
        description: 'By Wurden',
        price: '$119.990',
        discount: '-10%',
        originalPrice: '$133.990',
        rating: 4.4,
        reviews: 75
    }
];

function showToast(message, status) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast show text-white ${status}`;
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
        showToast("Por favor, introduce una dirección de correo electrónico válida.", "bg-danger");
        return;
    }

    const user = initialUsers.find(user => user.email === email && user.password === password);

    if (user) {
        $('#loginModal').modal('hide');
        loggedInUser = user;
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        updateNavbar(user);
        showToast("Inicio de sesión exitoso", "bg-info");
    } else {
        showToast("Correo electrónico o contraseña incorrectos.", "bg-danger");
    }
}

function logout() {
    localStorage.removeItem('loggedInUser');
    updateNavbar(null);
    loggedInUser = null;
    document.getElementById("email").value = '';
    document.getElementById("password").value= '';
    $('#loginModal').modal('show');
}

function checkLoginStatus() {
    updateNavbar(loggedInUser);
}

function updateNavbar(user) {
    if (user) {
        document.getElementById("login-link").classList.add("d-none");
        document.getElementById("user-menu").classList.remove("d-none");
        document.getElementById("userName").innerText = user.nombre;
        if (user.roles.includes("admin")) {
            addAdminMenuOption();
        }
    } else {
        document.getElementById("login-link").classList.remove("d-none");
        document.getElementById("user-menu").classList.add("d-none");
        document.getElementById("userName").innerText = '';
        removeAdminMenuOption();
    }
}

document.getElementById("login-link").addEventListener("click", function() {
    $('#loginModal').modal('show');
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    login();
});

document.querySelector('#loginModal .close').addEventListener('click', function() {
    const loginModal = document.getElementById('loginModal');
    loginModal.style.display = 'none';
    document.body.classList.remove('modal-open');
    const backdrops = document.getElementsByClassName('modal-backdrop');
    while (backdrops.length > 0) {
        backdrops[0].parentNode.removeChild(backdrops[0]);
    }
});

function recoverPass() {
    const email = document.getElementById("email-recover").value;
    if (email === '') {
        showToast("Por favor, introduce una dirección de correo.", "bg-danger");
        return;
    }
    if (!validateEmail(email)) {
        showToast("Por favor, introduce una dirección de correo electrónico válida.", "bg-danger");
    } else {
        showToast("Correo enviado con éxito, favor validar.", "bg-info");
    }
}

function generateProductHTML(product) {
    const stars = Array.from({ length: 5 }, (_, i) => {
        const starClass = i < product.rating ? 'fas fa-star text-warning' : 'far fa-star text-warning';
        return `<i class="${starClass}"></i>`;
    }).join('');

    return `
        <div class="col-md-4">
            <div class="card mb-4 product-card">
                 <img src="${product.img}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <span class="badge badge-success">Llega hoy</span>
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-price">${product.price} <span class="badge badge-danger">${product.discount}</span></p>
                    <p class="card-text"><del>${product.originalPrice}</del></p>
                    <div class="rating">
                        ${stars} (${product.reviews})
                    </div>
                    <button onclick='addToCart(${JSON.stringify(product)})' class="btn btn-primary btn-block">Agregar al Carrito</button>
                </div>
            </div>
        </div>
    `;
}

function loadProducts(products, containerId) {
    const carouselInner = document.getElementById(containerId);
    if (!carouselInner) {
        console.error(`Elemento con ID '${containerId}' no encontrado.`);
        return;
    }

    const itemsPerSlide = 3;
    const numSlides = Math.ceil(products.length / itemsPerSlide);
    let innerHTML = '';

    for (let i = 0; i < numSlides; i++) {
        const start = i * itemsPerSlide;
        const end = start + itemsPerSlide;
        const productHTML = products.slice(start, end).map(generateProductHTML).join('');
        const activeClass = i === 0 ? 'active' : '';
        innerHTML += `
            <div class="carousel-item ${activeClass}">
                <div class="row">
                    ${productHTML}
                </div>
            </div>
        `;
    }

    carouselInner.innerHTML = innerHTML;
}

function loadProductList(products, containerId) {
    const productList = document.getElementById(containerId);
    if (!productList) {
        console.error(`Elemento con ID '${containerId}' no encontrado.`);
        return;
    }
    const productHTML = products.map(generateProductHTML).join('');
    productList.innerHTML = productHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();
    loadProducts(products, 'carousel-inner');
    loadProductList(notebooksArray, 'notebooks-list');
    loadProductList(cellPhonesArray, 'cellphones-list');
    loadProductList(airConditioningArray, 'air-conditioning-list');
    loadProductList(coffeeMakersArray, 'coffee-makers-list');
    updateCartCount();
});

function registerUser() {
    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const rut = document.getElementById('rut');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email-register');
    const password = document.getElementById('password-register');
    const promo = document.getElementById('promo');

    const isValidName = validateField(name, /^[a-zA-Z\s]+$/) && !isEmptyField(name);
    const isValidSurname = validateField(surname, /^[a-zA-Z\s]+$/) && !isEmptyField(surname);
    const isValidRUT = validateField(rut, /^[0-9]+-[0-9kK]$/) && !isEmptyField(rut);
    const isValidPhone = validateField(phone, /^[0-9]{9}$/) && !isEmptyField(phone);
    const isValidEmail = validateEmail(email.value) && !isEmptyField(email);
    const isValidPassword = validatePassword(password.value) && !isEmptyField(password);
    const isPromoChecked = promo.checked;

    toggleFieldClass(name, isValidName);
    toggleFieldClass(surname, isValidSurname);
    toggleFieldClass(rut, isValidRUT);
    toggleFieldClass(phone, isValidPhone);
    toggleFieldClass(email, isValidEmail);
    toggleFieldClass(password, isValidPassword);
    toggleCheckboxClass(promo, isPromoChecked);

    if (isValidName && isValidSurname && isValidRUT && isValidPhone && isValidEmail && isValidPassword && isPromoChecked) {
        const newUser = {
            nombre: name.value,
            apellido: surname.value,
            email: email.value,
            password: password.value,
            roles: ["customer"]
        };
        initialUsers.push(newUser);
        loggedInUser = newUser;
        localStorage.setItem('loggedInUser', JSON.stringify(newUser));
        updateNavbar(newUser);
        showToast("Usuario registrado con éxito", "bg-info");
        setTimeout(() => {
            window.location.href = "../index.html";
        }, 2000);
    }
}

function validateField(field, regex) {
    return regex.test(field.value.trim());
}

function isEmptyField(field) {
    return field.value.trim() === '';
}

function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
}

function toggleFieldClass(field, isValid) {
    if (isValid) {
        field.classList.remove('is-invalid');
    } else {
        field.classList.add('is-invalid');
    }
}

function toggleCheckboxClass(checkbox, isValid) {
    if (isValid) {
        checkbox.classList.remove('is-invalid');
    } else {
        checkbox.classList.add('is-invalid');
    }
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCount.textContent = cart.length;
}

function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showToast("Producto agregado al carrito", "bg-info");
}

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Tu carrito está vacío</p>';
    } else {
        cartItemsContainer.innerHTML = '';
        cart.forEach((product, index) => {
            const productElement = document.createElement('div');
            productElement.classList.add('cart-item');
            productElement.innerHTML = `
                <div class="row">
                    <div class="col-md-3">
                        <img src="${product.img}" class="img-fluid" alt="${product.title}">
                    </div>
                    <div class="col-md-3">
                        <h5>${product.title}</h5>
                        <p>${product.description}</p>
                    </div>
                    <div class="col-md-2">
                        <input type="number" class="form-control" value="1" min="1">
                    </div>
                    <div class="col-md-2">
                        <p>${product.price}</p>
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Eliminar</button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(productElement);
        });
    }
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
    updateCartCount();
}

document.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();
    loadProducts(products, 'carousel-inner');
    loadProductList(notebooksArray, 'notebooks-list');
    loadProductList(cellPhonesArray, 'cellphones-list');
    loadProductList(airConditioningArray, 'air-conditioning-list');
    loadProductList(coffeeMakersArray, 'coffee-makers-list');
    updateCartCount();
    displayCartItems();
});


function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartTotal = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Tu carrito está vacío</p>';
    } else {
        cartItemsContainer.innerHTML = '';
        cart.forEach((product, index) => {
            const price = parseFloat(product.price.replace('$', '').replace(',', ''));
            cartTotal += price;

            const productElement = document.createElement('div');
            productElement.classList.add('cart-item');
            productElement.innerHTML = `
                    <div class="row align-items-center">
                        <div class="col-md-2">
                            <img src="../${product.img}" class="img-fluid" alt="${product.title}">
                        </div>
                        <div class="col-md-4 cart-item-details">
                            <h5>${product.title}</h5>
                            <p>${product.description}</p>
                        </div>
                        <div class="col-md-2 cart-item-price">
                            <p>${product.price}</p>
                        </div>
                        <div class="col-md2">
                            <input type="number" class="form-control" value="1" min="1">
                        </div>
                        <div class="col-md-2 cart-item-remove">
                            <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Eliminar</button>
                        </div>
                    </div>
                `;
            cartItemsContainer.appendChild(productElement);
        });

        document.getElementById('summary-products').textContent = `$${cartTotal.toFixed(2)}`;
        document.getElementById('summary-total').textContent = `$${cartTotal.toFixed(2)}`;
    }
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
    updateCartCount();
}

document.addEventListener('DOMContentLoaded', () => {
    displayCartItems();
    updateCartCount();
});
