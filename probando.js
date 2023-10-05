// Espera a que el documento HTML esté completamente cargado
$(document).ready(function () {
    // Manejar el evento de clic en el botón
    $("#obtenerDatos").click(function () {
        // Realizar una solicitud AJAX al backend en PHP
        $.ajax({
            type: "GET", // Método HTTP (GET, POST, etc.)
            url: "probando.php", // URL del script PHP en el backend
            dataType: "json", // Tipo de datos que se espera en la respuesta
            success: function (data) {
                // Manipular los datos recibidos del backend
                $("#resultado").html("Nombre: " + data.nombre + "<br>Edad: " + data.edad);
            },
            error: function (error) {
                console.log("Error: " + JSON.stringify(error));
                $("#resultado").html("Hubo un error al obtener los datos.");
            }
        });
    });
});
