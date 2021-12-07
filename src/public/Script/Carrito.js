let checkout = document.querySelectorAll("#Boton");

checkout.addEventListener('click' , async function () {
    const response = await fetch('Capturado' ,{
        method: 'POST',
    })
    const data = await response.json()

    window.location.href = data.links[1].href
})