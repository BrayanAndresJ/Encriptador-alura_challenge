const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const mensajeCaja = document.querySelector(".mensaje-caja");
const informacionCaja = document.querySelector(".informacion-caja");
const mensajeImagen = document.querySelector(".mensaje-imagen");

function botonEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";

    // Mostrar el contenido encriptado y ocultar imagen y mensajes si hay texto
    if (textoEncriptado || window.innerWidth <= 768) { // Verifica si hay texto o si está en una pantalla de tablet
        mensajeCaja.classList.remove("hidden");
        informacionCaja.style.display = "none";
        mensajeImagen.style.display = "none";
        document.querySelector(".boton-copiar").classList.remove("hidden"); // Muestra el botón de copiar
    } else {
        mensajeCaja.classList.add("hidden");
        informacionCaja.style.display = "block";
        mensajeImagen.style.display = "block";
        document.querySelector(".boton-copiar").classList.add("hidden"); // Asegúrate de ocultar el botón en caso de texto vacío
    }
}

function botonDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";

    // Mostrar el contenido desencriptado y ocultar imagen y mensajes si hay texto
    if (textoDesencriptado) {
        mensajeCaja.classList.remove("hidden");
        informacionCaja.style.display = "none";
        mensajeImagen.style.display = "none";
    } else {
        mensajeCaja.classList.add("hidden");
        informacionCaja.style.display = "block";
        mensajeImagen.style.display = "block";
    }
}

function copiarTexto() {
    const mensajeTexto = mensaje.value;
    navigator.clipboard.writeText(mensajeTexto).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar: ", err);
    });
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}
