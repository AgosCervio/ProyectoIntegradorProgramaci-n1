window.addEventListener("load", function(){
        let queryString = new URLSearchParams(location.search);
        let codigoArtista = queryString.get("idDelArtista");
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/"+ codigoArtista)
        .then (function(respuestaartista){
            return respuestaartista.json()

        })
        .then (function(informacionArtista){
            console.log (informacionArtista)
            let nombreArtista= informacionArtista.name
            let seguidoresArtista= informacionArtista.nb_fan
            let fotoArtista= informacionArtista.picture
                document.querySelector(".containartista").innerHTML="<div class=containfotoartista rojo>"+ "<img class=fotoartista src="+fotoArtista+ ">"+"<p class=fans>"+ seguidoresArtista+""+ "fans"+"</p>"+"</div>"+"<div class=containinfoartista amarillo>"+"<h2 class=nombreartista>"+nombreArtista+"</h2>"+'</div><div class=containcanciones violeta><p>Top Five</p><ol class=listacanciones></ol></div>'
                document.querySelectorAll(".top")[0].innerHTML+= nombreArtista 
                document.querySelectorAll(".top")[1].innerHTML+= nombreArtista 
                 
                
        })
      fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/"+codigoArtista+"/top")
      .then ( function(respuestaTracks){
          return respuestaTracks.json()
      })
      .then(function(infoTracks){
          console.log(infoTracks)
          let trackArtista= infoTracks.data
          console.log(trackArtista)
          for (let index = 0; index < trackArtista.length; index++) {
              const cadaTrack = trackArtista[index];
              let nombreTrack= cadaTrack.title
              let idTrack= cadaTrack.id
              console.log(nombreTrack)
              document.querySelector("ol.listacanciones").innerHTML+="<li class= cancionestop5>"+"<a href='tracks.html?idDelTrack="+idTrack+"'>"+nombreTrack+"</a>"+"</li>"
              
          }
      })


      //albums artista
      fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/"+codigoArtista+"/albums")
      .then(function(respuestaAlbum){
          return respuestaAlbum.json()
      })
      .then (function(informacionAlbum){
          console.log(informacionAlbum)
          let albumArtista= informacionAlbum.data
          console.log(albumArtista)
          for (let index = 0; index < albumArtista.length; index++) {
              const cadaAlbum = albumArtista[index];
              let nomreAlbum= cadaAlbum.title
              let imgAlbum= cadaAlbum.cover
              let idAlbum= cadaAlbum.id
              document.querySelector(".listadoartistaalbum").innerHTML+="<li  class=uk-transition-toggle tabindex=0>"+"<img class=imagenalbumartista src='"+imgAlbum+"'>"+"<div class='uk-position-center uk-panel'>"+"<a href='albums.html?idDeAlbum="+idAlbum+"'>"+"<h1 class=titulotopalbumartista>"+nomreAlbum+"</h1>"+"</a>"+"<i class='far fa-play-circle sizeicono'></i>"+"<i class='fas fa-heart sizeicono'></i>"+"</div>"+"</li>"
              
          }
      })

      

    //artista canciones

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/"+codigoArtista+"/radio")
    .then(function(respuestaCancion){
        return respuestaCancion.json()
    })
    .then (function(infocancion){
        console.log(infocancion)
        let cancionArtista= infocancion.data
        console.log(cancionArtista)
        for (let index = 0; index < cancionArtista.length; index++) {
            const cadaCancion = cancionArtista[index];
            let cadaCancionNombre= cadaCancion.title
            let imgCancion= cadaCancion.album.cover
            document.querySelector(".tracks").innerHTML+="<li  class=uk-transition-toggle tabindex=0>"+
            "<img class=imagenalbumartista  src='"+imgCancion+"'>"+
            "<div class='uk-position-center uk-panel'>"+"<a href='albums.html'>"+"<h1 class=titulotopalbumartista>"+cadaCancionNombre+"</h1>"+"</a><i class='far fa-play-circle sizeicono'></i>"+"<i class='fas fa-heart sizeicono'></i>"+"</div>"+"</li>"
            
        }
    })

    //artistas relacionados
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/"+codigoArtista+"/related")
      .then(function(respuestaArtistaRelacionado){
        return respuestaArtistaRelacionado.json()
    })
    .then (function(informacioArtistaRelacionado){
        console.log(informacioArtistaRelacionado)
        let artistaRelacionado= informacioArtistaRelacionado.data
        console.log(artistaRelacionado)
        for (let index = 0; index < artistaRelacionado.length; index++) {
            const cadaArtistaRelacionado = artistaRelacionado[index];
            let ImgCadaRelacionado= cadaArtistaRelacionado.picture
            let nombreCadaRelacionado= cadaArtistaRelacionado.name
            let idRelacionado= cadaArtistaRelacionado.id
            document.querySelector(".listadodeartistasrelacionados").innerHTML+= "<li  class=uk-transition-toggle tabindex=0>"+
            "<img class=imagenalbumartista  src='"+ImgCadaRelacionado+"' >"+
            "<div class='uk-position-center uk-panel'>"+"<a href='artistas.html?idDelArtista="+idRelacionado+"'>"+"<h1 class=titulotopalbumartista>"+nombreCadaRelacionado+"</h1>"+"</a>"+"</div>"+"</li>"
            
        }

         

       
    })

    
      








       
        
            
            
})















