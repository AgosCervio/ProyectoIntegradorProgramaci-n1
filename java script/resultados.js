window.addEventListener("load", function(){
    let queryString= new URLSearchParams(location.search)
    let codigoDelBuscador= queryString.get("buscador")
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q="+codigoDelBuscador)
    .then(function(respuestaSearch){
        return respuestaSearch.json()
    })
    .then (function(infoSearch){
        console.log(infoSearch)
        let infoBuscador= infoSearch.data
        if (infoBuscador.length == 0) {
            alert("No hay resultados");
        }

        for (let index = 0; index < infoBuscador.length; index++) {
            const cadaBuscado = infoBuscador[index];
            let nombreBuscador= cadaBuscado.title
        let idBuscado= cadaBuscado.id
        let imgBuscado= cadaBuscado.album.cover
        let nombreArtistaBuscado = cadaBuscado.artist.name
        document.querySelector(".container-search").innerHTML+= "<div class=div-search>"+
        
        "<h1 class=titulo-search>"+nombreBuscador+"</h1>"+
        "<h2 class=artista-search>"+nombreArtistaBuscado+"</h2>"+
        "<img class=img-search src='"+imgBuscado+"'"+ "</div>"
            
        }
        
        

    })














})