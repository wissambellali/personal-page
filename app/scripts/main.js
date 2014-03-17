$(function () {
    // HIDE ALL SUBMENUS
    $(".navigation ul.subMenu").hide();

    // HANDLE ALL CLICK EVENTS ON THE TOGGLESUBMENU LINKS
    $(".toggleSubMenu > a").click( function (e) {

        console.log(e.clientX);
        
        // PREVENT DEFAULT ACTION ON CLICK
        e.preventDefault();
        
        // THE NEXT ELEMENT TO THE CLICKED LINK CALL SLIDETOGGLE
        $(this).next("ul.subMenu").slideToggle();

        // TOGGLE CLASS OPEN ON THE PARENT OF THE LINK ELEMENT 
        $(this).parent().toggleClass('open');
    });
} ) ;
