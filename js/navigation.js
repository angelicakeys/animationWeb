(function () {

    let burgerIcon = document.querySelector(".nav");
    let navEnglobeLi = document.querySelector(".menu");
    let burger = document.querySelector(" #burger");
    let burgerFerme = document.querySelector(".burgerFerme");
    let menuOuvert = true;

    burgerIcon.addEventListener('mousedown', function () {
       //si le menu n'est pas ouvert (pas cliqué) on met .nav (qui entoure les li = navEnglobeLi) en 0% du width pour les cacher
       //on cache aussi l'image du burger en X en ne voit que l'image du menu 
        if (menuOuvert == false) {

            navEnglobeLi.style.width = "0%";
            menuOuvert = true;
            burgerFerme.classList.remove('burgerX');
            burger.style.display = "flex";
            navEnglobeLi.style.padding = "0px";
            console.log(burgerIcon);

        } else {
        //si le menu est cliqué le width de navEnglobeLi sera de 100% qui permet de voir tous les li(accueil,etc.)
        //le padding du header s'ajuste lorsqu'on clique pour voir les noms des pages(li) pour avoir un meilleur espace 
        // le X du menu est visible et cache l'image du menu burger.
            navEnglobeLi.style.padding = "20px";
            navEnglobeLi.style.width = "100%";
            burgerFerme.classList.add('burgerX');
            burger.style.display = "none";
            menuOuvert = false;
            console.log(navEnglobeLi);
        }
    });

})();