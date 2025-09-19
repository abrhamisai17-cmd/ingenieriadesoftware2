let estado = document.getElementById("estado");
estado.value = 11;


let fecha = document.getElementById("fecha");
const hoy = new Date();
const fechaCadena = hoy.toISOString().split('T')[0];
fecha.value = fechaCadena;


// Validación de contraseñas
document.getElementById("btnRegistrar").addEventListener("click", function (e) {
    e.preventDefault(); // evita que se recargue la página

    let pass1 = document.getElementById("contrasena1").value;
    let pass2 = document.getElementById("contrasena2").value;

    // Expresión regular: mínimo 8 caracteres, al menos 1 mayúscula, 1 número y sin espacios
    let regex = /^(?=.*[A-Z])(?=.*\d)[^\s]{8,}$/;

    if (pass1 !== pass2) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    if (!regex.test(pass1)) {
        alert("La contraseña debe tener al menos 8 caracteres, incluir una mayúscula, un número y no contener espacios.");
        return;
    }

    alert("Registro exitoso ✅");
});
