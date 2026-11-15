
export function renderTarjeta(ficha, mensaje = "") {
    const nombre = document.querySelector("#tarjeta-nombre");
    const programa = document.querySelector("#tarjeta-programa");
    const correo = document.querySelector("#tarjeta-correo");
    const frase = document.querySelector("#tarjeta-frase");

    nombre.textContent = ficha.nombre || "Tu nombre aparecerá aquí";
    programa.textContent = ficha.programa || "Pendiente";
    correo.textContent = ficha.correo || "Pendiente";
    frase.textContent = ficha.frase || "Pendiente";

    mostrarMensaje(mensaje);
}

export function mostrarMensaje(texto) {
    const mensaje = document.querySelector("#mensaje");

    if (mensaje) {
        mensaje.textContent = texto;
    }
}
