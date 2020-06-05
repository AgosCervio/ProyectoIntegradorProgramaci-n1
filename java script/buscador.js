window.addEventListener("load", function() {
    let queryString = new URLSearchParams(location.search)

    let loBuscado = queryString.get("buscador");
 fetch ("https://api.deezer.com/search?q=eminem"+ loBuscado)

 .then(
    function(respuesta) {
        return respuesta.json();            
    }
 )
.then(
    function(informacion){
        let buscador = informacion.data
        for (let index = 0; index < buscador.length; index++) {
            const cadabusqueda = buscador[index];
            
            let img = cadabusqueda.images.original.url;
            
            
            let title = cadabusqueda.title;
            let id = cadabusqueda.id;
            

            }
    }


)


})
