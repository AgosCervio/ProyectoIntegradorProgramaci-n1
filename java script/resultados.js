
window.addEventListener("load", function(){
    document.querySelector(".div-spinner").innerHTML+=" <div class='spinner' uk-spinner></div>"

    let queryString= new URLSearchParams(location.search)
    let codigoDelBuscador= queryString.get("buscador")
    let cancionesSearch;
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q="+codigoDelBuscador)
    .then(function(respuestaSearchArtista){
        return respuestaSearchArtista.json()
    })
    .then(function(infoSearchArtista){
        console.log(infoSearchArtista)
        let infoBuscadorArtista= infoSearchArtista.data
        console.log(infoBuscadorArtista)
        
        document.querySelector(".tituloartista").style.display="block"
        let idBuscadoArtista= infoBuscadorArtista[0].id
        let nombreBuscadorArtista= infoBuscadorArtista[0].name
        let imgBuscadoArtista= infoBuscadorArtista[0].picture
        document.querySelector(".container-artistas").innerHTML="<div class='div-artista'>"+"<a href='artistas.html?idDelArtista="+idBuscadoArtista+"'>"+"<img src='"+imgBuscadoArtista+"'>"+"<h1 class='nombreArtista'>"+nombreBuscadorArtista+"</h1>"+"</a>"+"</div>"
              
        
        
        
        
        
        
        
        
        
        
        



    
    })


    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q="+codigoDelBuscador)
    .then(function(respuestaSearch){
        return respuestaSearch.json()
    })
    .then (function(infoSearch){
        document.querySelector(".titulocanciones").style.display="block"
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
        "<img class=img-search src='"+imgBuscado+"'"+"<div class=div-iconos>"+"<i idBuscado='"+idBuscado+"' class='far fa-play-circle iconoCancion iconossearch '></i>"+"<i idIconoPlaylist='"+ idBuscado+"' class='fas fa-heart iconoplaylist  iconossearch '></i>"+"</div>"+ "</div>"
            
        }
        
        
        let iconosSearch = document.querySelectorAll(".iconoCancion")
    for (let index = 0; index < iconosSearch.length; index++) {
        const cadaIconoCancion = iconosSearch[index];
        let cadaIdIcono = cadaIconoCancion.getAttribute("idBuscado")
        console.log(cadaIconoCancion)
        
        cadaIconoCancion.addEventListener("click", function(){
            sessionStorage.setItem("reproduccion", cadaIdIcono)
           
        document.querySelector(".reproduccionArtista").innerHTML="<iframe scrolling='no' frameborder='0' allowTransparency='true' src='https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=1000&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id="+cadaIdIcono+"&app_id=1' width='100%' height='150'></iframe>"
        })
        
    }
    let iconoPlaylist= document.querySelectorAll(".iconoplaylist")
    for (let index = 0; index < iconoPlaylist.length; index++) {
        const cadaIcono = iconoPlaylist[index];
        let id = cadaIcono.getAttribute("idIconoPlaylist")
        cadaIcono.addEventListener("click", function(){
        
        alert(id)
        if (sessionStorage.getItem("codigoPlaylist") != null) {
            cancionesSearch= sessionStorage.getItem("codigoPlaylist").split(" , ")
            cancionesSearch.push(id)
            sessionStorage.setItem("codigoPlaylist", cancionesSearch)
            
        }else{
            cancionesSearch= []
            cancionesSearch.push(id)
            sessionStorage.setItem("codigoPlaylist", cancionesSearch)
        }

    })
    }
    })

    
    
    
    
    
    
    
    
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q="+codigoDelBuscador)
    .then(function(informacionAlbum){
        return informacionAlbum.json()
    })
    .then(function(infoAlbum){
        document.querySelector(".tituloalbums").style.display="block"
        console.log(infoAlbum)
        let infoAlbumData= infoAlbum.data
        for (let index = 0; index < infoAlbumData.length; index++) {
            const cadaAlbumBuscado = infoAlbumData[index];
            let nombreAlbumBuscado = cadaAlbumBuscado.title
            let imgAlbum = cadaAlbumBuscado.cover
            let artistAlbum = cadaAlbumBuscado.artist.name
            let idAlbumBuscado= cadaAlbumBuscado.id
            let idArtistaAlbum= cadaAlbumBuscado.artist.id
            document.querySelector(".div-albumsearch").innerHTML+="<div class=div-search>"+
        
            "<a href='albums.html?idDeAlbum="+idAlbumBuscado+"'>"+"<h1 class=titulo-search>"+nombreAlbumBuscado+"</h1>"+"</a>"+
            "<a href='artistas.html?idDelArtista="+idArtistaAlbum+"'>"+"<h2 class=artista-search>"+artistAlbum+"</h2>"+"</a>"+
            "<img class=img-search src='"+imgAlbum+"'"+"<div class=div-iconos>"+"<i idBuscadoAlbum='"+idAlbumBuscado+"' class='far fa-play-circle iconoCancion iconossearch iconoAlbumBuscado'></i>"+"<i class='fas fa-heart  iconossearch '></i>"+"</div>"+ "</div>"
            
        }
        let iconoAlbumBuscado= document.querySelectorAll(".iconoAlbumBuscado")
        for (let index = 0; index < iconoAlbumBuscado.length; index++) {
            const cadaIcono = iconoAlbumBuscado[index];
            let idCadaIcono= cadaIcono.getAttribute("idBuscadoAlbum")
            console.log(idCadaIcono)
            cadaIcono.addEventListener("click", function(){
                document.querySelector(".reproduccionArtista").innerHTML= "<iframe scrolling='no' frameborder='0' allowTransparency='true' src='https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=1000&height=350&color=007FEB&layout=dark&size=medium&type=album&id="+idCadaIcono+"&app_id=1' width='100%' height='350'></iframe>"
            })
            
        }

    })

    
    














})