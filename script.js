document.getElementById("miboton").addEventListener("click", () => {
  fetch("http://localhost:3000/enviar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mensaje: "Hola desde el frontend" }),// Cambia el mensaje según sea necesario
    // Puedes enviar más datos en el cuerpo de la solicitud si lo necesitas
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Respuesta del backend:", data);
      alert(data.respuesta);
    })
    .catch((err) => console.error("Error:", err));
});