(function () {

//Accordeon Section dans page creation
let accordeon = document.getElementsByClassName('contenuBoite');

for(i=0; i < accordeon.length; i++){
    accordeon[i].addEventListener('click',function(){
        this.classList.toggle('active');//permet d'ouvrir l'accordeon au click ou le fermer
    });
}

//Entete toutes les Animations page realisation
let accordeonAnimations = document.getElementsByClassName('titreEntete');

for(i=0; i < accordeonAnimations.length; i++){
    accordeonAnimations[i].addEventListener('click',function(){
        this.classList.toggle('active');//permet d'ouvrir l'accordeon au click ou le fermer
 
        console.log(accordeonAnimations);
        
    });
  

}


})();