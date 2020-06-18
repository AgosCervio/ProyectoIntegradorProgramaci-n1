
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
                  
            document.querySelector(".listacanciones").innerHTML += `<li><div class="sectioncancionesfoto"><img class=cancion src="`+ imagen+` "></div><div class="sectioninfocanciones"><p class=nombrecancion>`+nombre+`</p><a href="artistas.html?idDelArtista=`+idArtista +`"><p class=ipervincuos>`+artista+` </p> </a><a  href="albums.html?idDeAlbum=`+idDeAlbum+`"><p class="ipervincuosalbum">`+album+`</p></a>   <p class="duracion">`+duracion+`</p> <p class="iconotracks"> PLAY </p></div></li>`

                  ""
              

              } )
       
   }

 

 }

 })

 

 

 ` <ol class="cancionesplaylist">
 <div class="divcancionesplaylist playlistcategoria"><li>Nombre</li><li>Artista</li><li>Cancion</li></div>
 <div class="divcancionesplaylist"><li class="titulocancionplaylist"><p class=nombrecancion>`+nombre+`</p></li>
 <li class="artistacancionplaylist">   <a href="artistas.html?idDelArtista=`+idArtista +`"><p class=ipervincuos>`+artista+` </p> </a> </li>
<li><img class="imagencancionplaylist" src="`+ img+`" alt=""></li></div>
 
  
</ol>`


  

   











 
