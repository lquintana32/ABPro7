function validarFormulario() {
    var nombre = document.getElementById('fname').value;
    if (nombre.length == 0) {
        alert("No has escrito el nombre");
    }
    var apellido = document.getElementById('lname').value;
    if (apellido.length == 0) {
        alert("No has escrito su apellido");
    }
    var correo = document.getElementById('email').value;
    if (correo.length == 0) {
        alert("No has escrito su correo");
    }
    var fono = document.getElementById('phone').value;
    if (fono.length == 0) {
        alert("No has escrito su teléfono");
    }
    var mensaje = document.getElementById('message').value;
    if (mensaje.length == 0) {
        alert("No has escrito el mensaje");
    }
}