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
            document.querySelector(".listadoartistas").innerHTML+= "<li class='uk-transition-toggle'  tabindex=0 uk-transition-slide-top>"+ "<img class=imgtopalbum src="+cadaArtistaImage+">"+"<div class=uk-position-center uk-panel >" + "<a href='artistas.html?idDelArtista="+idArtista+"'>"+"<h1 class=titucarrousel>"+cadaArtistaName+"</h1>"+"</a>"+"<i idArtista='"+ idArtista+"' class='far fa-play-circle icono sizeicono iconoCirculo iconoArtista'></i>"+"<i class='fas fa-heart sizeicono'></i>"+"</li>"

    
            
        }
        let iconoArtista= document.querySelectorAll(".iconoArtista")
            for (let index = 0; index < iconoArtista.length; index++) {
                const cadaIconoArtista = iconoArtista[index];
                let cadaIdIcono = cadaIconoArtista.getAttribute("idArtista")
                console.log(cadaIconoArtista)
                cadaIconoArtista.addEventListener("click", function(){
                    sessionStorage.setItem("reproduccion", cadaIdIcono)
                document.querySelector(".reproduccionArtista").innerHTML="<iframe class='iframe' scrolling='no' frameborder='0' allowTransparency='true' src='https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=1000&height=250&color=007FEB&layout=dark&size=medium&type=radio&id=artist-"+cadaIdIcono+"&app_id=1' width='100%''height='100'></iframe>"
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
             document.querySelector(".listadoalbums").innerHTML+= "<li class=uk-transition-toggle tabindex=0>"+ "<img class=imgtopalbum src="+cadaAlbumImage+">"+"<div class=uk-position-center uk-panel>"+"<a href='albums.html?idDeAlbum= " + idDeAlbum + "''>"+"<h1 class=titucarrousel>"+cadaAlbumTitle+"</h1>"+"</a>"+"<i idDeAlbum="+ idDeAlbum +" class='far fa-play-circle sizeicono iconoCirculo  iconoalbum'></i>"+"<i class='fas fa-heart sizeicono'></i>"+"</div>"+"</li>" 
 
         }
         let iconoalbum= document.querySelectorAll(".iconoalbum")
             for (let index = 0; index < iconoalbum.length; index++) { 
                 const cadaIconoalbum= iconoalbum[index];
               let idcada = cadaIconoalbum.getAttribute ("idDeAlbum")
                 cadaIconoalbum.addEventListener("click", function(){
                 document.querySelector(".reproduccionArtista").innerHTML= `<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=album&id=`+idcada+`&app_id=1" width="100%" height="1000"></iframe>`
                  })
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
             
             document.querySelector(".listadocanciones").innerHTML+= "<li class='uk-transition-toggle iconoscarrousel' tabindex=0>"+ "<img class=imgtopalbum src="+cadaCancionImage+">"+"<div class=uk-position-center uk-panel>"+"<a href='tracks.html?idDelTrack= "+ idDeTrack+" ''>"+"<h1 class=titucarrousel>"+cadaCancionTitle+"</h1>"+"</a>"+"<i idDeTrack= "+ idDeTrack+" class='far fa-play-circle sizeicono iconoCirculo  iconotrack'></i>"+"<i class='fas fa-heart sizeicono'></i>"+"</div>"+"</li>" 

           
        
         }

         let iconotrack= document.querySelectorAll(".iconotrack")
         for (let index = 0; index < iconotrack.length; index++) { 
             const cadaIconotrack= iconotrack[index];
             let idcada1 = cadaIconotrack.getAttribute ("idDeTrack")
             cadaIconotrack.addEventListener("click", function(){
                sessionStorage.setItem("reproduccion", idcada1)
             document.querySelector(".reproduccionArtista").innerHTML= `<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=`+idcada1+`&app_id=1" width="100%" height="100"></iframe>`
              })
       
         }

        
        })
        
         
             
         
         
         


        
     
     
        //bienvenida usuario
        
   

    let usuarioInvitado= document.querySelector(".usuarioinvitado")
    usuarioInvitado.addEventListener("click", function(){
        document.querySelector(".bienvenidacontainer").style.display="none"
         document.querySelector(".maincontainer").style.display="block"
         //bienvenidacontainer.preventDefault()


      })
      
      //let formularioIniciarSesion= document.querySelector(".formularioinciar")
      //let iniciarSesion= document.querySelector(".diviniciarsesion")
      
      
      

      

    



       

      


        
        
       
        
        
        
         
       
        
        

        
       
            
    

          
     

       
      //usuario logeado no se pone la bienvenida pq hay algo en usuarioYaRegistrado
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
        let emailLogIn= document.querySelector("#username")
        let contraseñaLogIn= document.querySelector("#password")
        let incorrecto= true
        for (let index = 0; index < usuarios.length; index++) {
            const cadausuarioRegistrado = usuarios[index];
            if (cadausuarioRegistrado.email == emailLogIn.value && cadausuarioRegistrado.password == contraseñaLogIn.value ) {
               incorrecto= false
                usuarioYaRegistrado= cadausuarioRegistrado
                console.log(usuarioYaRegistrado)
                let usuarioYaRegistradoJSON= JSON.stringify(usuarioYaRegistrado)
                sessionStorage.setItem("usuarioYaRegistrado", usuarioYaRegistradoJSON)
                
                    document.querySelector(".bienvenidacontainer").style.display="none"
                    document.querySelector(".maincontainer").style.display="block"
                    document.querySelector(".welcome").innerHTML+= " " + " Back" +" "+ usuarioYaRegistrado.nombre
            } 
            

        }
        if (incorrecto == true) {

            UIkit.notification({
            message: 'Email o Contraseña erónea',
            status: 'warning',
            pos: 'top-center',
            timeout: 1000
        });
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
         
        console.log(3)
        
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
            
                
            
        } else if (passwordNueva.value == ""){
            UIkit.notification({
                message: 'Complete su contraseña',
                status: 'danger',
                pos: 'top-center',
                timeout: 5000
            });
            document.querySelector(".botonregistrarse").e.preventDefault()
        } else if (emailNuevo.value != " ") {
                console.log(usuarios)
                let error= false
                for (let index = 0; index < usuarios.length; index++) {
                    const cadaUsuario = usuarios[index];
                    
                    let cadaUsuarioEmail= cadaUsuario.email
                    console.log(cadaUsuarioEmail)
                    if (emailNuevo.value == cadaUsuarioEmail) {
                        UIkit.notification({
                            message: 'email ya registrado, pruebe con otro',
                            status: 'warning',
                            pos: 'top-center',
                            timeout: 5000
                        }); 
                        document.querySelector(".botonregistrarse").e.preventDefault()
                        error = true
                        
                    }
                }
                    if (error == false){ 
                            // paso los datos al localstorage
            
            

            
                //arrayDeGifsFavoritos y le voy a agregar el código el GIF
                    let usuarioNuevo= {
                    nombre: nombreNuevo.value  ,
                    password: passwordNueva.value ,
                    email: emailNuevo.value
                    }
                    usuarios.push(usuarioNuevo)
                    let usuarioJson= JSON.stringify(usuarios)
                    localStorage.setItem("usuarios", usuarioJson)
                    console.log(localStorage)
                    console.log(usuarioNuevo)
                    let usuarioNuevoJson= JSON.stringify(usuarioNuevo)
                    sessionStorage.setItem("usuarioYaRegistrado", usuarioNuevoJson)
              
                    let body =document.querySelector(".maincontainer")
                    body.style.display="block"
                    let bienvenida= document.querySelector(".bienvenidacontainer")
                    bienvenida.style.display="none"
                    let nombreCuandoRegistra= usuarioNuevo.nombre
                    document.querySelector(".welcome").innerHTML+= " " + usuarioNuevo.nombre
                
                    console.log(usuarioNuevo.nombre)

                 }
                    
                
                }// cierra else ifde mail completado
        
        
    })
    
            
            





      
      
})
        

     
