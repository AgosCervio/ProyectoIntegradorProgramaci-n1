window.addEventListener("load", function (){

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists")
    .then (function(respuestaArtista){
        return respuestaArtista.json()
    })
    .then ( function(informacionArtista){
        console.log (informacionArtista)
        let trackArtistas= informacionArtista.data
        console.log (trackArtistas)
        for (let index = 0; index < trackArtistas.length; index++) {
            const cadaArtista = trackArtistas[index];
            let cadaArtistaName= cadaArtista.name
            let cadaArtistaImage= cadaArtista.picture
            document.querySelector(".listadoartistas").innerHTML+= "<li class=uk-transition-toggle tabindex=0>"+ "<img class=imgtopalbum src="+cadaArtistaImage+">"+"<div class=uk-position-center uk-panel>"+"<a href='artistas.html'>"+"<h1 class=titucarrousel>"+cadaArtistaName+"</h1>"+"</a>"+"</div>"+"</li>"
            
        }

     })
     let queryString = new URLSearchParams (location.search)  
     let codigoAlbum = queryString.get ("idDeAlbum")
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/"+codigoAlbum+"/albums")
     .then (function(respuestaAlbum){
         return respuestaAlbum.json()
     })
     .then (function(informacionAlbum){
         console.log(informacionAlbum)
         let trackAlbums= informacionAlbum.data
         console.log(trackAlbums)
         for (let index = 0; index < trackAlbums.length; index++) {
             const cadaAlbum = trackAlbums[index];
             let cadaAlbumTitle= cadaAlbum.title 
             let cadaAlbumImage= cadaAlbum.cover
             let idDeAlbum = cadaAlbum.id
             document.querySelector(".listadoalbums").innerHTML+= "<li class=uk-transition-toggle tabindex=0>"+ "<img class=imgtopalbum src="+cadaAlbumImage+">"+"<div class=uk-position-center uk-panel>"+"<a href='albums.html?idDeAlbum= " + idDeAlbum + "'>"+"<h1 class=titucarrousel>"+cadaAlbumTitle+"</h1>"+"</a>"+"</div>"+"</li>" 
             
         }
     })
     
     fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/"+codigoAlbum+"/tracks")
     .then (function(respuestaCanciones){
         return respuestaCanciones.json()
     })
     .then(function(informacionCanciones){
         console.log (informacionCanciones)
         let trackCanciones= informacionCanciones.data
         console.log(trackCanciones)
         for (let index = 0; index < trackCanciones.length; index++) {
             const cadaCancion = trackCanciones[index];
             let cadaCancionTitle= cadaCancion.title
             let cadaCancionImage= cadaCancion.album.cover
             let idDeTracks = cadaCancion.id
             document.querySelector(".listadocanciones").innerHTML+= "<li class=uk-transition-toggle tabindex=0>"+ "<img class=imgtopalbum src="+cadaCancionImage+">"+"<div class=uk-position-center uk-panel>"+"<a href='tracks.html?idDeTracks= "+ idDeTracks+" '>"+"<h1 class=titucarrousel>"+cadaCancionTitle+"</h1>"+"</a>"+"</div>"+"</li>" 

             
         }
     })

     




})