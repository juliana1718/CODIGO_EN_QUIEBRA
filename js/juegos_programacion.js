// ========================================
// CÓDIGO EN QUIEBRA - JUEGOS DE PROGRAMACIÓN
// ========================================

const comportamientoScroll = matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";

// ---------- Funciones compartidas por los dos juegos ----------

function actualizarProgreso(barra, actual, total) {
    barra.style.width = `${(actual / total) * 100}%`;
}

function mostrarResultado(elemento, texto, tipo = "") {
    elemento.textContent = texto;
    elemento.className = tipo ? `mensaje-juego ${tipo}` : "mensaje-juego";
}

function abrirPanel(panel) {
    panel.hidden = false;
    panel.scrollIntoView({ behavior: comportamientoScroll, block: "start" });
}

function calcularPorcentaje(puntos, total) {
    return Math.round((puntos / total) * 100);
}

// ========================================
// JUEGO 1 - VERDADERO O FALSO
// ========================================

const preguntas = [
    {
        pregunta: "Una variable permite almacenar información en un programa.",
        respuesta: "verdadero",
        explicacion: "¡Correcto! Las variables almacenan datos que podemos utilizar."
    },
    {
        pregunta: "HTML es un lenguaje de programación utilizado para realizar cálculos matemáticos.",
        respuesta: "falso",
        explicacion: "HTML es un lenguaje de marcado que estructura las páginas web."
    },
    {
        pregunta: "Python utiliza la instrucción print() para mostrar información en pantalla.",
        respuesta: "verdadero",
        explicacion: "¡Muy bien! print() permite mostrar información en Python."
    },
    {
        pregunta: "CSS permite modificar los colores y el diseño de una página web.",
        respuesta: "verdadero",
        explicacion: "¡Excelente! CSS controla la presentación visual de una página."
    },
    {
        pregunta: "JavaScript permite agregar interactividad a una página web.",
        respuesta: "verdadero",
        explicacion: "¡Correcto! JavaScript permite crear funciones interactivas."
    },
    {
        pregunta: "Una condición if se utiliza para repetir instrucciones indefinidamente.",
        respuesta: "falso",
        explicacion: "if permite evaluar condiciones. Los ciclos como while y for permiten repetir instrucciones."
    },
    {
        pregunta: "El ciclo for permite recorrer una secuencia de elementos.",
        respuesta: "verdadero",
        explicacion: "¡Correcto! for permite recorrer secuencias y repetir instrucciones."
    },
    {
        pregunta: "Un algoritmo es una serie ordenada de pasos para solucionar un problema.",
        respuesta: "verdadero",
        explicacion: "¡Excelente! Un algoritmo describe los pasos necesarios para resolver un problema."
    }
];

const panelQuiz = document.getElementById("panel-quiz");
const preguntaQuiz = document.getElementById("pregunta-quiz");
const contadorQuiz = document.getElementById("contador-quiz");
const progresoQuiz = document.getElementById("progreso-quiz");
const resultadoQuiz = document.getElementById("resultado-quiz");
const siguienteQuiz = document.getElementById("siguiente-quiz");
const finalQuiz = document.getElementById("final-quiz");
const opcionesQuiz = document.querySelectorAll(".opcion-quiz");

const partesQuiz = [
    document.querySelector("#panel-quiz .pregunta-contenedor"),
    document.querySelector("#panel-quiz .opciones-quiz"),
    resultadoQuiz,
    document.querySelector("#panel-quiz .juego-acciones")
];

let indicePregunta = 0;
let puntosQuiz = 0;
let respondidaQuiz = false;

function iniciarQuiz() {
    indicePregunta = 0;
    puntosQuiz = 0;
    respondidaQuiz = false;

    finalQuiz.hidden = true;
    partesQuiz.forEach(parte => { parte.hidden = false; });

    abrirPanel(panelQuiz);
    mostrarPregunta();
}

function mostrarPregunta() {
    const actual = preguntas[indicePregunta];

    preguntaQuiz.textContent = actual.pregunta;
    contadorQuiz.textContent =
        `Pregunta ${indicePregunta + 1} de ${preguntas.length}`;
    document.getElementById("numero-pregunta").textContent =
        "Responde correctamente para conseguir puntos.";

    actualizarProgreso(progresoQuiz, indicePregunta, preguntas.length);
    mostrarResultado(resultadoQuiz, "");

    siguienteQuiz.disabled = true;
    respondidaQuiz = false;

    opcionesQuiz.forEach(boton => {
        boton.disabled = false;
        boton.classList.remove("correcta", "incorrecta");
    });

    siguienteQuiz.textContent =
        indicePregunta === preguntas.length - 1
            ? "Ver mi resultado"
            : "Siguiente pregunta →";

    preguntaQuiz.focus();
}

opcionesQuiz.forEach(boton => {
    boton.addEventListener("click", () => {
        if (respondidaQuiz) return;
        respondidaQuiz = true;

        const seleccion = boton.dataset.respuesta;
        const actual = preguntas[indicePregunta];

        opcionesQuiz.forEach(opcion => {
            opcion.disabled = true;
            if (opcion.dataset.respuesta === actual.respuesta) {
                opcion.classList.add("correcta");
            }
        });

        if (seleccion === actual.respuesta) {
            puntosQuiz++;
            mostrarResultado(
                resultadoQuiz,
                "¡Respuesta correcta! " + actual.explicacion,
                "correcto"
            );
        } else {
            boton.classList.add("incorrecta");
            mostrarResultado(
                resultadoQuiz,
                "Respuesta incorrecta. " + actual.explicacion,
                "error"
            );
        }

        siguienteQuiz.disabled = false;
        actualizarProgreso(progresoQuiz, indicePregunta + 1, preguntas.length);
        siguienteQuiz.focus();
    });
});

siguienteQuiz.addEventListener("click", () => {
    if (!respondidaQuiz) return;

    indicePregunta++;

    if (indicePregunta < preguntas.length) {
        mostrarPregunta();
    } else {
        terminarQuiz();
    }
});

function terminarQuiz() {
    partesQuiz.forEach(parte => { parte.hidden = true; });
    finalQuiz.hidden = false;

    const porcentaje = calcularPorcentaje(puntosQuiz, preguntas.length);

    document.getElementById("porcentaje-quiz").textContent = porcentaje + "%";

    document.getElementById("detalle-quiz").textContent =
        `Respondiste correctamente ${puntosQuiz} de ${preguntas.length} preguntas. ${
            porcentaje >= 80
                ? "¡Excelente trabajo, tienes grandes conocimientos!"
                : porcentaje >= 60
                ? "¡Buen trabajo! Sigue practicando para mejorar."
                : "¡No te rindas! Repasa los temas e inténtalo nuevamente."
        }`;

    document.getElementById("titulo-final-quiz").focus();
}

// ========================================
// JUEGO 2 - ESCRIBE CÓDIGO EN PYTHON
// ========================================

const ejercicios = [
    {
        titulo: "Ejercicio 1: Saluda al mundo",
        descripcion: 'Escribe una instrucción que muestre en pantalla el mensaje "Hola mundo".',
        pista: "Pista: utiliza print() y escribe el mensaje entre comillas.",
        comprobar: codigo => /print\s*\(\s*["']Hola mundo["']\s*\)/.test(codigo),
        exito: "¡Excelente! Has utilizado correctamente print() para mostrar un mensaje."
    },
    {
        titulo: "Ejercicio 2: Guarda una edad",
        descripcion: "Crea una variable llamada edad que solicite al usuario su edad mediante input().",
        pista: "Pista: puedes utilizar edad = input('Escribe tu edad: ').",
        comprobar: codigo => /\bedad\s*=\s*input\s*\(/.test(codigo),
        exito: "¡Muy bien! Has creado una variable y utilizado input() para recibir información."
    },
    {
        titulo: "Ejercicio 3: Suma dos números",
        descripcion: "Crea una variable llamada suma que realice la operación 8 + 5 y después muestra el resultado.",
        pista: "Pista: utiliza suma = 8 + 5 y luego print(suma).",
        comprobar: codigo => {
            const limpio = codigo.replace(/\s/g, "");
            return /suma=8\+5/.test(limpio) &&
                   /print\s*\(\s*suma\s*\)/.test(codigo);
        },
        exito: "¡Perfecto! Has realizado una operación matemática y mostrado su resultado."
    },
    {
        titulo: "Ejercicio 4: Utiliza un ciclo",
        descripcion: "Escribe un ciclo for que muestre los números del 1 al 10.",
        pista: "Pista: utiliza range(1, 11) y una instrucción print().",
        comprobar: codigo =>
            /for\s+\w+\s+in\s+range\s*\(\s*1\s*,\s*11\s*\)\s*:/.test(codigo) &&
            /print\s*\(/.test(codigo),
        exito: "¡Increíble! Has creado un ciclo que puede repetir instrucciones."
    }
];

const panelCodigo = document.getElementById("panel-codigo");
const tituloCodigo = document.getElementById("titulo-codigo");
const descripcionCodigo = document.getElementById("descripcion-codigo");
const pistaCodigo = document.getElementById("pista-codigo");
const respuestaCodigo = document.getElementById("respuesta-codigo");
const resultadoCodigo = document.getElementById("resultado-codigo");
const comprobarCodigo = document.getElementById("comprobar-codigo");
const siguienteCodigo = document.getElementById("siguiente-codigo");
const finalCodigo = document.getElementById("final-codigo");
const progresoCodigo = document.getElementById("progreso-codigo");

const partesCodigo = [
    document.querySelector("#panel-codigo .instruccion-codigo"),
    document.querySelector("#panel-codigo .editor-codigo"),
    comprobarCodigo,
    resultadoCodigo,
    document.querySelector("#panel-codigo .juego-acciones")
];

let indiceCodigo = 0;
let puntosCodigo = 0;
let respondidoCodigo = false;

function iniciarCodigo() {
    indiceCodigo = 0;
    puntosCodigo = 0;
    respondidoCodigo = false;

    finalCodigo.hidden = true;
    partesCodigo.forEach(parte => { parte.hidden = false; });

    abrirPanel(panelCodigo);
    mostrarEjercicio();
}

function mostrarEjercicio() {
    const actual = ejercicios[indiceCodigo];

    tituloCodigo.textContent = actual.titulo;
    descripcionCodigo.textContent = actual.descripcion;
    pistaCodigo.textContent = actual.pista;

    document.getElementById("contador-codigo").textContent =
        `Ejercicio ${indiceCodigo + 1} de ${ejercicios.length}`;

    actualizarProgreso(progresoCodigo, indiceCodigo, ejercicios.length);

    respuestaCodigo.value = "";
    mostrarResultado(resultadoCodigo, "");

    respuestaCodigo.disabled = false;
    comprobarCodigo.disabled = false;
    siguienteCodigo.disabled = true;
    respondidoCodigo = false;

    siguienteCodigo.textContent =
        indiceCodigo === ejercicios.length - 1
            ? "Ver mi resultado"
            : "Siguiente ejercicio →";

    tituloCodigo.focus();
}

comprobarCodigo.addEventListener("click", () => {
    if (respondidoCodigo) return;

    const codigo = respuestaCodigo.value.trim();

    if (!codigo) {
        mostrarResultado(resultadoCodigo, "Primero debes escribir tu código.", "error");
        respuestaCodigo.focus();
        return;
    }

    const actual = ejercicios[indiceCodigo];

    if (actual.comprobar(codigo)) {
        puntosCodigo++;
        respondidoCodigo = true;

        mostrarResultado(resultadoCodigo, actual.exito, "correcto");

        siguienteCodigo.disabled = false;
        comprobarCodigo.disabled = true;
        respuestaCodigo.disabled = true;

        actualizarProgreso(progresoCodigo, indiceCodigo + 1, ejercicios.length);
        siguienteCodigo.focus();
    } else {
        mostrarResultado(
            resultadoCodigo,
            "Todavía no es correcto. Revisa la instrucción y vuelve a intentarlo.",
            "error"
        );
        respuestaCodigo.focus();
    }
});

siguienteCodigo.addEventListener("click", () => {
    if (!respondidoCodigo) return;

    indiceCodigo++;

    if (indiceCodigo < ejercicios.length) {
        mostrarEjercicio();
    } else {
        terminarCodigo();
    }
});

function terminarCodigo() {
    partesCodigo.forEach(parte => { parte.hidden = true; });
    finalCodigo.hidden = false;

    const porcentaje = calcularPorcentaje(puntosCodigo, ejercicios.length);

    document.getElementById("porcentaje-codigo").textContent = porcentaje + "%";

    document.getElementById("detalle-codigo").textContent =
        `Resolviste correctamente ${puntosCodigo} de ${ejercicios.length} ejercicios. ${
            porcentaje === 100
                ? "¡Eres un excelente desarrollador!"
                : porcentaje >= 50
                ? "¡Vas por buen camino! Continúa practicando."
                : "¡Sigue aprendiendo! La práctica hace al programador."
        }`;

    document.getElementById("titulo-final-codigo").focus();
}

// ========================================
// BOTONES DE NAVEGACIÓN
// ========================================

const botonIniciarQuiz = document.getElementById("iniciar-quiz");
const botonIniciarCodigo = document.getElementById("iniciar-codigo");

botonIniciarQuiz.addEventListener("click", () => {
    panelCodigo.hidden = true;
    iniciarQuiz();
});

botonIniciarCodigo.addEventListener("click", () => {
    panelQuiz.hidden = true;
    iniciarCodigo();
});

document.getElementById("repetir-quiz").addEventListener("click", iniciarQuiz);
document.getElementById("repetir-codigo").addEventListener("click", iniciarCodigo);

document.getElementById("salir-quiz").addEventListener("click", () => {
    panelQuiz.hidden = true;
    botonIniciarQuiz.focus();
});

document.getElementById("salir-codigo").addEventListener("click", () => {
    panelCodigo.hidden = true;
    botonIniciarCodigo.focus();
});