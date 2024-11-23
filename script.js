document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validar usuario y contraseña
    if (username === "admin" && password === "admin1234") {
        // Redirige a la página bienvenido.html
        window.location.href = "bienvenido.html";
    } else {
        document.getElementById("error-message").textContent = "Usuario o contraseña incorrectos";
    }
});

