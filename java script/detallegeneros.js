window.onload = function(){
    let querystring=location.search
    let querystringobj=new URLSearchParams(querystring)
    let id=querystringobj.get("iddelgenero")

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/"+id)

    .then(
        function(data){
            return data.json();
        }
    )
    .then(
        function(informacion){
console.log(informacion)
let containalbum=document.querySelector(".containalbum")
containalbum.innerHTML=` <div class="containfotoalbum">
<img class="fotoalbum" src="${informacion.picture}" alt="foto artista">
<p class="año"> </p>
</div>
<div class="containinfoalbum">
<h2 class="nombrealbum">${informacion.name}</h2>
<br class="saltar">
<br class="saltar">

<a href="artistas.html" class="iper"></a>
<br>
<a href="géneros.html" class="iper"></a>
</div>`

        })
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/"+id+"/artists")

        .then(
            function(data){
                return data.json();
            }
        )
        .then(
            function(informacion){
                console.log(informacion)
                let temasdelalbum=document.querySelector(".temasdelalbum")
                let artistas=informacion.data
                artistas.forEach(artista => {
                    temasdelalbum.innerHTML+=` <a href="artistas.html?iddelgenero=${artista.id}" class="genero2">
                    <div class="containfotogenero">
                    <img class="fotogeneroo" src="${artista.picture_big}" alt="fondo generos">
                    
                </div>
                <h2>${artista.name}</h2>
                
                
                </a>
                    `
                });
            })
}
