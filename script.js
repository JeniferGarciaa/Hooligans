// CONTROL DEL VISOR DE LOCACIONES
function inicializarGaleria() {
    const modal = document.getElementById("modal-visor");
    const imgAmpliada = document.getElementById("img-ampliada");
    const tituloModal = document.getElementById("titulo-modal");
    const botonCerrar = document.querySelector(".cerrar-modal");
    const tarjetas = document.querySelectorAll(".tarjeta-locacion");

    // Verificar que todos los elementos existan en la página antes de actuar
    if (!modal || !imgAmpliada || !tarjetas.length) {
        console.log("Faltan elementos en el HTML para la galería.");
        return;
    }

    // Asignar el evento de clic a cada tarjeta
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener("click", function () {
            const img = this.querySelector(".img-locacion");
            const titulo = this.querySelector(".info-locacion h3");
            
            if (img && titulo) {
                modal.style.display = "block";
                imgAmpliada.src = img.src;
                tituloModal.innerHTML = titulo.innerHTML;
            }
        });
    });

    // Cerrar con la X
    if (botonCerrar) {
        botonCerrar.addEventListener("click", function () {
            modal.style.display = "none";
        });
    }

    // Cerrar al hacer clic en el fondo negro
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}

// Ejecutar cuando la página termine de cargar por completo
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inicializarGaleria);
} else {
    inicializarGaleria();
}