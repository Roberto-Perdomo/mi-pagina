document.getElementById("miboton").addEventListener("click", async () => {
  const respuesta = await fetch("http://localhost:3000/mensaje", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mensaje: "Hola desde el botón" }),
  });

  const data = await respuesta.json();
  alert("Respuesta del servidor: " + data.recibido);
});
