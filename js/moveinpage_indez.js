
(function () {
    // Añadir un listener al botón para hacer scroll a la sección
    document.getElementById("scrollStart").addEventListener("click", function (event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        document.getElementById("start").scrollIntoView({ behavior: 'smooth' });
    });
})();



