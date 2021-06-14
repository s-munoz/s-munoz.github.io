const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navegacion');
console.log("Mensaje")

hamburguer.addEventListener('click', function(){
    menu.classList.toggle('spread');
})

window.addEventListener('click', function(e){
    if(menu.classList.contains('spread') 
    && e.target!= menu 
    && e.target!= hamburguer){
        menu.classList.toggle("spread");
    }
})