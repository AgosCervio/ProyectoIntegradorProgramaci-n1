window.addEventListener ("load", function(){
    let queryString = new URLSearchParams (location.search)  
    let codigoTracks = queryString.get ("idDeTracks")
    
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
            let duracion = informaciontracks.duration
            let album = informaciontracks.album.title
            let idDeTracks = informaciontracks.id
            let imagen = informaciontracks.contributors
            for (let index = 0; index < imagen.length; index++) {
                const unasola = imagen[index];
                 let img = unasola.picture
                



                 document.querySelector (".sectioncanciones").innerHTML = `<div class="sectioncancionesfoto"><img class=cancion src="`+ img+` "><p class=nombrecancion>`+nombre+`</p><a href="artistas.html?idDeTracks=`+idDeTracks +`"><p class=ipervincuos>`+artista+` </p> </a><a  href="albums.html?idDeTracks= `+idDeTracks+`"><p class="ipervincuosalbum">`+album+`</p></a><p class="duracion">`+duracion+`</p></div>`

        
            }
         

   

   

   } )

     








        })

        //let queryString = new URLSearchParams (location.search)  
    //let codigoTracks = queryString.get ("idDeTracks")