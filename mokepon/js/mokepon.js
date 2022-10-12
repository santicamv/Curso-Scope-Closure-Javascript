window.addEventListener("load", iniciarJuego);
let ataqueJugador = "";
let ataqueEnemigo = "";
let vidasJugador = 3;
let vidasEnemigo = 3;
let contadorMensajeFinal = 1;
let mokepones = [];
let opcionDeMoquepones;
const contenedorTarjetas = document.querySelector("#contenedor-tarjetas");
const seccionAtaque = document.querySelector("#seleccionar-ataque");
const subtituloMascota = document.querySelector(".tituloSec");
const subtituloAtaque = document.querySelector(".sub-ataque");
const btnReinicio = document.querySelector("#reiniciar");
const btnMascotaJugador = document.querySelector("#boton-mascota");
const botonFuego = document.querySelector("#boton-fuego");
const botonAgua = document.querySelector("#boton-agua");
const botonTierra = document.querySelector("#boton-tierra");
const botonReiniciar = document.querySelector("#boton-reiniciar");
const spanMascotaJugador = document.querySelector("#mascota-jugador");
const seccionMascota = document.querySelector("#seleccionar-mascota");
const imgDinamicaJugador = document.querySelector("#imagen-dinamica-jugador");
const spanMascotaPC = document.querySelector("#mascota-enemigo");
const imgDinamicaEnemigo = document.querySelector("#imagen-dinamica-enemigo");
const spanVidasJugador = document.querySelector("#vidas-jugador");
const spanVidasEnemigo = document.querySelector("#vidas-enemigo");
const sectionMensajes = document.querySelector(".mensajes");

class Mokepon {
    constructor(nombre, foto, descripcion) {
        this.nombre = nombre;
        this.foto = foto;
        this.descripcion = descripcion;
        this.ataques = [];
    }
}

let hipodoge = new Mokepon("Hipodoge", "imagenes/mokepon6.png", "Hipodoge es un pokemon muy extraño, crece en las llanuras de pueblo paleta y es poco sociable,ten cuidado si encuentras uno ya que querrá escapar si intentas un movimiento brusco.");

let guadalupo = new Mokepon("Guadalupo", "imagenes/mokepon5.jpg", "Guadalupo es un pokemon muy extraño, crece en las llanuras de pueblo paleta y es poco sociable. ten cuidado si encuentras uno ya que querrá escapar si intentas un movimiento brusco.");

let ratigueya = new Mokepon("Ratigueya", "imagenes/mokepon1.png", "Ratigueya es un pokemon muy extraño, crece en las llanuras de pueblo paleta y es poco sociable. ten cuidado si encuentras uno ya que querrá escapar si intentas un movimiento brusco.");

let langostelvis = new Mokepon("Langostelvis", "imagenes/mokepon2.png", "Langostelvis es un pokemon muy extraño, crece en las llanuras de pueblo paleta y es poco sociable. ten cuidado si encuentras uno ya que querrá escapar si intentas un movimiento brusco.");

let tucapalma = new Mokepon("Tucapalma", "imagenes/mokepon3.jpg", "Tucapalma es un pokemon muy extraño, crece en las llanuras de pueblo paleta y es poco sociable. ten cuidado si encuentras uno ya que querrá escapar si intentas un movimiento brusco.");

let pydos = new Mokepon("Pydos", "imagenes/mokepon4.png", "Pydos es un pokemon muy extraño, crece en las llanuras de pueblo paleta y es poco sociable. ten cuidado si encuentras uno ya que querrá escapar si intentas un movimiento brusco.");

hipodoge.ataques.push(
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🌱", id: "boton-tierra" },
    { nombre: "💧", id: "boton-agua" }
)

guadalupo.ataques.push(
    { nombre: "🌱", id: "boton-tierra" },
    { nombre: "🌱", id: "boton-tierra" },
    { nombre: "🌱", id: "boton-tierra" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "💧", id: "boton-agua" }
)

ratigueya.ataques.push(
    { nombre: "💧", id: "boton-agua" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🌱", id: "boton-tierra" }
)

langostelvis.ataques.push(
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🌱", id: "boton-tierra" },
    { nombre: "💧", id: "boton-agua" }
)

tucapalma.ataques.push(
    { nombre: "🌱", id: "boton-tierra" },
    { nombre: "🌱", id: "boton-tierra" },
    { nombre: "🌱", id: "boton-tierra" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "💧", id: "boton-agua" }
)

pydos.ataques.push(
    { nombre: "💧", id: "boton-agua" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🌱", id: "boton-tierra" }
)

mokepones.push(hipodoge, guadalupo, ratigueya, langostelvis, tucapalma, pydos);

function iniciarJuego() {
    seccionAtaque.style.display = "none";

    mokepones.forEach((mokepon) => {
        opcionDeMoquepones = `
        <div class="card">
        <img src= ${mokepon.foto} alt="mokepon">
        <h3>${mokepon.nombre}</h3>
        <p>${mokepon.descripcion}</p>
        <label class="label-mokepon" for="${mokepon.nombre}">Selecciónalo aquí:</label>
        <input class="seleccion-radio" type="radio" name="mascota" id="${mokepon.nombre}">
        </div>
        `

        seccionMascota.innerHTML += opcionDeMoquepones;
    })
    subtituloMascota.style.display = "block";
    subtituloAtaque.style.display = "none";
    btnMascotaJugador.style.display = "block";
    btnReinicio.style.display = "none";
    btnMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
    botonFuego.addEventListener("click", ataqueFuego);
    botonAgua.addEventListener("click", ataqueAgua);
    botonTierra.addEventListener("click", ataqueTierra);
    botonFuego.disabled = true;
    botonAgua.disabled = true;
    botonTierra.disabled = true;
    botonReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador() {
    let seleccionHipodoge = document.querySelector("#Hipodoge");
    let seleccionGuadalupo = document.querySelector("#Guadalupo");
    let seleccionRatigueya = document.querySelector("#Ratigueya");
    let seleccionLangostelvis = document.querySelector("#Langostelvis");
    let seleccionTucapalma = document.querySelector("#Tucapalma");
    let seleccionPydos = document.querySelector("#Pydos");

    if (seleccionHipodoge.checked == true) {
        spanMascotaJugador.innerHTML = seleccionHipodoge.id;
        imgDinamicaJugador.src = "imagenes/mokepon6.png";
        botonFuego.disabled = false;
        botonAgua.disabled = false;
        botonTierra.disabled = false;
        seccionAtaque.style.display = "block";
        subtituloAtaque.style.display = "block";
        btnMascotaJugador.style.display = "none";
        subtituloMascota.style.display = "none";
        seccionMascota.style.display = "none";
    } else if (seleccionGuadalupo.checked == true) {
        spanMascotaJugador.innerHTML = seleccionGuadalupo.id;
        imgDinamicaJugador.src = "imagenes/mokepon5.jpg";
        botonFuego.disabled = false;
        botonAgua.disabled = false;
        botonTierra.disabled = false;
        seccionAtaque.style.display = "block";
        subtituloAtaque.style.display = "block";
        btnMascotaJugador.style.display = "none";
        subtituloMascota.style.display = "none";
        seccionMascota.style.display = "none";
    } else if (seleccionRatigueya.checked == true) {
        spanMascotaJugador.innerHTML = seleccionRatigueya.id;
        imgDinamicaJugador.src = "imagenes/mokepon1.png";
        botonFuego.disabled = false;
        botonAgua.disabled = false;
        botonTierra.disabled = false;
        seccionAtaque.style.display = "block";
        subtituloAtaque.style.display = "block";
        btnMascotaJugador.style.display = "none";
        subtituloMascota.style.display = "none";
        seccionMascota.style.display = "none";
    } else if (seleccionLangostelvis.checked == true) {
        spanMascotaJugador.innerHTML = seleccionLangostelvis.id;
        imgDinamicaJugador.src = "imagenes/mokepon2.png";
        botonFuego.disabled = false;
        botonAgua.disabled = false;
        botonTierra.disabled = false;
        seccionAtaque.style.display = "block";
        subtituloAtaque.style.display = "block";
        btnMascotaJugador.style.display = "none";
        subtituloMascota.style.display = "none";
        seccionMascota.style.display = "none";
    } else if (seleccionTucapalma.checked == true) {
        spanMascotaJugador.innerHTML = seleccionTucapalma.id;
        imgDinamicaJugador.src = "imagenes/mokepon3.jpg";
        botonFuego.disabled = false;
        botonAgua.disabled = false;
        botonTierra.disabled = false;
        seccionAtaque.style.display = "block";
        subtituloAtaque.style.display = "block";
        btnMascotaJugador.style.display = "none";
        subtituloMascota.style.display = "none";
        seccionMascota.style.display = "none";
    } else if (seleccionPydos.checked == true) {
        spanMascotaJugador.innerHTML = seleccionPydos.id;
        imgDinamicaJugador.src = "imagenes/mokepon4.png";
        botonFuego.disabled = false;
        botonAgua.disabled = false;
        botonTierra.disabled = false;
        seccionAtaque.style.display = "block";
        subtituloAtaque.style.display = "block";
        btnMascotaJugador.style.display = "none";
        subtituloMascota.style.display = "none";
        seccionMascota.style.display = "none";
    } else {
        botonFuego.disabled = true;
        botonAgua.disabled = true;
        botonTierra.disabled = true;
        alert("No seleccionaste nada, selecciona una mascota!!!");
    }
    seleccionarMascotaEnemigo();
}

function numeroAleatorio() {
    let numAleatorio = 0;
    let val = 1 / mokepones.length;
    numAleatorio = Math.random();

    if (numAleatorio < val) {
        numAleatorio = 1;
    } else if (numAleatorio > val & numAleatorio < val * 2) {
        numAleatorio = 2;
    } else if (numAleatorio > val * 2 & numAleatorio < val * 3) {
        numAleatorio = 3;
    } else if (numAleatorio > val * 3 & numAleatorio < val * 4) {
        numAleatorio = 4;
    } else if (numAleatorio > val * 4 & numAleatorio < val * 5) {
        numAleatorio = 5;
    } else {
        numAleatorio = 6;
    }
    return numAleatorio;
}
function numeroAleatorioAtaque() {
    let numAleatorio = 0;
    let val = 1 / 3;
    numAleatorio = Math.random();

    if (numAleatorio < val) {
        numAleatorio = 1;
    } else if (numAleatorio > val & numAleatorio < val * 2) {
        numAleatorio = 2;
    } else if (numAleatorio > val * 2 & numAleatorio < val * 3) {
        numAleatorio = 3;
    }
    return numAleatorio;
}

function seleccionarMascotaEnemigo() {
    let seleccionHipodoge = document.querySelector("#Hipodoge");
    let seleccionGuadalupo = document.querySelector("#Guadalupo");
    let seleccionRatigueya = document.querySelector("#Ratigueya");
    let seleccionLangostelvis = document.querySelector("#Langostelvis");
    let seleccionTucapalma = document.querySelector("#Tucapalma");
    let seleccionPydos = document.querySelector("#Pydos");

    let numero = numeroAleatorio();
    if (numero == 1) {
        spanMascotaPC.innerHTML = seleccionHipodoge.id;
        for (i = 0; i < mokepones.length; i++) {
            if (mokepones[i].nombre == seleccionHipodoge.id) {
                imgDinamicaEnemigo.src = mokepones[i].foto;
                break;
            }
        }
    } else if (numero == 2) {
        spanMascotaPC.innerHTML = seleccionGuadalupo.id;
        for (i = 0; i < mokepones.length; i++) {
            if (mokepones[i].nombre == seleccionGuadalupo.id) {
                imgDinamicaEnemigo.src = mokepones[i].foto;
                break;
            }
        }
    } else if (numero == 3) {
        spanMascotaPC.innerHTML = seleccionRatigueya.id;
        for (i = 0; i < mokepones.length; i++) {
            if (mokepones[i].nombre == seleccionRatigueya.id) {
                imgDinamicaEnemigo.src = mokepones[i].foto;
                break;
            }
        }
    } else if (numero == 4) {
        spanMascotaPC.innerHTML = seleccionLangostelvis.id;
        for (i = 0; i < mokepones.length; i++) {
            if (mokepones[i].nombre == seleccionLangostelvis.id) {
                imgDinamicaEnemigo.src = mokepones[i].foto;
                break;
            }
        }
    } else if (numero == 5) {
        spanMascotaPC.innerHTML = seleccionTucapalma.id;
        for (i = 0; i < mokepones.length; i++) {
            if (mokepones[i].nombre == seleccionTucapalma.id) {
                imgDinamicaEnemigo.src = mokepones[i].foto;
                break;
            }
        }
    } else if (numero == 6) {
        spanMascotaPC.innerHTML = seleccionPydos.id;
        for (i = 0; i < mokepones.length; i++) {
            if (mokepones[i].nombre == seleccionPydos.id) {
                imgDinamicaEnemigo.src = mokepones[i].foto;
                break;
            }
        }
    }
}
function ataqueFuego() {
    ataqueJugador = "FUEGO";
    ataqueAleatorioEnemigo();
    crearMensaje();
}
function ataqueAgua() {
    ataqueJugador = "AGUA";
    ataqueAleatorioEnemigo();
    crearMensaje();
}
function ataqueTierra() {
    ataqueJugador = "TIERRA";
    ataqueAleatorioEnemigo();
    crearMensaje();
}
function ataqueAleatorioEnemigo() {
    let numeroAleatorioAtaqu = numeroAleatorioAtaque();
    if (numeroAleatorioAtaqu == 1) {
        ataqueEnemigo = "FUEGO";
    } else if (numeroAleatorioAtaqu == 2) {
        ataqueEnemigo = "AGUA";
    } else {
        ataqueEnemigo = "TIERRA"
    }
}
function definirGanador() {
    let resultadoGanador = "";
    if (ataqueJugador == "FUEGO" & ataqueEnemigo == "FUEGO"
        & vidasJugador != 0 & vidasEnemigo != 0) {
        resultadoGanador = "EMPATASTE, sigue intentando";

    } else if (ataqueJugador == "AGUA" & ataqueEnemigo == "AGUA"
        & vidasJugador != 0 & vidasEnemigo != 0) {
        resultadoGanador = "EMPATASTE, sigue intentando";

    } else if (ataqueJugador == "TIERRA" & ataqueEnemigo == "TIERRA"
        & vidasJugador != 0 & vidasEnemigo != 0) {
        resultadoGanador = "EMPATASTE, sigue intentando";

    } else if (ataqueJugador == "FUEGO" & ataqueEnemigo == "AGUA"
        & vidasJugador != 0 & vidasEnemigo != 0) {
        resultadoGanador = "GANASTE, felicitaciones";
        vidasEnemigo = vidasEnemigo - 1;

    } else if (ataqueJugador == "FUEGO" & ataqueEnemigo == "TIERRA"
        & vidasJugador != 0 & vidasEnemigo != 0) {
        resultadoGanador = "PERDISTE, no te rindas";
        vidasJugador = vidasJugador - 1;

    } else if (ataqueJugador == "AGUA" & ataqueEnemigo == "FUEGO"
        & vidasJugador != 0 & vidasEnemigo != 0) {
        resultadoGanador = "PERDISTE, no te rindas";
        vidasJugador = vidasJugador - 1;

    } else if (ataqueJugador == "AGUA" & ataqueEnemigo == "TIERRA"
        & vidasJugador != 0 & vidasEnemigo != 0) {
        resultadoGanador = "GANASTE, felicitaciones";
        vidasEnemigo = vidasEnemigo - 1;

    } else if (ataqueJugador == "TIERRA" & ataqueEnemigo == "FUEGO"
        & vidasJugador != 0 & vidasEnemigo != 0) {
        resultadoGanador = "GANASTE, felicitaciones";
        vidasEnemigo = vidasEnemigo - 1;

    } else if (ataqueJugador == "TIERRA" & ataqueEnemigo == "AGUA"
        & vidasJugador != 0 & vidasEnemigo != 0) {
        resultadoGanador = "PERDISTE, no te rindas";
        vidasJugador = vidasJugador - 1;
    }
    spanVidasJugador.innerHTML = vidasJugador;
    spanVidasEnemigo.innerHTML = vidasEnemigo;

    return resultadoGanador;
}
function crearMensaje() {
    let parrafo = document.createElement("p");
    if (vidasJugador == 0 & contadorMensajeFinal == 1) {
        parrafo.innerHTML = "El juego terminó. PERDISTE LA BATALLA. Reinicia para volver a intentarlo";
        parrafo.style.color = "red";
        parrafo.style.fontSize = "xx-large";
        parrafo.style.fontFamily = "Graphik Light";
        sectionMensajes.appendChild(parrafo);
        contadorMensajeFinal = contadorMensajeFinal - 1;
        botonFuego.disabled = true;
        botonAgua.disabled = true;
        botonTierra.disabled = true;
        btnReinicio.style.display = "block";
    } else if (vidasEnemigo == 0 & contadorMensajeFinal == 1) {
        parrafo.innerHTML = "El juego terminó. GANASTE LA BATALLA. Reinicia para volver a intentarlo";
        parrafo.style.color = "#08B900";
        parrafo.style.fontSize = "xx-large";
        sectionMensajes.appendChild(parrafo);
        contadorMensajeFinal = contadorMensajeFinal - 1;
        botonFuego.disabled = true;
        botonAgua.disabled = true;
        botonTierra.disabled = true;
        btnReinicio.style.display = "block";
    } else if (contadorMensajeFinal == 1) {
        parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo atacó con " + ataqueEnemigo + "- " + definirGanador();
        sectionMensajes.appendChild(parrafo);
        btnReinicio.style.display = "block";
    }
}
function reiniciarJuego() {
    location.reload();
}