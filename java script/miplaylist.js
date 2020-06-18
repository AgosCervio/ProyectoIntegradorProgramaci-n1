
  window.addEventListener("load", function() {
        
 

   if (sessionStorage.getItem("codigoPlaylist") != null) {
       
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
                  
            document.querySelector(".listacanciones").innerHTML += "<li>"+"<img src='"+ imagen+"'>"+"<a href='tracks.html?idDelTrack="+idTrack+"'>"+"<h2>"+nombre+"</h2>"+"</a>"+"<a href='artistas.html?idDelArtista="+idArtista+"'><h3>"+artista+"</h3></a>"+"<a href='albums.html?idDeAlbum="+idDeAlbum+"'><h2>"+album+"</h2></a>"+ "<i id='"+ idTrack+"' class='far fa-play-circle iconotracks'></i>"+"</li>"

                  
              
            let play = document.querySelectorAll(".iconotracks")
            for (let index = 0; index < play.length; index++) {
                const cadaPlay = play[index];
                let id = cadaPlay.getAttribute("id")
                cadaPlay.addEventListener("click", function(){
                    
                    document.querySelector(".reproduccionArtista").innerHTML= "<iframe class='iframe' scrolling='no' frameborder='0' allowTransparency='true' src='https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id="+id+"&app_id=1' width='100%' height='150'></iframe>"
                })
                
            }
   
              })
              
       
   }
   

 

 } else{
     alert("crea una playlist")
 }

 })

 





















 