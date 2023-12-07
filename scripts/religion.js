
document.addEventListener("DOMContentLoaded", function() {
  // Obtener el elemento contenedor
  var contenido = document.getElementById("contenidoReligion");

  // URL del archivo JSON
  var jsonURL = "archivo.json";

  // Realizar una solicitud HTTP para obtener el JSON
  var xhr = new XMLHttpRequest();
  xhr.open("GET", jsonURL, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // Parsear el JSON
      var data = JSON.parse(xhr.responseText);

      // Crear elementos HTML
      var titulo = document.createElement("h2");
      titulo.textContent = data.titulo;

      var parrafo = document.createElement("p");
      parrafo.textContent = data.parrafo;

      var imagenesContainer = document.createElement("div");

      // Crear elementos de imagen y párrafo de pie
      data.imagenes.forEach(function(imagenData) {
        var imagenContainer = document.createElement("figure");
        imagenContainer.classList.add("imagen-container");

        var imagen = document.createElement("img");
        imagen.src = imagenData.src;
        imagen.alt = imagenData.alt;

        var pieImagen = document.createElement("figcaption");
        pieImagen.textContent = imagenData.pie;

        imagenContainer.appendChild(imagen);
        imagenContainer.appendChild(pieImagen);
        imagenesContainer.appendChild(imagenContainer);
      });

      // Agregar elementos al contenedor principal
      contenido.appendChild(titulo);
      contenido.appendChild(parrafo);
      contenido.appendChild(imagenesContainer);
    }
  };

  // Enviar la solicitud
  xhr.send();
});
