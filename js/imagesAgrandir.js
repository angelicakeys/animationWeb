(function () {

let imageSelect = document.querySelector(".imageSelect");
let previews = document.querySelectorAll(".grille img");
let original = document.querySelector(".full-img");
let desc = document.querySelector(".description");


// prendre le <span> qui ferme le pop up de l'image X
let span = document.getElementsByClassName("ferme")[0];

//parcours chaque image de la grille et permet de sélectionner chaque image de la grille au click
previews.forEach(function (preview) {
    preview.addEventListener('click', function () {
        imageSelect.classList.add("ouvre");// on ajoute au div (.imageSelect) une classe qui permet d'agrandir sur la page
        original.classList.add("ouvre"); // on ajoute la class de <img> qui permet de placer l'image dans le div (imageSelect) 
        
        //change l'image recadré par celui de la taille original
        let orginalSrc = preview.getAttribute("imageOrginal"); //on lui attribue la valeur de l'emplacement de l'image reféré au HTML à une image spécifique sélectionné
        original.src = orginalSrc; // .src = la valeur de l'attribut src d'une image.
      
        let altText = preview.alt; // .alt définit ou renvoie la valeur de l'attribut alt d'une image.
        desc.textContent = altText; //.textContent renvoie le texte à l'intérieur du noeud
        console.log("orginalSrc");

    });
});


// sur click ferme le zoom de l'image à l'aide du X
span.addEventListener('click', function () {
    imageSelect.classList.remove("ouvre");
    original.classList.remove("ouvre");
    console.log(span);


});


})();



