
  window.addEventListener("load", function() {
        
 

   if (sessionStorage.getItem("codigoPlaylist") != null) {
       alert("hola")
    let codigoPlaylist = sessionStorage.getItem("codigoPlaylist").split(",")
       
       for (let index = 0; index < codigoPlaylist.length; index++) {
           const cadaCancionFavorita = codigoPlaylist[index];
           
           fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/"+cadaCancionFavorita)
           .then (
              function(respuesta){
              return respuesta.json()
               })
           .then(
              function(informaciontracks){
                  console.log(informaciontracks)
                   let track = informaciontracks
                  console.log (track)
                  let nombre = track.title
                  console.log(nombre)
                  let artista = track.artist.name
                  let idArtista = track.artist.id
                  let duracion = track.duration
                  let album = track.album.title
                  let idDeAlbum = track.album.id
                  let imagen = track.album.cover
                  let idTrack= track.id
                  
            document.querySelector(".listacanciones").innerHTML += `<li><div class="sectioncancionesfoto"><img class=cancion src="`+ imagen+` "></div><div class="sectioninfocanciones"><p class=nombrecancion>`+nombre+`</p><a href="artistas.html?idDelArtista=`+idArtista +`"><p class=ipervincuos>`+artista+` </p> </a><a  href="albums.html?idDeAlbum=`+idDeAlbum+`"><p class="ipervincuosalbum">`+album+`</p></a>   <p class="duracion">`+duracion+`</p> <p id="`+idTrack+ `class="iconotracks"> PLAY </p></div></li>`

                  
              let play = document.querySelectorAll("iconotracks")
              for (let index = 0; index < play.length; index++) {
                  const cadaPlay = play[index];
                  let id = cadaPlay.getAttribute("id")
                  cadaPlay.addEventListener("click", function(){
                      alert("anda")
                      document.querySelector(".reproductortrack").innerHTML= "<iframe class=iframe id=dzplayer dztype=dzplayer src='http://developers.deezer.com/us/plugins/player?playlist=true&width=700&height=240&autoplay=false&type=tracks&id="+id+"' scrolling=no frameborder=0 style=border:none; overflow:hidden; width=700 height=40 allowTransparency=true></iframe>"
                  })
                  
              }

              })
       
   }

 

 }

 })

 





















 