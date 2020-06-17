window.onload = function(){
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
    .then(
        function(data){
            return data.json();
        }
    )
    .then(
        function(informacion){
            console.log(informacion)
            let contenedorgeneros = document.querySelector (".containgeneros")
            informacion.data.forEach(genero => {
                contenedorgeneros.innerHTML += 
                `
                <a href="detallegeneros.html?iddelgenero=${genero.id}" class="genero2">
    <div class="containfotogenero">
    <img class="fotogeneroo" src="${genero.picture_big}" alt="fondo generos">
    
</div>
<h2>${genero.name}</h2>


</a>
                `
                
            });
        }
    )
    
}

