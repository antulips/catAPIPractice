window.onload = () => {
    //llamo ala función para que se cargue una con la página
    cargarImagen();
    //capturamos el botón para que cargue una imagen con cada click
    document.querySelector('#random').addEventListener('click', () => {
        cargarImagen();
    })
}

//ponemos todo en una función para proteger de que se cargue la promesa antes que el fetch
function cargarImagen() {

    //Una API es una URL que en vez de devolver una página, devuelve un recurso
    //utilizaremos la API dog.ceo https://dog.ceo/dog-api/documentation/
    //todas las apis dan una url que si la copiamos y pegamos, nos da texto, 
    //porque al enviarlo desde la barra de direcciones, hace una petición get que devuelve el json plano
    //Esta API da la url https://dog.ceo/api/breeds/list/all
    //el método para tomar una api es fetch
    const peticion = fetch('https://api.thecatapi.com/v1/images/search')
    //console.log(peticion);
    //fetch devuelve una promesa para protegernos del asincronismo, por eso accedemos a los datos con .then
    peticion.then(response => {
        //acá tomamos el resultado de la petición
        //navegamos dentro de esto para ver qué necesitamos, lo más normal es usar el body, los headers cada tanto.
        //console.log(response);
        //la mayoría de las apis se manejan en json, por eso se usa .json
        //no se usa JSON.parse porque no tenemos el objeto o archivo para poner entre paréntesis
        //.json es exclusivo de un response de apis.
        return response.json();
        //algunas devuelven en xml y hay que usar otro método
    }).then(data => {
        //console.log(data);
        const img = document.querySelector('#cat-img');
        img.setAttribute('src', data[0].url);
        data[0].url;
    })
}
