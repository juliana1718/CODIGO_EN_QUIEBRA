// @ts-nocheck
(function () {
    "use strict";

    var juegos = [
        {
            id: "operaciones",
            etiqueta: "DESAFÍO 01",
            titulo: "Operaciones y jerarquía",
            preguntas: [
                { texto: "¿Cuánto es 8 + 4 × 3?", ayuda: "Recuerda: primero multiplicaciones y divisiones.", opciones: ["36", "20", "24", "15"], correcta: 1, explicacion: "Primero se multiplica: 4 × 3 = 12. Luego se suma: 8 + 12 = 20." },
                { texto: "¿Cuánto es (6 + 2) × 5?", ayuda: "Los paréntesis se resuelven primero.", opciones: ["40", "32", "16", "50"], correcta: 0, explicacion: "Primero el paréntesis: 6 + 2 = 8. Luego 8 × 5 = 40." },
                { texto: "¿Cuánto es 2³ (dos elevado al cubo)?", opciones: ["6", "8", "9", "5"], correcta: 1, explicacion: "2³ = 2 × 2 × 2 = 8. No es 2 × 3." },
                { texto: "¿Cuánto es 20 − 6 ÷ 2?", ayuda: "La división va antes que la resta.", opciones: ["7", "17", "10", "14"], correcta: 1, explicacion: "Primero 6 ÷ 2 = 3. Luego 20 − 3 = 17." },
                { texto: "¿Cuánto es 1/2 + 1/4?", ayuda: "Busca un denominador común.", opciones: ["2/6", "3/4", "1/6", "2/4"], correcta: 1, explicacion: "1/2 = 2/4, y 2/4 + 1/4 = 3/4." },
                { texto: "¿Cuál es el valor de √81?", opciones: ["7", "8", "9", "11"], correcta: 2, explicacion: "9 × 9 = 81, por eso la raíz cuadrada de 81 es 9." },
                { texto: "¿Cuánto es −5 + 12?", opciones: ["−7", "17", "7", "−17"], correcta: 2, explicacion: "Es 12 − 5 = 7. Como 12 es mayor que 5, el resultado es positivo." },
                { texto: "¿Cuál es el mínimo común múltiplo (MCM) de 4 y 6?", opciones: ["10", "12", "24", "2"], correcta: 1, explicacion: "Múltiplos de 4: 4, 8, 12. Múltiplos de 6: 6, 12. El menor común es 12 (24 también es común, pero no es el menor)." }
            ]
        },
        {
            id: "porcentajes",
            etiqueta: "DESAFÍO 02",
            titulo: "Porcentajes y regla de tres",
            preguntas: [
                { texto: "¿Cuánto es el 20 % de 150.000?", ayuda: "Escribe solo el número, por ejemplo 30000.", correcta: 30000, explicacion: "150.000 × 20 ÷ 100 = 30.000." },
                { texto: "Un artículo de $80.000 tiene 15 % de descuento. ¿Cuánto pagas?", ayuda: "Pagas el 85 % del precio.", correcta: 68000, explicacion: "80.000 × 0,85 = 68.000." },
                { texto: "Un producto de $50.000 sube un 10 %. ¿Cuál es su nuevo precio?", ayuda: "Escribe solo el número.", correcta: 55000, explicacion: "50.000 × 1,10 = 55.000." },
                { texto: "3 cuadernos cuestan $12.000. ¿Cuánto cuestan 5 cuadernos?", ayuda: "Regla de tres directa: halla primero el precio de uno.", correcta: 20000, explicacion: "Cada cuaderno vale 12.000 ÷ 3 = 4.000. Entonces 5 × 4.000 = 20.000." },
                { texto: "El 25 % de un número es 40. ¿Cuál es el número?", ayuda: "Divide la parte entre 0,25.", correcta: 160, explicacion: "40 ÷ 0,25 = 160. Comprueba: 160 × 0,25 = 40." },
                { texto: "8 obreros terminan una obra en 15 días. ¿En cuántos días la terminarían 12 obreros?", ayuda: "Regla de tres inversa: más obreros, menos días.", correcta: 10, explicacion: "Trabajo total = 8 × 15 = 120. Con 12 obreros: 120 ÷ 12 = 10 días." }
            ]
        },
        {
            id: "ecuaciones",
            etiqueta: "DESAFÍO 03",
            titulo: "Encuentra el valor de x",
            preguntas: [
                { texto: "Resuelve: x + 9 = 25", ayuda: "Escribe solo el valor de x.", correcta: 16, explicacion: "Resta 9 en ambos lados: x = 25 − 9 = 16." },
                { texto: "Resuelve: 3x = 42", ayuda: "Escribe solo el valor de x.", correcta: 14, explicacion: "Divide entre 3 en ambos lados: x = 42 ÷ 3 = 14." },
                { texto: "Resuelve: 2x + 5 = 21", ayuda: "Primero resta 5, luego divide entre 2.", correcta: 8, explicacion: "2x = 21 − 5 = 16, entonces x = 16 ÷ 2 = 8." },
                { texto: "Resuelve: 5x − 7 = 38", ayuda: "Primero suma 7, luego divide entre 5.", correcta: 9, explicacion: "5x = 38 + 7 = 45, entonces x = 45 ÷ 5 = 9." },
                { texto: "Resuelve: x/4 + 3 = 10", ayuda: "Primero resta 3, luego multiplica por 4.", correcta: 28, explicacion: "x/4 = 10 − 3 = 7, entonces x = 7 × 4 = 28." }
            ]
        }
    ];

    var LETRAS = ["A", "B", "C", "D"];
    var formato = new Intl.NumberFormat("es-CO");
    var contenedor = document.getElementById("contenedor-juegos");
    var plantilla = document.getElementById("plantilla-juego");

    if (!contenedor || !plantilla) {
        console.error("Falta #contenedor-juegos o #plantilla-juego en el HTML.");
        return;
    }

    function mostrar(el, visible) {
        el.hidden = !visible;
        el.style.display = visible ? "" : "none";
    }

    function leerNumero(texto) {
        var limpio = texto.replace(/[$\s]/g, "").replace(/\./g, "").replace(",", ".");
        return limpio === "" ? NaN : Number(limpio);
    }

    function crearJuego(datos) {
        var panel = plantilla.content.firstElementChild.cloneNode(true);
        function campo(n) { return panel.querySelector('[data-campo="' + n + '"]'); }
        var partes = panel.querySelectorAll("[data-parte]");

        var el = {
            etiqueta: campo("etiqueta"), titulo: campo("titulo"), contador: campo("contador"),
            progreso: campo("progreso"), barra: panel.querySelector(".barra-progreso"),
            tipo: campo("tipo"), pregunta: campo("pregunta"), ayuda: campo("ayuda"),
            opciones: campo("opciones"), entrada: campo("entrada"), numero: campo("numero"),
            comprobar: campo("comprobar"), mensaje: campo("mensaje"), siguiente: campo("siguiente"),
            salir: campo("salir"), final: campo("final"), tituloFinal: campo("titulo-final"),
            porcentaje: campo("porcentaje"), detalle: campo("detalle"), repetir: campo("repetir")
        };

        var indice = 0;
        var aciertos = 0;
        var total = datos.preguntas.length;

        el.etiqueta.textContent = datos.etiqueta;
        el.titulo.textContent = datos.titulo;

        function progreso(hechas) {
            var pct = Math.round((hechas / total) * 100);
            el.progreso.style.width = pct + "%";
            el.barra.setAttribute("aria-valuenow", String(pct));
        }

        function decir(texto, ok) {
            el.mensaje.textContent = texto;
            el.mensaje.className = "mensaje-juego " + (ok ? "correcto" : "error");
        }

        function terminar(acierto, explicacion) {
            if (acierto) aciertos++;
            decir((acierto ? "¡Correcto! " : "Casi. ") + explicacion, acierto);
            el.siguiente.disabled = false;
            el.siguiente.textContent = indice === total - 1 ? "Ver resultado →" : "Siguiente pregunta →";
            progreso(indice + 1);
            el.siguiente.focus();
        }

        function mostrarPregunta() {
            var p = datos.preguntas[indice];
            var numerica = !p.opciones;

            el.contador.textContent = "Pregunta " + (indice + 1) + " de " + total;
            el.tipo.textContent = "PREGUNTA " + (indice + 1);
            el.pregunta.textContent = p.texto;
            el.ayuda.textContent = p.ayuda || "";
            el.mensaje.textContent = "";
            el.mensaje.className = "mensaje-juego";
            el.siguiente.disabled = true;
            el.opciones.innerHTML = "";

            mostrar(el.opciones, !numerica);
            mostrar(el.entrada, numerica);

            if (numerica) {
                el.numero.value = "";
                el.numero.disabled = false;
                el.comprobar.disabled = false;
            } else {
                p.opciones.forEach(function (texto, i) {
                    var b = document.createElement("button");
                    b.type = "button";
                    b.className = "opcion-quiz";
                    var letra = document.createElement("span");
                    letra.textContent = LETRAS[i];
                    b.appendChild(letra);
                    b.appendChild(document.createTextNode(texto));
                    b.addEventListener("click", function () {
                        var botones = el.opciones.querySelectorAll("button");
                        botones.forEach(function (x) { x.disabled = true; });
                        var acierto = i === p.correcta;
                        b.classList.add(acierto ? "correcta" : "incorrecta");
                        botones[p.correcta].classList.add("correcta");
                        terminar(acierto, p.explicacion);
                    });
                    el.opciones.appendChild(b);
                });
            }
        }

        function comprobar() {
            var p = datos.preguntas[indice];
            var valor = leerNumero(el.numero.value);
            if (isNaN(valor)) {
                decir("Escribe un número válido, por ejemplo 38000.", false);
                el.numero.focus();
                return;
            }
            el.numero.disabled = true;
            el.comprobar.disabled = true;
            var acierto = Math.abs(valor - p.correcta) < 0.5;
            terminar(acierto, acierto ? p.explicacion : "La respuesta era " + formato.format(p.correcta) + ". " + p.explicacion);
        }

        function resultado() {
            partes.forEach(function (x) { mostrar(x, false); });
            mostrar(el.final, true);
            el.porcentaje.textContent = Math.round((aciertos / total) * 100) + "%";
            el.detalle.textContent = "Acertaste " + aciertos + " de " + total + " preguntas.";
            progreso(total);
            el.tituloFinal.focus();
        }

        function reiniciar() {
            indice = 0;
            aciertos = 0;
            mostrar(el.final, false);
            partes.forEach(function (x) { mostrar(x, true); });
            progreso(0);
            mostrarPregunta();
            el.pregunta.focus();
        }

        el.comprobar.addEventListener("click", comprobar);
        el.numero.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
                if (!el.comprobar.disabled) comprobar();
            }
        });
        el.siguiente.addEventListener("click", function () {
            if (indice < total - 1) {
                indice++;
                mostrarPregunta();
                el.pregunta.focus();
            } else {
                resultado();
            }
        });
        el.repetir.addEventListener("click", reiniciar);

        contenedor.appendChild(panel);

        return {
            abrir: function () {
                mostrar(panel, true);
                reiniciar();
                panel.scrollIntoView({ behavior: "smooth", block: "start" });
            },
            cerrar: function () { mostrar(panel, false); },
            botonSalir: el.salir
        };
    }

    var instancias = [];

    juegos.forEach(function (datos) {
        var boton = document.getElementById("iniciar-" + datos.id);
        if (!boton) {
            console.warn("No existe el botón #iniciar-" + datos.id);
            return;
        }
        var juego = crearJuego(datos);
        instancias.push(juego);

        boton.addEventListener("click", function () {
            instancias.forEach(function (j) { j.cerrar(); });
            juego.abrir();
        });

        juego.botonSalir.addEventListener("click", function () {
            juego.cerrar();
            boton.focus();
            boton.scrollIntoView({ behavior: "smooth", block: "center" });
        });
    });

    console.log("Juegos de matemáticas listos:", instancias.length);
})();