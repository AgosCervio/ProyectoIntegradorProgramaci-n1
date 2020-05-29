window.addEventListener("load", function(){
    document.querySelector(".hamburguesadiv").addEventListener("click", function(){
        let header = document.querySelector(".listaheader")
        header.style.display="block"
    })
    document.querySelector(".hamburguesadiv").addEventListener("dblclick", function(){
       let header = document.querySelector(".listaheader")
       header.style.display="none"
   })
  
})