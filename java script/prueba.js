window.addEventListener("load", function(){
    let reproduccionCanciones= document.querySelector(".reproduccionArtista")
    if (sessionStorage.getItem("reproduccion") != null) {
       
        
        let idReproductor= sessionStorage.getItem("reproduccion")
        
            reproduccionCanciones.innerHTML= "<iframe class='iframe' scrolling='no' frameborder='0' allowTransparency='true' src='https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id="+idReproductor+"&app_id=1' width='100%' height='240'></iframe>"
            
        
           
    } 
    
    
       










})