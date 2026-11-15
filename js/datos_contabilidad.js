// @ts-nocheck
(function () {
    "use strict";

    var juegos = [
        {
            id: "puc",
            etiqueta: "DESAFÍO 01",
            titulo: "Clasifica las cuentas del PUC",
            preguntas: [
                { texto: "¿Qué clase del PUC agrupa los pasivos?", opciones: ["Clase 1", "Clase 2", "Clase 3", "Clase 5"], correcta: 1, explicacion: "La clase 2 es Pasivo: las obligaciones de la empresa con terceros." },
                { texto: "La cuenta 1105 corresponde a:", opciones: ["Bancos", "Caja", "Clientes", "Proveedores nacionales"], correcta: 1, explicacion: "1105 es Caja, el dinero en efectivo que tiene la empresa." },
                { texto: "Las cuentas de la clase 4 registran:", opciones: ["Gastos", "Costos de ventas", "Ingresos", "Patrimonio"], correcta: 2, explicacion: "La clase 4 es Ingresos, por ejemplo las ventas (4135)." },
                { texto: "¿Cuál es el código de la cuenta Bancos?", opciones: ["1105", "1110", "1305", "2205"], correcta: 1, explicacion: "1110 es Bancos. 1105 es Caja y 1305 es Clientes." },
                { texto: "La cuenta 2205 Proveedores nacionales es:", opciones: ["Un activo", "Un ingreso", "Un pasivo", "Un gasto"], correcta: 2, explicacion: "Empieza por 2, así que es un pasivo: lo que la empresa debe a sus proveedores." },
                { texto: "¿Qué clase agrupa gastos como salarios y servicios (5105 y 5135)?", opciones: ["Clase 3", "Clase 5", "Clase 6", "Clase 4"], correcta: 1, explicacion: "La clase 5 es Gastos." },
                { texto: "¿Cuál de estas cuentas pertenece al patrimonio?", opciones: ["3105 Capital suscrito y pagado", "2408 Impuesto sobre las ventas por pagar", "1305 Clientes", "4135 Comercio al por mayor y al por menor"], correcta: 0, explicacion: "La clase 3 es Patrimonio, y 3105 es el capital aportado por los socios." },
                { texto: "La clase 6 del PUC corresponde a:", opciones: ["Costos de producción", "Cuentas de orden", "Costos de ventas", "Ingresos no operacionales"], correcta: 2, explicacion: "La clase 6 es Costos de ventas. Los costos de producción son la clase 7." }
            ]
        },
        {
            id: "partida",
            etiqueta: "DESAFÍO 02",
            titulo: "Partida doble: débito y crédito",
            preguntas: [
                { texto: "Compras mercancía de contado por $500.000 (sin IVA).", ayuda: "Elige qué cuenta se debita y cuál se acredita.", opciones: ["Débito 1105 Caja · Crédito 1435 Mercancías", "Débito 1435 Mercancías · Crédito 1105 Caja", "Débito 5135 Servicios · Crédito 1105 Caja", "Débito 1435 Mercancías · Crédito 4135 Ventas"], correcta: 1, explicacion: "Entra mercancía (activo aumenta, débito) y sale efectivo (activo disminuye, crédito)." },
                { texto: "Vendes mercancía a crédito por $800.000 (sin IVA).", ayuda: "Elige qué cuenta se debita y cuál se acredita.", opciones: ["Débito 1105 Caja · Crédito 4135 Ingresos", "Débito 4135 Ingresos · Crédito 1305 Clientes", "Débito 1305 Clientes · Crédito 4135 Ingresos", "Débito 1305 Clientes · Crédito 1435 Mercancías"], correcta: 2, explicacion: "El cliente te debe (1305 aumenta, débito) y se reconoce el ingreso por la venta (crédito)." },
                { texto: "Pagas en efectivo el servicio de internet de la empresa por $90.000.", ayuda: "Elige qué cuenta se debita y cuál se acredita.", opciones: ["Débito 5135 Servicios · Crédito 1105 Caja", "Débito 1105 Caja · Crédito 5135 Servicios", "Débito 2205 Proveedores · Crédito 5135 Servicios", "Débito 5135 Servicios · Crédito 4135 Ingresos"], correcta: 0, explicacion: "El gasto aumenta (débito) y sale dinero de la caja (crédito)." },
                { texto: "Un socio aporta $2.000.000 que se consignan en el banco.", ayuda: "Elige qué cuenta se debita y cuál se acredita.", opciones: ["Débito 3105 Capital · Crédito 1110 Bancos", "Débito 1105 Caja · Crédito 3105 Capital", "Débito 1110 Bancos · Crédito 3105 Capital", "Débito 1110 Bancos · Crédito 2105 Obligaciones"], correcta: 2, explicacion: "Entra dinero al banco (débito) y aumenta el patrimonio por el aporte (crédito)." },
                { texto: "Un cliente te paga en efectivo una factura de $300.000.", ayuda: "Elige qué cuenta se debita y cuál se acredita.", opciones: ["Débito 1105 Caja · Crédito 1305 Clientes", "Débito 1305 Clientes · Crédito 1105 Caja", "Débito 1105 Caja · Crédito 4135 Ingresos", "Débito 4135 Ingresos · Crédito 1305 Clientes"], correcta: 0, explicacion: "Entra efectivo (débito) y disminuye lo que el cliente te debía (crédito). El ingreso ya se registró en la venta." },
                { texto: "Compras un computador a crédito por $2.500.000 (sin IVA).", ayuda: "Elige qué cuenta se debita y cuál se acredita.", opciones: ["Débito 1528 Equipo de computación · Crédito 2205 Proveedores nacionales", "Débito 2205 Proveedores nacionales · Crédito 1528 Equipo de computación", "Débito 5135 Servicios · Crédito 2205 Proveedores nacionales", "Débito 1528 Equipo de computación · Crédito 1105 Caja"], correcta: 0, explicacion: "El activo aumenta (débito) y nace una deuda con el proveedor (pasivo, crédito)." }
            ]
        },
        {
            id: "iva",
            etiqueta: "DESAFÍO 03",
            titulo: "Calcula el IVA",
            preguntas: [
                { texto: "Un producto cuesta $200.000 antes de IVA. ¿Cuánto es el IVA al 19 %?", ayuda: "Escribe solo el número, por ejemplo 38000.", correcta: 38000, explicacion: "IVA = 200.000 × 0,19 = 38.000." },
                { texto: "Para ese mismo producto, ¿cuál es el valor total a pagar con IVA incluido?", ayuda: "Escribe solo el número.", correcta: 238000, explicacion: "Total = 200.000 + 38.000 = 238.000." },
                { texto: "Una factura tiene un total de $119.000 con IVA del 19 % incluido. ¿Cuál es el valor antes de IVA?", ayuda: "Divide el total entre 1,19.", correcta: 100000, explicacion: "Base = 119.000 ÷ 1,19 = 100.000." },
                { texto: "En el periodo vendiste $800.000 y compraste $450.000 (valores antes de IVA, tarifa 19 %). ¿Cuánto IVA debes pagar?", ayuda: "IVA a pagar = IVA generado − IVA descontable.", correcta: 66500, explicacion: "Generado: 800.000 × 0,19 = 152.000. Descontable: 450.000 × 0,19 = 85.500. A pagar: 66.500." },
                { texto: "Vendes un servicio de $450.000 antes de IVA. ¿Cuánto debe pagar el cliente en total con IVA del 19 %?", ayuda: "Escribe solo el número.", correcta: 535500, explicacion: "450.000 × 1,19 = 535.500." }
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
            terminar(acierto, acierto ? p.explicacion : "La respuesta era $" + formato.format(p.correcta) + ". " + p.explicacion);
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

    console.log("Juegos de contabilidad listos:", instancias.length);
})();
