window.addEventListener ("load", function(){
    let queryString = new URLSearchParams (location.search)  
    let codigoAlbum = queryString.get ("idDeAlbum")
    
    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + codigoAlbum )
    .then (
        function(respuesta){
        return respuesta.json ();
         })
    .then (
            function (informacion){
           let album = informacion.data
           console.log (informacion)

           let nombreAlbum = informacion.title
           let img = informacion.cover
           let artista = informacion.artist.name
           let idArtista = informacion.artist.id
          
           let año = informacion.release_date

           let generos =informacion.genres.data
           console.log (generos)
           for (let index = 0; index < generos.length; index++) {
            const cadaGenero= generos[index];
           
            let genero = cadaGenero.name 
            let id = cadaGenero.id
         
           document.querySelector (".containalbum").innerHTML =  ' <div class=containfotoalbum> <img class=fotoalbum src=  "' + img +'" >  <p class="año">'+año+'</p> </div> <div class="containinfoalbum"> <h2 class="nombrealbum">' + nombreAlbum+' </h2> <a href="artistas.html?idDelArtista= ' + idArtista + ' ">  <p class="ipervinculo">'+artista+' </p> </a>   <a href="géneros.html?idDelGenero='  + id + '  ">  <p class="ipervinculo1">' +genero+' </p></a> <p  id class="iconoalbum"> PLAY </p>  </div> ' 
         


           let iconoalbum = document.querySelectorAll (".iconoalbum")
           for (let index = 0; index < iconoalbum.length; index++) {
               const cadacancionalbum = iconoalbum[index];
               
               cadacancionalbum.addEventListener("click", function(){
                   document.querySelector (".reproduccionArtista").innerHTML = '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=album&id='+codigoAlbum+'&app_id=1" width="100%" height="350"></iframe>'
                  
                  })
            
                }
      
            }
        
        }

    )

    

    
           //canciones que pertenecen al album

    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/"+codigoAlbum+"/tracks")
    .then (
      function(respuestatrack){
      return respuestatrack.json ();
       })
       .then(
         function(informaciontemas){
           let temas= informaciontemas.data
           console.log (temas)
           for (let index = 0; index < temas.length; index++) {
             const cadatema = temas[index];
             
             let nombretema= cadatema.title
         
           let idtema= cadatema.id
           let duracion = cadatema.duration
           let canciones;
           console.log(canciones)
           document.querySelector (".temasdelalbum").innerHTML += "<div class=numeros>   <i idtema="+idtema+" class='fa fa-play-circle play' aria-hidden='true'></i></div> <div class=hola><ul class=temas><li><a href='tracks.html?idDelTrack="+idtema+"'><h1 class=titulodeltrack>"+nombretema+"</h1></a></li></ul></div><p class=tiempo>"+duracion+"s</p><div class=icono><a href='miplaylist.html'><i  idGo="+idtema+" class='fa fa-heart-o go' ></i></a></div> "
      
//capta los id de del track para cada corazon y al clickear se cambian de color a azul
          let go = document.querySelectorAll(".go")
          for (let index = 0;  index < go.length; index++) {
              const cadaGoPlay = go[index];
              let idGo= cadaGoPlay.getAttribute("idGo")
              cadaGoPlay.addEventListener("click", function(){
                cadaGoPlay.style.backgroundColor = "blue"

 
                  //cancion  se agrega a playlist
                  if (sessionStorage.getItem("codigoPlaylist")!= null) {
                    canciones= sessionStorage.getItem("codigoPlaylist").split(",")
                    canciones.push(idGo)
                    sessionStorage.setItem("codigoPlaylist", canciones)
                  } else{
                      canciones= [
                    
                      ]
                      canciones.push(idGo)
                      sessionStorage.setItem("codigoPlaylist", canciones)
                  }
                 
                
              })
              // funcion para que se reprodusca el track

           let play = document.querySelectorAll (".play")
           for (let index = 0; index < play.length; index++) {
               const cadacanciondel = play[index];
               let idcadau = cadacanciondel.getAttribute("idtema")
               cadacanciondel.addEventListener("click", function(){
                 sessionStorage.setItem("reproduccion", idcadau)
                   document.querySelector (".reproduccionArtista").innerHTML = "<iframe scrolling='no' frameborder='0' allowTransparency='true' src='https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id="+idcadau+"&app_id=1' width='100%' height='350'></iframe>"
                  
                  })
            
                }
              

              
                
               
              } 
         


           }

           

         })



        })

      