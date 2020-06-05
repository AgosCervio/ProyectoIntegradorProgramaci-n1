window.addEventListener("load", function (){
    
        

    

   
   // carrousel artistas
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists")
    .then (function(respuestaArtista){
        return respuestaArtista.json()
    })
    .then ( function(informacionArtista){
        console.log (informacionArtista)
        let trackArtistas= informacionArtista.data
        console.log (trackArtistas)
        for (let index = 0; index < trackArtistas.length; index++) {
            const cadaArtista = trackArtistas[index];
            let idArtista= cadaArtista.id 
            let cadaArtistaName= cadaArtista.name
            let cadaArtistaImage= cadaArtista.picture
            
            document.querySelector(".listadoartistas").innerHTML+= "<li class=uk-transition-toggle  tabindex=0 uk-transition-slide-top>"+ "<img class=imgtopalbum src="+cadaArtistaImage+">"+"<div class=uk-position-center uk-panel >" + "<a href='artistas.html?idDelArtista="+idArtista+"'>"+"<h1 class=titucarrousel>"+cadaArtistaName+"</h1>"+"</a>"+"<i class='far fa-play-circle sizeicono'></i>"+"<i class='fas fa-heart sizeicono'></i>"+"</li>"
            
          
            
            
        }

     })
     let queryString = new URLSearchParams (location.search)  
     let codigoAlbum = queryString.get ("idDeAlbum")
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/"+codigoAlbum+"/albums")

       //carrousel albums
    
     .then (function(respuestaAlbum){
         return respuestaAlbum.json()
     })
     .then (function(informacionAlbum){
         console.log(informacionAlbum)
         let trackAlbums= informacionAlbum.data
         console.log(trackAlbums)
         for (let index = 0; index < trackAlbums.length; index++) {
             const cadaAlbum = trackAlbums[index];
             let cadaAlbumTitle= cadaAlbum.title 
             let cadaAlbumImage= cadaAlbum.cover
             let idDeAlbum = cadaAlbum.id
             
     
     fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/"+codigoAlbum+"/tracks")
             document.querySelector(".listadoalbums").innerHTML+= "<li class=uk-transition-toggle tabindex=0>"+ "<img class=imgtopalbum src="+cadaAlbumImage+">"+"<div class=uk-position-center uk-panel>"+"<a href='albums.html?idDeAlbum= " + idDeAlbum + "''>"+"<h1 class=titucarrousel>"+cadaAlbumTitle+"</h1>"+"</a>"+"<i class='far fa-play-circle sizeicono'></i>"+"<i class='fas fa-heart sizeicono'></i>"+"</div>"+"</li>" 
             
         }
     })
    
     //carrousel tracks
     fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/"+codigoAlbum+"/tracks")
     .then (function(respuestaCanciones){
         return respuestaCanciones.json()
     })
     .then(function(informacionCanciones){
         console.log (informacionCanciones)
         let trackCanciones= informacionCanciones.data
         console.log(trackCanciones)
         for (let index = 0; index < trackCanciones.length; index++) {
             const cadaCancion = trackCanciones[index];
             let cadaCancionTitle= cadaCancion.title
             let cadaCancionImage= cadaCancion.album.cover
             let idDeTrack = cadaCancion.id
             
             document.querySelector(".listadocanciones").innerHTML+= "<li class=uk-transition-toggle tabindex=0>"+ "<img class=imgtopalbum src="+cadaCancionImage+">"+"<div class=uk-position-center uk-panel>"+"<a href='tracks.html?idDelTrack= "+ idDeTrack+" ''>"+"<h1 class=titucarrousel>"+cadaCancionTitle+"</h1>"+"</a>"+"<i class='far fa-play-circle sizeicono'></i>"+"<i class='fas fa-heart sizeicono'></i>"+"</div>"+"</li>" 

             
         }
         //cancion top 1 de artista muestre en la bienvenida
         let cancionTop1= trackCanciones[0].link
         console.log (cancionTop1)
        })
        //iconos que se muestren cuando pongo mouse
         let artistascarrousel= document.querySelector(".maincontainerartistas")
         artistascarrousel.addEventListener("mouseover", function(){
             let iconosartistas= document.querySelector(".sizeicono")
             iconosartistas.style.display="inline"

         })
         
             
         
         
         


        
     
      //carrousel podcasts
     fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/podcasts")
     .then (function(respuestaPodcasts){
         return respuestaPodcasts.json()
     })
     .then (function(informacionPodcast){
         console.log(informacionPodcast)
         let trackPodcast= informacionPodcast.data
         console.log (trackPodcast)
         for (let index = 0; index < trackPodcast.length; index++) {
             const cadaPodcast = trackPodcast[index];
              
             
         }
        })
        //bienvenida usuario
        let bienvenidacontainer= this.document.querySelector(".bienvenidacontainer")
     let nombreUsuario= prompt("¿Cómo Se llama?") 
    
      let bienvenida= document.querySelector(".bienvenida")
      let main= this.document.querySelector(".maincontainer")
       if (nombreUsuario == "") {
        bienvenida.innerHTML+= " "+ "usuario"
        
        } else { 
                 bienvenida.innerHTML+= " "+nombreUsuario
            }



    let usuarioInvitado= document.querySelector(".usuarioinvitado")
    usuarioInvitado.addEventListener("click", function(){
         bienvenidacontainer.style.display="none"
         main.style.display="block"


      })

      //un solo carrousel por pagina
    let body= document.querySelector("body")
    let topcanciones= document.querySelector(".maincontainercanciones")
    let topalbums= document.querySelector(".maincontaineralbums")
    
    function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
           } 
       let elemento = document.querySelector(".maincontainerartistas")
     let estaElElementoVisible = isScrolledIntoView(elemento)
     if (estaElElementoVisible == true) {
    
    elemento.style.display="block"
    topalbums.style.display="block"
    topcanciones.style.display="block"


      } 
})
        

     
