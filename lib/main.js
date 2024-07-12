document.addEventListener("DOMContentLoaded", () => {
    const textoInput = document.getElementById("texto");
    const encriptarBtn = document.getElementById("encriptar");
    const desencriptarBtn = document.getElementById("desencriptar");
    const resultadoP = document.getElementById("resultado");
    const copiarBtn = document.getElementById("copiar");
    const asideContent = document.querySelector(".aside-content");
    const asideResult = document.querySelector(".aside-result");

    const encriptarTexto = (texto) => {
        let textoEncriptado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        return textoEncriptado;
    };

    const desencriptarTexto = (texto) => {
        let textoDesencriptado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        return textoDesencriptado;
    };

    const mostrarResultado = (texto) => {
        resultadoP.textContent = texto;
        asideContent.classList.add("hidden");
        asideResult.classList.remove("hidden");
    };

    const mostrarContenido = () => {
        asideContent.classList.remove("hidden");
        asideResult.classList.add("hidden");
    };

    encriptarBtn.addEventListener("click", () => {
        const texto = textoInput.value;
        if (texto === "") {
            mostrarContenido();
            return;
        }
        const textoEncriptado = encriptarTexto(texto);
        mostrarResultado(textoEncriptado);
    });

    desencriptarBtn.addEventListener("click", () => {
        const texto = textoInput.value;
        if (texto === "") {
            mostrarContenido();
            return;
        }
        const textoDesencriptado = desencriptarTexto(texto);
        mostrarResultado(textoDesencriptado);
    });

    copiarBtn.addEventListener("click", () => {
        const texto = resultadoP.textContent;
        navigator.clipboard.writeText(texto).then(() => {
            alert("Texto copiado al portapapeles");
        });
    });
});
