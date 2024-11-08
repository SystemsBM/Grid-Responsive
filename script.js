function actualizarDimensiones() {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    document.getElementById('ancho').textContent = ancho;
    document.getElementById('alto').textContent = alto;
}

window.addEventListener('resize', actualizarDimensiones);
document.addEventListener('DOMContentLoaded', actualizarDimensiones);
