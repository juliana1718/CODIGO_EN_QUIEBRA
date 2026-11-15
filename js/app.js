import { estudianteBase } from "./datos.js";
import { cargarFicha, guardarFicha } from "./storage.js";
import { renderTarjeta, mostrarMensaje } from "./ui.js";

const form = document.querySelector("#form-ficha");

let ficha = cargarFicha(estudianteBase);

// Mostrar la información guardada al abrir la página
renderTarjeta(ficha, "");

const CAMPOS = [
    { id: "nombre", vacio: "El nombre completo es obligatorio." },
    { id: "programa", vacio: "El programa de formación es obligatorio." },
    {
        id: "correo",
        vacio: "El correo electrónico es obligatorio.",
        invalido: "Escribe un correo válido, por ejemplo correo@ejemplo.com."
    },
    { id: "frase", vacio: "La frase personal es obligatoria." }
];

// Devuelve el primer error encontrado o null si todo está bien
function validar(datos) {
    for (const campo of CAMPOS) {
        const input = form.elements[campo.id];
        input.removeAttribute("aria-invalid");

        const valor = datos.get(campo.id).trim();
        let texto = "";

        if (!valor) {
            texto = campo.vacio;
        } else if (campo.invalido && !input.validity.valid) {
            texto = campo.invalido;
        }

        if (texto) {
            input.setAttribute("aria-invalid", "true");
            return { input, texto };
        }
    }
    return null;
}

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const datos = new FormData(form);
    const error = validar(datos);

    if (error) {
        mostrarMensaje(error.texto);
        error.input.focus();
        return;
    }

    ficha = {
        ...ficha,
        nombre: datos.get("nombre").trim(),
        programa: datos.get("programa").trim(),
        correo: datos.get("correo").trim(),
        frase: datos.get("frase").trim()
    };

    if (!guardarFicha(ficha)) {
        mostrarMensaje("No se pudo guardar la información. Intenta nuevamente.");
        return;
    }

    renderTarjeta(ficha, "¡Tu información se guardó correctamente!");
});