
  

  
  
   
    window.addEventListener("load", function() {
        
 
let codigoPlaylist = localStorage.getItem ("codigoPlaylist")
   if (codigoPlaylist == null) {
       alert ("no hay fav")
   }else{
       codigoPlaylist = codigoPlaylist.split (",")
       for (let index = 0; index < codigoPlaylist.length; index++) {
           const favorita = codigoPlaylist[index];
           
           fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/"+favorita+"/tracks")
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
                     

                     }
            document.querySelector (".sectionfavoritas").innerHTML += `<div class="sectioncancionesfoto"><img class=cancion src="`+ img+` "></div><div class="sectioninfocanciones"><p class=nombrecancion>`+nombre+`</p><a href="artistas.html?idDelArtista=`+idArtista +`"><p class=ipervincuos>`+artista+` </p> </a><a  href="albums.html?idDeAlbum= `+idDeAlbum+`"><p class="ipervincuosalbum">`+album+`</p></a>   <p class="duracion">`+duracion+`</p> <p class="iconotracks"> PLAY </p></div>`

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


















 