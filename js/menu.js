(function () {
let links = document.querySelectorAll(".menu a");

//window.location.href renvoie le href (URL) 
//de la page en cours
let pageCourante = location.href;
let menuLength = links.length; //largeur du menu 
for (let i = 0; i< menuLength; i++){
    if(links[i].href === pageCourante){ 
        links[i].className = "active";// on lui ajoute la class (active) qui permet de souligner la page active
    }
}

})();

      
   
   
