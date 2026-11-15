// @ts-nocheck
(function () {
    "use strict";

    var productos = [
        { categoria: "Equipos", icono: "💻", nombre: "Portátil para estudiar", descripcion: "Para programar cómodo busca 8 GB de RAM como mínimo (16 GB es mejor) y disco SSD." },
        { categoria: "Equipos", icono: "⌨️", nombre: "Teclado y mouse", descripcion: "Un buen teclado y un mouse cómodo ayudan a escribir código y registrar datos por horas." },
        { categoria: "Equipos", icono: "🖥️", nombre: "Monitor adicional", descripcion: "Una segunda pantalla permite tener el editor y la documentación a la vez." },
        { categoria: "Equipos", icono: "🎧", nombre: "Audífonos con micrófono", descripcion: "Útiles para clases virtuales, tutoriales y reuniones de equipo." },
        { categoria: "Equipos", icono: "🧮", nombre: "Calculadora científica", descripcion: "Apoya el cálculo de porcentajes, potencias y raíces en matemáticas." },
        { categoria: "Software", icono: "🧑‍💻", nombre: "Visual Studio Code", descripcion: "Editor de código gratuito para HTML, CSS, JavaScript y muchos lenguajes más.", enlace: "https://code.visualstudio.com" },
        { categoria: "Software", icono: "🐙", nombre: "Git y GitHub", descripcion: "Guardan el historial de tu proyecto y permiten publicarlo y compartirlo.", enlace: "https://github.com" },
        { categoria: "Software", icono: "🐍", nombre: "Python", descripcion: "Lenguaje sencillo para aprender lógica de programación y automatizar tareas.", enlace: "https://www.python.org" },
        { categoria: "Software", icono: "📊", nombre: "Hojas de cálculo", descripcion: "Excel o Google Sheets sirven para llevar cuentas, calcular el IVA y hacer gráficas." },
        { categoria: "Software", icono: "📒", nombre: "Software contable", descripcion: "Programas como Siigo o Alegra se usan en empresas para facturar y llevar la contabilidad." },
        { categoria: "Aprendizaje", icono: "📘", nombre: "MDN Web Docs", descripcion: "Documentación completa y en español de HTML, CSS y JavaScript.", enlace: "https://developer.mozilla.org/es/" },
        { categoria: "Aprendizaje", icono: "🔥", nombre: "freeCodeCamp", descripcion: "Cursos gratis y prácticos para aprender desarrollo web paso a paso.", enlace: "https://www.freecodecamp.org" },
        { categoria: "Aprendizaje", icono: "🎓", nombre: "Khan Academy", descripcion: "Lecciones y ejercicios de matemáticas desde lo básico, en español.", enlace: "https://es.khanacademy.org" },
        { categoria: "Aprendizaje", icono: "🏛️", nombre: "Página de la DIAN", descripcion: "Fuente oficial para confirmar tarifas del IVA y normas tributarias vigentes.", enlace: "https://www.dian.gov.co" }
    ];

    var lista = document.getElementById("lista-catalogo");
    var conteo = document.getElementById("conteo");
    var buscador = document.getElementById("buscar");
    var botones = document.querySelectorAll("[data-filtro]");
    var filtroActual = "todos";

    if (!lista) {
        console.error("Falta #lista-catalogo en el HTML.");
        return;
    }

    function crearTarjeta(p) {
        var tarjeta = document.createElement("article");
        tarjeta.className = "tarjeta";

        var icono = document.createElement("div");
        icono.className = "icono-tarjeta";
        icono.setAttribute("aria-hidden", "true");
        icono.textContent = p.icono;

        var etiqueta = document.createElement("span");
        etiqueta.className = "etiqueta";
        etiqueta.textContent = p.categoria.toUpperCase();

        var titulo = document.createElement("h3");
        titulo.textContent = p.nombre;

        var texto = document.createElement("p");
        texto.textContent = p.descripcion;

        tarjeta.appendChild(icono);
        tarjeta.appendChild(etiqueta);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(texto);

        if (p.enlace) {
            var enlace = document.createElement("a");
            enlace.href = p.enlace;
            enlace.target = "_blank";
            enlace.rel = "noopener noreferrer";
            enlace.textContent = "Visitar sitio (se abre en otra pestaña)";
            tarjeta.appendChild(enlace);
        }

        return tarjeta;
    }

    function dibujar() {
        var texto = buscador.value.trim().toLowerCase();
        lista.innerHTML = "";

        var visibles = productos.filter(function (p) {
            var coincideCategoria = filtroActual === "todos" || p.categoria === filtroActual;
            var coincideTexto =
                texto === "" ||
                p.nombre.toLowerCase().indexOf(texto) !== -1 ||
                p.descripcion.toLowerCase().indexOf(texto) !== -1;
            return coincideCategoria && coincideTexto;
        });

        visibles.forEach(function (p) { lista.appendChild(crearTarjeta(p)); });

        conteo.textContent = visibles.length === 0
            ? "No encontramos resultados. Prueba con otra palabra o categoría."
            : "Mostrando " + visibles.length + " de " + productos.length + " recursos.";
    }

    botones.forEach(function (boton) {
        boton.addEventListener("click", function () {
            filtroActual = boton.getAttribute("data-filtro");
            botones.forEach(function (b) {
                b.setAttribute("aria-pressed", b === boton ? "true" : "false");
            });
            dibujar();
        });
    });

    buscador.addEventListener("input", dibujar);

    dibujar();
})();