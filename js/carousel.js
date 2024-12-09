document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    const carousel = document.querySelector('.carousel');

    const itemWidth = document.querySelector('.carousel__item').offsetWidth + 20; // Ancho de cada item + margen

    // Función para desplazarse hacia adelante
    function moveNext() {
        if (carousel.scrollLeft >= (carousel.scrollWidth - carousel.clientWidth)) {
            // Si estamos al final, volvemos al principio
            carousel.scrollLeft = 0;
        } else {
            // Desplaza hacia adelante
            carousel.scrollLeft += itemWidth;
        }
    }

    // Función para desplazarse hacia atrás
    function movePrev() {
        if (carousel.scrollLeft === 0) {
            // Si estamos al principio, vamos al final
            carousel.scrollLeft = carousel.scrollWidth;
        } else {
            // Desplaza hacia atrás
            carousel.scrollLeft -= itemWidth;
        }
    }

    nextButton.addEventListener('click', moveNext);
    prevButton.addEventListener('click', movePrev);

    // Desplazamiento automático cada 5 segundos
    let autoSlide = setInterval(moveNext, 5000);

    // Función para deshabilitar los botones cuando se llega al límite (opcional)
    function checkButtons() {
        prevButton.style.opacity = carousel.scrollLeft === 0 ? '0.5' : '1';
        nextButton.style.opacity = carousel.scrollLeft >= (carousel.scrollWidth - carousel.clientWidth) ? '0.5' : '1';
    }

    carousel.addEventListener('scroll', checkButtons);
    window.addEventListener('resize', checkButtons);

    checkButtons();  // Llama a la función inicialmente

    // Pausar el desplazamiento automático cuando el usuario interactúe con las flechas
    prevButton.addEventListener('click', () => {
        clearInterval(autoSlide);
        autoSlide = setInterval(moveNext, 5000); // Reinicia el desplazamiento automático después de 5 segundos
    });

    nextButton.addEventListener('click', () => {
        clearInterval(autoSlide);
        autoSlide = setInterval(moveNext, 5000); // Reinicia el desplazamiento automático después de 5 segundos
    });

    // Pausar el desplazamiento automático cuando el usuario pase el mouse sobre el carrusel
    carousel.addEventListener('mouseover', () => {
        clearInterval(autoSlide); // Pausa el auto-slide cuando el mouse está sobre el carrusel
    });

    carousel.addEventListener('mouseout', () => {
        autoSlide = setInterval(moveNext, 5000); // Reinicia el auto-slide cuando el mouse sale del carrusel
    });
});
