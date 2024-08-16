const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const mensajeCaja = document.querySelector(".mensaje-caja");
const informacionCaja = document.querySelector(".informacion-caja");
const mensajeImagen = document.querySelector(".mensaje-imagen");

function botonEncriptar() {
    const texto = textArea.value;

    if (validarTexto(texto)) {
        const textoEncriptado = encriptar(texto);
        mensaje.value = textoEncriptado;
        textArea.value = "";

        // Mostrar el contenido encriptado y ocultar imagen y mensajes si hay texto
        if (textoEncriptado) {
            mensajeCaja.classList.remove("hidden");
            informacionCaja.style.display = "none";
            mensajeImagen.style.display = "none";
            document.querySelector(".boton-copiar").classList.remove("hidden"); 
        } else {
            mensajeCaja.classList.add("hidden");
            informacionCaja.style.display = "block";
            mensajeImagen.style.display = "block";
            document.querySelector(".boton-copiar").classList.add("hidden"); 
        }
    } else {
        alert("El texto debe contener solo letras minúsculas y espacios.");
    }
}

function botonDesencriptar() {
    const texto = textArea.value;

    if (validarTexto(texto)) {
        const textoDesencriptado = desencriptar(texto);
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
    } else {
        alert("El texto debe contener solo letras minúsculas y espacios.");
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


function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

