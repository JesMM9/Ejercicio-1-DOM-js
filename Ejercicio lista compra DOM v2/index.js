document.addEventListener("DOMContentLoaded", function () {
    const lista = document.getElementById("lista");
    const inputElementoNuevo = document.getElementById("inputTextAnadir");
    const btnAgregar = document.getElementById("anadirElemento");
    const btnBorrarPrimero = document.getElementById("borrarPrimerElemento");
    const inputPosicionBorrar = document.getElementById("inputNumberPosicionBorrar");
    const btnBorrarPosicion = document.getElementById("borrarElementoSeleccionado");

    btnAgregar.addEventListener("click", function () {
        const nuevoTexto = inputElementoNuevo.value.trim();
        if (nuevoTexto !== "") {
            const nuevoItem = document.createElement("li");
            nuevoItem.textContent = nuevoTexto;
            lista.appendChild(nuevoItem);
            inputElementoNuevo.value = "";
        }
    });

    btnBorrarPrimero.addEventListener("click", function () {
        if (lista.firstElementChild) {
            lista.removeChild(lista.firstElementChild);
        }
    });

    btnBorrarPosicion.addEventListener("click", function() {
        const posicionReal = inputPosicionBorrar.value.trim()-1;
        const flag = false;
        for (indice in lista.children) {
            if(indice == posicionReal){
                lista.removeChild(lista.children[posicionReal]);
                inputPosicionBorrar.value = null;
                flag = true;
            }
        }

        if(!flag){
            alert("El índice introducido está fuera de rango");
        }

    });

});