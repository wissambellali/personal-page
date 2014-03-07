  $(document).ready( function () {

    // On cache les sous-menus :
    $(".navigation ul.subMenu").hide();

    // On sélectionne tous les items de liste portant la classe "toggleSubMenu"
    // et on remplace l'élément span qu'ils contiennent par un lien :
    $(".navigation li.toggleSubMenu span").each( function () {
        $(this).replaceWith('<a href="" title="Afficher le sous-menu">' + $(this).text() + '<\/a>') ;
    } ) ;    

        // On modifie l'évènement "click" sur les liens dans les items de liste
    // qui portent la classe "toggleSubMenu" :
    $(".navigation li.toggleSubMenu > a").click( function () {
        // Si le sous-menu était déjà ouvert, on le referme :
        if ($(this).next("ul.subMenu:visible").length != 0) {
            $(this).next("ul.subMenu").slideUp("normal");
        }
        // Si le sous-menu est caché, on ferme les autres et on l'affiche :
        else {

            $(this).next("ul.subMenu").slideDown("normal");
        }
        // On empêche le navigateur de suivre le lien :
        return false;
    });  

} ) ;