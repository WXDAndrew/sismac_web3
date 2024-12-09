

(function () {
    // Añadir un listener al botón para hacer scroll a la sección
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("scrollContacto").addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById("contacto").scrollIntoView({ behavior: 'smooth' });
        });
    });
    
})();

