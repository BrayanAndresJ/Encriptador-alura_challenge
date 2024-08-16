const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const mensajeCaja = document.querySelector(".mensaje-caja");
const informacionCaja = document.querySelector(".informacion-caja");
const mensajeImagen = document.querySelector(".mensaje-imagen");

// Función para validar que el texto no contenga caracteres especiales ni acentos
function validarTexto(texto) {
    // Expresión regular para permitir solo letras y espacios (sin acentos ni caracteres especiales)
    const regex = /^[A-Za-z\s]*$/;
    return regex.test(texto);
}

function botonEncriptar() {
    let textoOriginal = textArea.value.trim(); // Elimina espacios extra

    // Validar texto antes de convertir a minúsculas
    if (!validarTexto(textoOriginal)) {
        alert("El texto debe contener solo letras y espacios, sin acentos ni caracteres especiales.");
        return;
    }

    // Convertir a minúsculas
    let textoEnMinúsculas = textoOriginal.toLowerCase();

    const textoEncriptado = encriptar(textoEnMinúsculas);
    mensaje.value = textoEncriptado;
    textArea.value = "";

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
}

function botonDesencriptar() {
    let textoOriginal = textArea.value.trim(); // Elimina espacios extra

    // Validar texto antes de convertir a minúsculas
    if (!validarTexto(textoOriginal)) {
        alert("El texto debe contener solo letras y espacios, sin acentos ni caracteres especiales.");
        return;
    }

    // Convertir a minúsculas
    let textoEnMinúsculas = textoOriginal.toLowerCase();

    const textoDesencriptado = desencriptar(textoEnMinúsculas);
    mensaje.value = textoDesencriptado;
    textArea.value = "";

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



