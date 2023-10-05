function index(){
    //Hacemos cabecera
    const h=document.createElement('h1');
    h.textContent='Aqui tenemos LA CABECERA';
    
    document.body.appendChild(h);
    //Hacemos parrafos
    var p=document.createElement("p");
    p.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, qui maiores. Fuga nemo excepturi temporibus facilis mollitia eligendi, quaerat quidem omnis dolore quas enim tenetur a quisquam, praesentium impedit accusantium!";
    document.body.appendChild(p);
    meterAtributos(p,'style','color:white; background-color:black;');
    //Metemos video de gatitos
    var videito=document.createElement("iframe");
    document.body.appendChild(videito);
    videito.setAttribute('style','width:560; height:315;');
    videito.setAttribute('src','https://www.youtube.com/embed/EErY75MXYXI?si=-MDilrXioACal50B');
    videito.setAttribute('tittle','Youtube video player');
    videito.setAttribute('frameborder','0');
    videito.setAttribute('allow','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    videito.setAttribute('allowfullscreen','true');
}

function meterAtributos(elemento,attributo,valor){
    elemento.setAttribute(attributo,valor);
}
// Definir una función para realizar la solicitud al servidor PHP
function obtenerDatosDelBackend() {
    // Crear una instancia de XMLHttpRequest (XHR)
    var xhr = new XMLHttpRequest();
  
    // Configurar la solicitud
    xhr.open("GET", "index.php", true);
  
    // Configurar el manejo de la respuesta
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Procesar la respuesta del servidor PHP
        var respuesta = JSON.parse(xhr.responseText);
  
        // Hacer algo con los datos recibidos
        console.log(respuesta);
      }
    };
  
    // Enviar la solicitud
    xhr.send();
  }
  
  // Llamar a la función para obtener datos del backend
  obtenerDatosDelBackend();
  