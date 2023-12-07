import './script';
//form

$("#myform").submit(function (event) {
  event.preventDefault();

  // Serializa los datos del formulario
  const formData = $(this).serialize();

  // Envía una solicitud AJAX al servidor
  $.ajax({
    url: $(this).attr("action"),
    type: $(this).attr("method"),
    data: formData,
    dataType: "json",
    success: function () {
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



