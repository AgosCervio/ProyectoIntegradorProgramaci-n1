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
            for(let index = 0; index < informacion.data.length;index ++){
                const genero = informacion.data[index].name
                console.log(genero)
            }
        }
    )
    
}

