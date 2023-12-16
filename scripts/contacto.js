// Asegúrate de que el DOM esté listo antes de ejecutar el código
$(document).ready(function () {
  // Selecciona el formulario por su ID
  $("#myform").submit(function (event) {
    // Evita que se envíe el formulario de forma predeterminada
    event.preventDefault();

    // Serializa los datos del formulario
    const formData = $(this).serialize();

    // Obtiene la URL y el método del formulario
    const url = $(this).attr("action");
    const method = $(this).attr("method");

    // Envía una solicitud AJAX al servidor
    $.ajax({
      url: url,
      type: method,
      data: formData,
      dataType: "json",
      success: function (response) {
        console.log(response); // Imprimir la respuesta en la consola
        // Restablece el formulario y muestra un mensaje de éxito
        $("#myform")[0].reset();
        alert("Gracias por escribirnos, te responderemos a la brevedad");
      },
      
      error: function (xhr, textStatus, errorThrown) {
        // Imprime un mensaje de error más informativo en la consola
        console.error(
          "Hubo un error al enviar los datos: " + textStatus + ", " + errorThrown
        );
      },
    });
  });
});



