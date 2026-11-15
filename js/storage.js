
const CLAVE = "codigoEnQuiebra_usuario";

export function guardarFicha(ficha) {
    try {
        localStorage.setItem(CLAVE, JSON.stringify(ficha));
        return true;
    } catch (error) {
        console.error("No se pudo guardar la información:", error);
        return false;
    }
}

export function cargarFicha(respaldo) {
    try {
        const datos = localStorage.getItem(CLAVE);

        if (!datos) {
            return respaldo;
        }

        const fichaGuardada = JSON.parse(datos);

        return {
            ...respaldo,
            ...fichaGuardada
        };

    } catch (error) {
        console.error("No se pudo leer la información:", error);
        return respaldo;
    }
}
