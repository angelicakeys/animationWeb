(function () {

let scrollEnHaut = document.querySelector('#scrollBouton');

//une fois le bouton cliqué on remonte en haut de la page.
scrollEnHaut.addEventListener("click",function(){
    window.scroll(0,0);//permet de remonter en haut de la page
});
  
})();
