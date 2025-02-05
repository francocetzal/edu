function mostrarAlerta() {
    alert('¡SABIA QUE ME PERDONARIAS, GRACIAS POR LA PACIENCIA!');
}

function rechazarPerdon() {
    // Mover el botón a una posición aleatoria después de hacer clic en "Aceptar" en el alert
    setTimeout(function() {
        var boton = document.getElementById('rechazarBtn');
        
        // Obtener el ancho y alto de la ventana
        var maxX = window.innerWidth - boton.offsetWidth;
        var maxY = window.innerHeight - boton.offsetHeight;

        // Generar una posición aleatoria dentro de la página
        var randomX = Math.floor(Math.random() * maxX);
        var randomY = Math.floor(Math.random() * maxY);

        // Establecer la nueva posición del botón
        boton.style.position = 'absolute';
        boton.style.left = randomX + 'px';
        boton.style.top = randomY + 'px';
    }, 100); // Un pequeño retraso para que se vea bien el efecto
}
