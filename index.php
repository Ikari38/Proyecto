<?php 
    //echo 'Tus muertos <br>';
    $comunica="Luisito";

// Realizar alguna lógica para obtener los datos que deseas enviar al frontend
$datos = array("nombre" => "Ejemplo", "edad" => 25);
// Convertir los datos a formato JSON
$datos_json = json_encode($datos);

// Configurar las cabeceras para permitir solicitudes CORS (si es necesario)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Enviar los datos como respuesta al frontend
echo $datos_json;


?>