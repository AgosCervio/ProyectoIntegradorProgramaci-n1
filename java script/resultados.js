
window.addEventListener("load", function(){
    document.querySelector(".div-spinner").innerHTML+=" <div class='spinner' uk-spinner></div>"

    let queryString= new URLSearchParams(location.search)
    let codigoDelBuscador= queryString.get("buscador")
    
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=artist:"+codigoDelBuscador)
    .then(function(respuestaSearchArtista){
        return respuestaSearchArtista.json()
    })
    .then(function(infoSearchArtista){
        console.log(infoSearchArtista)
        let infoBuscadorArtista= infoSearchArtista.data
        console.log(infoBuscadorArtista)



    })


    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q="+codigoDelBuscador)
    .then(function(respuestaSearch){
        return respuestaSearch.json()
    })
    .then (function(infoSearch){
        console.log(infoSearch)
        if (infoSearch != null) {
            document.querySelector(".div-spinner").style.display="none"
        }
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
        let idArtista= cadaBuscado.artist.id
        document.querySelector(".container-search").innerHTML+= "<div class=div-search>"+
        
        "<a href='tracks.html?idDelTrack="+idBuscado+"'>"+"<h1 class=titulo-search>"+nombreBuscador+"</h1>"+"</a>"+
        "<a href='artistas.html?idDelArtista="+idArtista+"'>"+"<h2 class=artista-search>"+nombreArtistaBuscado+"</h2>"+"</a>"+
        "<img class=img-search src='"+imgBuscado+"'"+"<div class=div-iconos>"+"<i idBuscado='"+idBuscado+"' class='far fa-play-circle iconoCancion iconossearch '></i>"+"<i class='fas fa-heart  iconossearch '></i>"+"</div>"+ "</div>"
            
        }
        
        
        let iconosSearch = document.querySelectorAll(".iconoCancion")
    for (let index = 0; index < iconosSearch.length; index++) {
        const cadaIconoCancion = iconosSearch[index];
        let cadaIdIcono = cadaIconoCancion.getAttribute("idBuscado")
        console.log(cadaIconoCancion)
        
        cadaIconoCancion.addEventListener("click", function(){
           
        document.querySelector(".reproduccionArtista").innerHTML="<iframe scrolling='no' frameborder='0' allowTransparency='true' src='https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=1000&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id="+cadaIdIcono+"&app_id=1' width='100%' height='150'></iframe>"
        })
        
    }
    })

    
    














})