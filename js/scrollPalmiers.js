(function () {

/* Palmiers à droite *******************************************************************/
let palmiers = document.querySelectorAll('.planteDroite');
window.addEventListener('scroll', palmiersAnim);/* lorsqu'on scroll on appelle une fonction */

palmiersAnim();

function palmiersAnim(){
let hauteur = window.innerHeight/3;//window.innerHeight renvoie la hauteur de la partie visible de la fenêtre de navigation.

palmiers.forEach(function(palmier) { //La méthode forEach() permet d'exécuter une fonction donnée sur chaque plante du Div.
let palmierTop = palmier.getBoundingClientRect().top; //getBoundingClientRect permet de prendre les infos sur la taille et sa position de l'élément

if(palmierTop < hauteur){
    palmier.classList.add('activePalm');/* bouge le palmier pour le rendre visible */
    console.log("activePalm");
}else{
    palmier.classList.remove('activePalm'); /* bouge le palmier pour le rendre invisible */
    console.log("RemoveActivePalm");
}

});
}  



/* Palmiers à gauche *******************************************************************/
let plantes = document.querySelectorAll('.planteGauche');
window.addEventListener('scroll', palmiersAnim2);/* lorsqu'on scroll on appelle une fonction */

palmiersAnim2();

function palmiersAnim2(){
let hauteur = window.innerHeight/3;


/* La méthode forEach() permet d'exécuter une fonction donnée sur chaque plantes du Div. */
plantes.forEach(function(plante) {
let planteTop = plante.getBoundingClientRect().top;

if(planteTop < hauteur){
    plante.classList.add('activePalm');/* bouge le palmier pour le rendre visible */
}else{
    plante.classList.remove('activePalm');/* bouge le palmier pour le rendre invisible */
}

});
}

})();