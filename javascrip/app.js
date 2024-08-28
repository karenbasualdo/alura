const textarea = document.querySelector(".text_area");
const mensaje = document.querySelector(".mensaje");



function btn_encriptar() {
    const textoEncriptado = encriptar(textarea.value);

    if (tieneAcentos(textoEncriptado)) {
        alert("Por favor, ingresa una palabra sin acentos.");
        textarea.value = "";
        return;  // Detenemos el proceso de encriptado si hay acentos
    }
    mensaje.value = textoEncriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none"
    
}

// Función para verificar si el texto contiene acentos
function tieneAcentos(texto) {
    const acentos = /[áéíóú]/;  
    return acentos.test(texto);
}


function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function btn_copiar() {
    copiarypegarTexto(); 
    mensaje.value= "";
}

// Función para copiar y pegar el texto encriptado
function copiarypegarTexto() {
    const texto = mensaje.value;
    navigator.clipboard.writeText(texto)
        .then(() => {
            // Pega el texto copiado en el textarea donde se ingresó el texto originalmente
            textarea.value = texto;})}

            



function btn_desencriptar() {
    const textoEncriptado = desencriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
    
}



function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}



