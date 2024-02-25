window.addEventListener("load", function() {
    var form_formulario = document.querySelector("#formulario");
    var div_dashed = document.querySelector("#dashed");
    div_dashed.style.display = "none";

    form_formulario.addEventListener("submit", function() {
        console.log("Evento capturado");

        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value;
        var edad = parseInt(document.querySelector("#edad").value);

        if (nombre.trim().length == 0) {
            alert("El nombre no es válido");
            return false;
        }

        if (apellido.trim().length == 0) {
            alert("El apellido no es válido");
            return false;
        }

        if (edad <= 0 || isNaN(edad)) {
            alert("La edad no es válida");
            return false;
        }

        div_dashed.style.display = "block";

        var datosUsuario = [nombre, apellido, edad];

        for (var i in datosUsuario) {
            var parrafo = document.createElement("p");
            parrafo.append(datosUsuario[i]);
            div_dashed.append(parrafo);
        }
    });
});
