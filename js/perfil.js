// @ts-nocheck
(function () {
    "use strict";

    var CAMPOS = ["nombre", "programa", "correo", "frase"];

    function leerObjeto(texto) {
        try {
            var obj = JSON.parse(texto);
            if (obj && typeof obj === "object" && !Array.isArray(obj)) return obj;
        } catch (e) { /* no era JSON */ }
        return null;
    }

    function esFicha(obj) {
        return CAMPOS.some(function (c) { return obj[c]; });
    }

    // Busca la ficha en localStorage y sessionStorage, sin importar con qué clave la guardó app.js
    function buscarFicha() {
        var almacenes = [window.localStorage, window.sessionStorage];

        for (var a = 0; a < almacenes.length; a++) {
            var almacen = almacenes[a];
            try {
                for (var i = 0; i < almacen.length; i++) {
                    var clave = almacen.key(i);
                    var obj = leerObjeto(almacen.getItem(clave));
                    if (obj && esFicha(obj)) {
                        return { almacen: almacen, claves: [clave], datos: obj };
                    }
                }

                // Por si cada campo se guardó en su propia clave
                var sueltos = {};
                var encontrados = [];
                CAMPOS.forEach(function (c) {
                    var v = almacen.getItem(c);
                    if (v) { sueltos[c] = v; encontrados.push(c); }
                });
                if (encontrados.length > 0) {
                    return { almacen: almacen, claves: encontrados, datos: sueltos };
                }
            } catch (e) {
                console.warn("No se pudo leer el almacenamiento:", e);
            }
        }
        return null;
    }

    function poner(id, texto) {
        var el = document.getElementById(id);
        if (el) el.textContent = texto || "No registrado";
    }

    var ficha = buscarFicha();
    var seccionDatos = document.getElementById("datos");
    var seccionVacia = document.getElementById("sin-datos");

    if (!ficha) {
        seccionVacia.hidden = false;
        return;
    }

    var d = ficha.datos;
    seccionDatos.hidden = false;

    poner("perfil-nombre", d.nombre);
    poner("perfil-nombre-completo", d.nombre);
    poner("perfil-programa-corto", d.programa);
    poner("perfil-programa", d.programa);
    poner("perfil-correo", d.correo);
    poner("perfil-frase", d.frase);

    var inicial = document.getElementById("perfil-inicial");
    if (inicial && d.nombre) inicial.textContent = d.nombre.trim().charAt(0).toUpperCase();

    document.getElementById("borrar-perfil").addEventListener("click", function () {
        if (!window.confirm("¿Seguro que quieres borrar tus datos? Esta acción no se puede deshacer.")) return;
        ficha.claves.forEach(function (clave) { ficha.almacen.removeItem(clave); });
        window.location.reload();
    });
})();