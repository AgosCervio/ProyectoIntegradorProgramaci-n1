
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
                  
            document.querySelector(".listacanciones").innerHTML += "<li>"+" <div class=section>"+"<img class=cancion src='"+ imagen+"'>"+"<div class=sectioninfo>"+"<a class=nombrecancion href='tracks.html?idDelTrack="+idTrack+"'>"+"<h2 class= nombrecancion>"+nombre+"</h2>"+"</a>"+"<a class=ipervinculos href='artistas.html?idDelArtista="+idArtista+"'><h2 class= tituloss>"+artista+"</h2></a>"+"<a  class=ipervinculos href='albums.html?idDeAlbum="+idDeAlbum+"'><h2 class= tituloss>"+album+"</h2></a>"+ "<i id='"+ idTrack+"' class='far fa-play-circle iconotracks'></i>"+ "<i codigo='" + idTrack+  "' idGo="+idTrack+" class='fa fa-minus borrar' ></i>"+"</li>"+"</div>"+"</div>"

            
          
            let play = document.querySelectorAll(".iconotracks")
            for (let index = 0; index < play.length; index++) {
                const cadaPlay = play[index];
                let id = cadaPlay.getAttribute("id")
                cadaPlay.addEventListener("click", function(){
                    sessionStorage.setItem("reproduccion", id)
                    




                    document.querySelector(".reproduccionArtista").innerHTML= "<iframe class='iframe' scrolling='no' frameborder='0' allowTransparency='true' src='https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id="+id+"&app_id=1' width='100%' height='150'></iframe>"
                })//on click play


               

    

            
  
                
               
                  
            }//cierra for
            


            let borrar = document.querySelectorAll(".borrar")
            for (let index = 0; index < borrar.length; index++) {
                const borrarcancion = borrar[index];
                let codigo= borrarcancion.getAttribute("codigo") 
                 
                
                    for (let index = 0; index < codigoPlaylist.length; index++) {
                        const cadaCodigo = codigoPlaylist[index];
                        
                    
                        borrarcancion.addEventListener("click", function(){
                        alert("hol")
                        if (cadaCodigo == codigo) {
                            codigoPlaylist.splice(cadaCodigo, 1) 
                            
                        }


                             
                        
                       
                        
                      
                        })
                    }
         
         }
            
       })
    
       
               
               
               
               
           
       
       
   }

 } else{
    alert("crea una playlist")
    
    }
    
})



    
  
    









