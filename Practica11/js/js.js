const persona = {
    foto: "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
    nombre: "Homero",
    apellido: "Simpson",
    edad: 40,
    profesion: "Empleado de planta nuclear",
    direccion: { calle: "742 Evergreen Terrace", ciudad: "Springfield", estado: "Illinois" },
    hobbies: ["Comer donas", "Ver televisión", "Beber cerveza DUFF"]
};

const persona2 = {
    foto: "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png",
    nombre: "Marge",
    apellido: "Simpson",
    edad: 38,
    profesion: "Ama de casa",
    direccion: { calle: "742 Evergreen Terrace", ciudad: "Springfield", estado: "Illinois" },
    hobbies: ["Cocinar", "Cuidar de la familia", "Pintar"]
};

const persona3 = {
    foto: "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
    nombre: "Bart",
    apellido: "Simpson",
    edad: 10,
    profesion: "Estudiante",
    direccion: { calle: "742 Evergreen Terrace", ciudad: "Springfield", estado: "Illinois" },
    hobbies: ["Andar en patineta", "Hacer travesuras", "Ver Krusty el payaso"]
};

const persona4 = {
    foto: "https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png",
    nombre: "Lisa",
    apellido: "Simpson",
    edad: 8,
    profesion: "Estudiante",
    direccion: { calle: "742 Evergreen Terrace", ciudad: "Springfield", estado: "Illinois" },
    hobbies: ["Tocar el saxofón", "Leer", "Estudiar"]
};

const persona5 = {
    foto: "https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png",
    nombre: "Maggie",
    apellido: "Simpson",
    edad: 1,
    profesion: "Bebé",
    direccion: { calle: "742 Evergreen Terrace", ciudad: "Springfield", estado: "Illinois" },
    hobbies: ["Chupar chupón", "Dormir", "Gatear"]
};

// Función para imprimir datos en cada card
function imprimirDatos(persona, id) {
    document.getElementById("foto" + id).src = persona.foto;
    document.getElementById("nombre" + id).innerText = persona.nombre + " " + persona.apellido;
    document.getElementById("edad" + id).innerText = persona.edad + " años";
    document.getElementById("profesion" + id).innerText = persona.profesion;
    document.getElementById("direccion" + id).innerText = persona.direccion.calle + ", " + persona.direccion.ciudad + ", " + persona.direccion.estado;

    persona.hobbies.forEach(hobby => {
        let li = document.createElement("li");
        li.innerText = hobby;
        document.getElementById("hobbies" + id).appendChild(li);
    });
}

// Llenar todas las cards
imprimirDatos(persona, "");
imprimirDatos(persona2, "2");
imprimirDatos(persona3, "3");
imprimirDatos(persona4, "4");
imprimirDatos(persona5, "5");
