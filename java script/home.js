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
            let cadaArtistaCanciones= cadaArtista.tracklist
            console.log(cadaArtistaCanciones)
            document.querySelector(".listadoartistas").innerHTML+= "<li class=uk-transition-toggle  tabindex=0 uk-transition-slide-top>"+ "<img class=imgtopalbum src="+cadaArtistaImage+">"+"<div class=uk-position-center uk-panel >" + "<a href='artistas.html?idDelArtista="+idArtista+"'>"+"<h1 class=titucarrousel>"+cadaArtistaName+"</h1>"+"</a>"+"<i idArtista='"+ idArtista+"' class='far fa-play-circle icono sizeicono iconoCirculo iconoArtista'></i>"+"<i class='fas fa-heart sizeicono'></i>"+"</li>"

    
            
        }
        let iconoArtista= document.querySelectorAll(".iconoArtista")
            for (let index = 0; index < iconoArtista.length; index++) {
                const cadaIconoArtista = iconoArtista[index];
                let cadaIdIcono = cadaIconoArtista.getAttribute("idArtista")
                console.log(cadaIconoArtista)
                cadaIconoArtista.addEventListener("click", function(){
                document.querySelector(".reproduccionArtista").innerHTML="<iframe class='iframe' scrolling='no' frameborder='0' allowTransparency='true' src='https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=1000&height=250&color=007FEB&layout=dark&size=medium&type=radio&id=artist-"+cadaIdIcono+"&app_id=1' width='700''height='350'></iframe>"
                })
                
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
             document.querySelector(".listadoalbums").innerHTML+= "<li class=uk-transition-toggle tabindex=0>"+ "<img class=imgtopalbum src="+cadaAlbumImage+">"+"<div class=uk-position-center uk-panel>"+"<a href='albums.html?idDeAlbum= " + idDeAlbum + "''>"+"<h1 class=titucarrousel>"+cadaAlbumTitle+"</h1>"+"</a>"+"<i class='far fa-play-circle iconoCirculo sizeicono'></i>"+"<i class='fas fa-heart sizeicono'></i>"+"</div>"+"</li>" 
             
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
             let cadaCancionMusica= cadaCancion.isrc
             let cadaCancionTitle= cadaCancion.title
             let cadaCancionImage= cadaCancion.album.cover
             let idDeTrack = cadaCancion.id
             
             document.querySelector(".listadocanciones").innerHTML+= "<li class=uk-transition-toggle tabindex=0>"+ "<img class=imgtopalbum src="+cadaCancionImage+">"+"<div class=uk-position-center uk-panel>"+"<a href='tracks.html?idDelTrack= "+ idDeTrack+" ''>"+"<h1 class=titucarrousel>"+cadaCancionTitle+"</h1>"+"</a>"+"<i class='far fa-play-circle iconoCirculo sizeicono'></i>"+"<i class='fas fa-heart sizeicono'></i>"+"</div>"+"</li>" 

             
         }
         //cancion top 1 de artista muestre en la bienvenida
         let cancionTop1= trackCanciones[0].link
         console.log (cancionTop1)
        })
        //iconos que se muestren cuando pongo mouse
         let artistascarrousel= document.querySelector(".maincontainerartistas")
         artistascarrousel.addEventListener("mouseover", function(){
             
             let iconos= document.querySelectorAll(".icono")
             for (let index = 0; index < iconos.length; index++) {
                 const cadaIconoArtista = iconos[index];
                 iconos.classList.remove("sizeicono")
                 iconos.classList.add("iconoblock")
                 
             }
             

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
        
   

    let usuarioInvitado= document.querySelector(".usuarioinvitado")
    usuarioInvitado.addEventListener("click", function(){
        bienvenidacontainer.style.display="none"
         main.style.display="block"
         //bienvenidacontainer.preventDefault()


      })
      
      //let formularioIniciarSesion= document.querySelector(".formularioinciar")
      //let iniciarSesion= document.querySelector(".diviniciarsesion")
      
      
      

      

    



       

      


        
        
       
        
        
        
         
       
        
        

        
       
            
    

          
     

       
      //usuario logeado
      let usuarioYaRegistrado= sessionStorage.getItem("usuarioYaRegistrado")
     
      if (usuarioYaRegistrado != null) {
            usuarioYaRegistrado= JSON.parse(usuarioYaRegistrado)
            console.log(usuarioYaRegistrado)
            document.querySelector(".welcome").innerHTML+= " " + " Back" +" "+ usuarioYaRegistrado.nombre
            // aca el usuario ya esta logeado 
            document.querySelector(".bienvenidacontainer").style.display="none"
            document.querySelector(".maincontainer").style.display="block"

            
            
           
          
      } else {
          usuarioYaRegistrado= null

          
      }
      //boton sing up 
    document.querySelector(".botoniniciarsesion").addEventListener("click", function(){
        let nombreLogIn= document.querySelector("#username")
        let contraseñaLogIn= document.querySelector("#password")

        for (let index = 0; index < usuarios.length; index++) {
            const cadausuarioRegistrado = usuarios[index];
            if (cadausuarioRegistrado.nombre == nombreLogIn.value && cadausuarioRegistrado.password == contraseñaLogIn.value ) {
                alert("bien")
                usuarioYaRegistrado= cadausuarioRegistrado
                let usuarioYaRegistradoJSON= JSON.stringify(usuarioYaRegistrado)
                sessionStorage.setItem("usuarioYaRegistrado", usuarioYaRegistradoJSON)
                
                    document.querySelector(".bienvenidacontainer").style.display="none"
                    document.querySelector(".maincontainer").style.display="block"
                
                
            } 
            


            
        }

        



    })
    


      let usuarios= localStorage.getItem("usuarios")
      if (usuarios != null) {
            usuarios= JSON.parse(usuarios)
            console.log(usuarios)
          for (let index = 0; index < usuarios.length; index++) {
              const element = usuarios[index];
              console.log(element)
          }
      } else {
          usuarios= [

          ]
      }


      //registrar formulario
      document.querySelector(".botonregistrarse").addEventListener("click", function(){
         
        
        
        //registro nuevos datos 
        let nombreNuevo= document.querySelector("#name")
        let passwordNueva= document.querySelector("#contraseñausuarionuevo")
        let apellidoNuevo= document.querySelector("#apellido")
        let emailNuevo= document.querySelector("#mailusurionuevo")

        

        // campos vacios

        if(emailNuevo.value == ""){
            UIkit.notification({
                message: 'Complete su email',
                status: 'warning',
                pos: 'top-center',
                timeout: 5000
            });
            document.querySelector(".botonregistrarse").e.preventDefault()
            
        } else if (passwordNueva.value == ""){
            UIkit.notification({
                message: 'Complete su contraseña',
                status: 'danger',
                pos: 'top-center',
                timeout: 5000
            });
            document.querySelector(".botonregistrarse").e.preventDefault()
        } else{
            // paso los datos al localstorage
            
            

            
                //arrayDeGifsFavoritos y le voy a agregar el código el GIF
               let usuarioNuevo= {
                   nombre: nombreNuevo.value  ,
                   password: passwordNueva.value ,
               }
              let hola= usuarioNuevo
               usuarios.push(usuarioNuevo)
               let usuarioJson= JSON.stringify(usuarios)
               localStorage.setItem("usuarios", usuarioJson)
               console.log(localStorage)
              
               
               
               
                let body =document.querySelector(".maincontainer")
                body.style.display="block"
                let bienvenida= document.querySelector(".bienvenidacontainer")
                bienvenida.style.display="none"
                
                let titulowelcome= document.querySelector(".welcome")
                titulowelcome.innerHTML+= " " + usuarioNuevo.nombre
            
                
               
        }



        
        


        


            })
            
            if (usuarioNuevo.nombre != " ") {
                document.querySelector(".bienvenidacontainer").style.display="none"
                document.querySelector(".maincontainer").style.display="block"
    
                   
               }
            



      
      
})
        

     
