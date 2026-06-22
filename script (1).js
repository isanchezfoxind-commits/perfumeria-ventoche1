function mostrarSeccion(id) {

    let secciones =
        document.getElementsByClassName("contenido");

    for (let i = 0; i < secciones.length; i++) {

        secciones[i].style.display = "none";
    }

    document.getElementById(id).style.display = "block";
}

/* Mostrar primera sección al cargar */

window.onload = function () {
    mostrarSeccion("tipos");
};