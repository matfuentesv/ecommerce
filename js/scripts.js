document.addEventListener("DOMContentLoaded", function() {
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", function(event) {
            if (!validatePassword()) {
                event.preventDefault();
            }
        });
    });

    function validatePassword() {
        const passwordInput = document.getElementById("password");
        const confirmPasswordInput = document.getElementById("confirm-password");

        if (!passwordInput || !confirmPasswordInput) {
            return true;
        }

        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const errors = [];

        if (password.length < 8) {
            errors.push("La contraseña debe tener al menos 8 caracteres.");
        }

        if (!/[A-Z]/.test(password)) {
            errors.push("La contraseña debe tener al menos una letra mayúscula.");
        }

        if (!/[a-z]/.test(password)) {
            errors.push("La contraseña debe tener al menos una letra minúscula.");
        }

        if (!/[0-9]/.test(password)) {
            errors.push("La contraseña debe tener al menos un número.");
        }

        if (!/[!@#$%^&*]/.test(password)) {
            errors.push("La contraseña debe tener al menos un carácter especial (!@#$%^&*).");
        }

        if (password !== confirmPassword) {
            errors.push("Las contraseñas no coinciden.");
        }

        if (errors.length > 0) {
            alert(errors.join("\n"));
            return false;
        }

        return true;
    }
});
