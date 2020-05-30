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
           let idDeAlbum = informacion.id
           let año = informacion.release_date





           let generos =informacion.genres.data
           console.log (generos)
           for (let index = 0; index < generos.length; index++) {
            const cadaGenero= generos[index];
           
            let genero = cadaGenero.name 
            let id = cadaGenero.id
         
           document.querySelector (".containalbum").innerHTML =  ' <div class=containfotoalbum> <img class=fotoalbum src=  "' + img +'" >  <p class="año">'+año+'</p> </div> <div class="containinfoalbum"> <h2 class="nombrealbum">' + nombreAlbum+' </h2> <a href="artistas.html?idDeAlbum= ' + idDeAlbum + ' ">  <p class="ag">'+artista+' </p> </a>   <a href="géneros.html?idDeAlbum='  + id + '  ">  <p class="ag1">' +genero+' </p></a>  </div> ' 
         

        


           

        

        
        }



          
        


    })

        })

        //agregar cuando todo funcione
//let queryString = new URLSearchParams (location.search)  
//let codigoAlbum = queryString.get ("idDeAlbum")