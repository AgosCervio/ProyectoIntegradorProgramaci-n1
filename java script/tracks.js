window.addEventListener ("load", function(){
    let queryString = new URLSearchParams (location.search)  
    let codigoTracks = queryString.get ("idDelTrack")
    
    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/"+ codigoTracks )
     .then (
        function(respuesta){
        return respuesta.json ();
         })
     .then(
        function(informaciontracks){
            let tracks = informaciontracks
            console.log (tracks)
            let nombre = informaciontracks.title
            let artista = informaciontracks.artist.name
            let idArtista = informaciontracks.artist.id
            let duracion = informaciontracks.duration
            let album = informaciontracks.album.title
            let idDeAlbum = informaciontracks.album.id
            let imagen = informaciontracks.contributors
            for (let index = 0; index < imagen.length; index++) {
                const unasola = imagen[index];
                 let img = unasola.picture
                
                 document.querySelector (".sectioncanciones").innerHTML = `<div class="sectioncancionesfoto"><img class=cancion src="`+ img+` "></div><div class="sectioninfocanciones"><p class=nombrecancion>`+nombre+`</p><a href="artistas.html?idDelArtista=`+idArtista +`"><p class=ipervincuos>`+artista+` </p> </a><a  href="albums.html?idDeAlbum= `+idDeAlbum+`"><p class="ipervincuosalbum">`+album+`</p></a>  <p class="duracion">`+duracion+`s</p> <a class="ipervincuos `+codigoTracks+`" href="miplaylist.html"><p id=`+codigoTracks+` class="ipervincuosplaylist">AGREGAR A PLAYLIST</p></a></a>  <p class="iconotracks"> PLAY </p></div>`

        
            
         let iconotracks = document.querySelectorAll (".iconotracks")
            for (let index = 0; index < iconotracks.length; index++) {
                const cadatoque = iconotracks[index];
                
                cadatoque.addEventListener("click", function(){
                    document.querySelector (".reproductortrack").innerHTML = `<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=300&height=300&color=007FEB&layout=dark&size=medium&type=tracks&id=`+codigoTracks+`&app_id=1" width="300" height="300"></iframe>`
                })
            
                }
      
            }
        } )
        

        let bottonPlay= document.querySelectorAll(".ipervincuosplaylist")
          
        
            bottonPlay.addEventListener("click", function(){
                
                
               
    if (sessionStorage.getItem("codigoPlaylist")!= null) {
        canciones= sessionStorage.getItem("codigoPlaylist").split(",")
        canciones.push(id)
        sessionStorage.setItem("codigoPlaylist", canciones)
      } else{
          canciones= [
        
          ]
          canciones.push(id)
          sessionStorage.setItem("codigoPlaylist", canciones)
      }
                
                
            })
            






    }) 
   
  

    