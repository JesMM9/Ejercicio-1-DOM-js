document.addEventListener("DOMContentLoaded", function () {
    const lista = document.getElementById("lista");
    const inputElemento = document.getElementById("inputText");
    const btnAgregar = document.getElementById("anadirElemento");
    const btnBorrar = document.getElementById("borrarPrimerElemento");

    btnAgregar.addEventListener("click", function () {
        const nuevoTexto = inputElemento.value.trim();
        if (nuevoTexto !== "") {
            const nuevoItem = document.createElement("li");
            nuevoItem.textContent = nuevoTexto;
            lista.appendChild(nuevoItem);
            inputElemento.value = "";
        }
    });

    btnBorrar.addEventListener("click", function () {
        if (lista.firstElementChild) {
            lista.removeChild(lista.firstElementChild);
        }
    });
});