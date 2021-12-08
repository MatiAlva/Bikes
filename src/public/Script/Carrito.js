const checkout = document.getElementById("Boton")
checkout.addEventListener("click", async () => {
  const response = await fetch("/Orden-Creada", {
    method: "POST",
  });
  const data = await response.json();
  window.location.href = data.links[1].href
});