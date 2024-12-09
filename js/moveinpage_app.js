

(function () {
    // Añadir un listener al botón para hacer scroll a la sección
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("scrollApp").addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById("tracking__app").scrollIntoView({ behavior: 'smooth' });
        });
    });
    
})();

