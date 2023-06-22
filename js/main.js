//Main JavaScript file linked to index.html
$(document).ready(() => {
    //Hide all calculator containers when the web app loads
    $('#flatwork-calculator').hide();

    //Event handler attached to the carets of the calculator containers
    $('#flatwork-calculator-caret').on('click', () => {
        $('#flatwork-calculator').slideToggle();
    });

    //Event handler attached to the calculator container that hides the container when mouse leaves it (desktop only)
    $('#flatwork-container').on('mouseleave', () => {
        $('#flatwork-calculator').slideUp();
    });
});