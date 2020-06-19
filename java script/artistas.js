window.addEventListener("load", function(){




        let queryString = new URLSearchParams(location.search);
        let codigoArtista = queryString.get("idDelArtista");
        let canciones;
        console.log(canciones)
        if (codigoArtista == null) {
            alert("error, selecciona un artista")
        }
        
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/"+ codigoArtista)
        .then (function(respuestaartista){
            return respuestaartista.json()

        })
        .then (function(informacionArtista){
            console.log (informacionArtista)
            let nombreArtista= informacionArtista.name
            let seguidoresArtista= informacionArtista.nb_fan
            let fotoArtista= informacionArtista.picture_big
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
              document.querySelector("ol.listacanciones").innerHTML+="<li class= cancionestop5 iconoscarrousel>"+"<a href='tracks.html?idDelTrack="+idTrack+"'>"+nombreTrack+"</a>"+"<i idTrack='"+ idTrack+"' class='far fa-play-circle icono artistaicono  iconoArtista'></i>"+"<i idIconoCorazon='"+idTrack+"' class='fas fa-heart artistaicono iconocorazon'></i>"+"</li>"
             
              
          }

          
          //home
          let iconos= document.querySelectorAll(".icono")
          for (let index = 0; index < iconos.length; index++) {
              const cadaIconoTopFive = iconos[index];
              let idCadaIconoTopFive= cadaIconoTopFive.getAttribute("idTrack")
              cadaIconoTopFive.addEventListener("click", function(){
                  sessionStorage.setItem("reproduccion", idCadaIconoTopFive)
                  document.querySelector(".reproduccionArtista").innerHTML="<iframe class='iframe' scrolling=no frameborder=0 allowTransparency=true src='https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id="+idCadaIconoTopFive+"&app_id=1' width=100% height=350></iframe>"
                  
              })
              
          }
          

          let iconoCorazon= document.querySelectorAll(".iconocorazon")
          
          for (let index = 0; index < iconoCorazon.length; index++) {
              const cadaIconoCorazon = iconoCorazon[index];
              let idIconoCorazon= cadaIconoCorazon.getAttribute("idiconoCorazon")
              cadaIconoCorazon.addEventListener("click", function(){
                UIkit.notification({
                    message: 'Se ha agregado a tu Playlist',
                    status: 'success',
                    pos: 'top-center',
                    timeout: 1000
                });
                  
                  
                  if (sessionStorage.getItem("codigoPlaylist")!= null) {
                    canciones= sessionStorage.getItem("codigoPlaylist").split(",")
                    canciones.push(idIconoCorazon)
                    sessionStorage.setItem("codigoPlaylist", canciones)
                  } else{
                      canciones= [

                      ]
                      canciones.push(idIconoCorazon)
                      sessionStorage.setItem("codigoPlaylist", canciones)

                  }
                  
                  
                  
              })
              
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
              document.querySelector(".listadoartistaalbum").innerHTML+="<li  class='uk-transition-toggle ' tabindex=0>"+"<img class=imagenalbumartista src='"+imgAlbum+"'>"+"<div class='uk-position-center uk-panel'>"+"<a href='albums.html?idDeAlbum="+idAlbum+"'>"+"<h1 class=titulotopalbumartista>"+nomreAlbum+"</h1>"+"</a>"+"<i idiconoAlbum='"+idAlbum+ "' class='far fa-play-circle iconoo sizeicono'></i>"+"<i class='fas fa-heart sizeicono'></i>"+"</div>"+"</li>"
              
          }
          let iconoAlbum= document.querySelectorAll(".iconoo")
          for (let index = 0; index < iconoAlbum.length; index++) {
              const cadaIconoAlbum = iconoAlbum[index];
              let idCadaIconoAlbum = cadaIconoAlbum.getAttribute("idiconoAlbum")
              cadaIconoAlbum.addEventListener("click", function(){
                  document.querySelector(".reproduccionArtista").innerHTML="<iframe scrolling='no' frameborder='0' allowTransparency='true' src='https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=1000&height=350&color=007FEB&layout=dark&size=medium&type=album&id="+idCadaIconoAlbum+"&app_id=1' width='100%' height='350'></iframe>"
              })
              
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
            let idCancion= cadaCancion.id
            document.querySelector(".tracks").innerHTML+="<li  class='uk-transition-toggle ' tabindex=0>"+
            "<img class=imagenalbumartista  src='"+imgCancion+"'>"+
            "<div class='uk-position-center uk-panel'>"+"<a href='tracks.html?idDelTrack="+idCancion+"'>"+"<h1 class=titulotopalbumartista>"+cadaCancionNombre+"</h1>"+"</a><i idiconoCancion='"+idCancion+"' class='far fa-play-circle iconoTrack sizeicono'></i>"+"<i idCanciones='"+idCancion+"' class='fas fa-heart sizeicono iconocorazones '></i>"+"</div>"+"</li>"
            
        }

        let iconoTrack= document.querySelectorAll(".iconoTrack")
        for (let index = 0; index < iconoTrack.length; index++) {
            const cadaIconoTrack = iconoTrack[index];
            let idCadaIconoTrack= cadaIconoTrack.getAttribute("idiconoCancion")
            cadaIconoTrack.addEventListener("click", function(){
                document.querySelector(".reproduccionArtista").innerHTML="<iframe scrolling='no' frameborder='0' allowTransparency='true' src='https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=1000&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id="+idCadaIconoTrack+"&app_id=1' width='100%' height='150'></iframe>"
            })
            
        }
        let corazon= document.querySelectorAll(".iconocorazones")
        
        for (let index = 0; index < corazon.length; index++) {
            const cadaCorazon = corazon[index];
            let idCorazon = cadaCorazon.getAttribute("idCanciones")
            cadaCorazon.addEventListener("click", function(){
                UIkit.notification({
                    message: 'Se ha agregado a tu Playlist',
                    status: 'success',
                    pos: 'top-center',
                    timeout: 1000
                });
                sessionStorage.setItem("reproduccion", idCorazon)
               if ( sessionStorage.getItem("codigoPlaylist") != null){
                   canciones= sessionStorage.getItem("codigoPlaylist").split(",")
                   
                   
                   console.log(canciones)
                   canciones.push(idCorazon)
                   sessionStorage.setItem("codigoPlaylist", canciones)

               } else{
                   canciones= [

                   ]
                   canciones.push(idCorazon)
                   sessionStorage.setItem("codigoPlaylist", canciones)

               }
               
              
               })
            
        } 
        
    
        
        
    })
    
    
// playlist
        
        

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















