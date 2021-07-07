window.onload = () => {
    cargarImagen();
    document.querySelector('#random').addEventListener('click', () => {
        cargarImagen();
    })
}

function cargarImagen() {
    const peticion = fetch('https://api.thecatapi.com/v1/images/search')
    peticion.then(response => {
        return response.json();
    }).then(data => {
        const img = document.querySelector('#cat-img');
        img.setAttribute('src', data[0].url);
        data[0].url;
    })
}
