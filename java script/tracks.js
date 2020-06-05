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
                



                 document.querySelector (".sectioncanciones").innerHTML = `<div class="sectioncancionesfoto"><img class=cancion src="`+ img+` "></div><div class="sectioninfocanciones"><p class=nombrecancion>`+nombre+`</p><a href="artistas.html?idDelArtista=`+idArtista +`"><p class=ipervincuos>`+artista+` </p> </a><a  href="albums.html?idDeAlbum= `+idDeAlbum+`"><p class="ipervincuosalbum">`+album+`</p></a><p class="duracion">`+duracion+`</p></div>`

        
            }
         
           


   } )


   let codigoArtista = queryString.get("idDelArtista");
   fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/"+codigoArtista +"/top")

   .then (
    function(respuesta){
    return respuesta.json ();
     })
     .then (
         function (infodeartista5){
             let top5 = infodeartista5.data
             console.log (top5)
             
           for (let index = 0; index < top5.length; index++) {
               const cadatop = top5[index];

               let titulotop = cadatop.title
               let idtop = cadatop.id
               let picturetop = cadatop.contributors
               for (let index = 0; index < picturetop.length; index++) {
                   const foto= picturetop[index];
                   let imagentop = foto.picture

                   document.querySelector(".temas5").innerHTML += "<li  class=uk-transition-toggle tabindex=0>"+"<img class=imagentop5 src='"+imagentop+"'>"+"<div class='uk-position-center uk-panel'>"+"<a href='tracks.html?idDelTrack="+idtop+"'>"+ "<h1 class=nombretop5>"+titulotop+"</h1>"+"</a>"+"<i class='far fa-play-circle sizeicono'></i>"+"<i class='fas fa-heart sizeicono'></i>"+"</div>"+"</li>"
                 }
               
            }
         }
     )




        })
