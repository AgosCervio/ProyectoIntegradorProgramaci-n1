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
         
           document.querySelector (".containalbum").innerHTML =  ' <div class=containfotoalbum> <img class=fotoalbum src=  "' + img +'" >  <p class="año">'+año+'</p> </div> <div class="containinfoalbum"> <h2 class="nombrealbum">' + nombreAlbum+' </h2> <a href="artistas.html?idDelArtista= ' + idArtista + ' ">  <p class="ipervinculo">'+artista+' </p> </a>   <a href="géneros.html?idDelGenero='  + id + '  ">  <p class="ipervinculo1">' +genero+' </p></a>  </div> ' 
         
        
        }

    })

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
           let imagentema= cadatema.cover
           let idtema= cadatema.id

           document.querySelector(".temas").innerHTML += "<div class=hola>"+"<li>"+"<a href='tracks.html?idDelTrack="+idtema+"'>"+"<h1 class=titulodeltrack>"+nombretema+"</h1>"+"</a>"+"</div>"+"</li>"




           }

           

         })



        })

      
