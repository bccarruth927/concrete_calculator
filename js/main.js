//Main JavaScript file linked to index.html
$(document).ready(() => {
    //Hide all calculator containers when the web app loads
    $('#flatwork-calculator').hide();
    $('#round-work-calculator').hide();
    $('#wall-footer-calculator').hide();
    $('#stairs-calculator').hide();
    $('#curb-gutter-calculator').hide();
    $('#drain-tunnel-calculator').hide();



    //Event handler attached to the carets of the calculator containers
    $('#flatwork-calculator-caret').on('click', () => {
        $('#flatwork-calculator').slideToggle();
    });
    $('#round-work-calculator-caret').on('click', () => {
        $('#round-work-calculator').slideToggle();
    });
    $('#wall-footer-calculator-caret').on('click', () => {
        $('#wall-footer-calculator').slideToggle();
    });
    $('#stairs-calculator-caret').on('click', () => {
        $('#stairs-calculator').slideToggle();
    });
    $('#curb-gutter-calculator-caret').on('click', () => {
        $('#curb-gutter-calculator').slideToggle();
    });
    $('#drain-tunnel-calculator-caret').on('click', () => {
        $('#drain-tunnel-calculator').slideToggle();
    });



    //Event handler attached to the calculator container that hides the container when mouse leaves it (desktop only)
    $('#flatwork-calculator').on('mouseleave', () => {
        $('#flatwork-calculator').slideUp();
    });
    $('#round-work-calculator').on('mouseleave', () => {
        $('#round-work-calculator').slideUp();
    });
    $('wall-footer-calculator').on('mouseleave', () => {
        $('#wall-footer-calculator').slideUp();
    });
    $('#stairs-calculator').on('mouseleave', () => {
        $('#stairs-calculator').slideUp();
    });
    $('#curb-gutter-calculator').on('mouseleave', () => {
        $('#curb-gutter-calculator').slideUp();
    });
    $('#drain-tunnel-calculator').on('mouseleave', () => {
        $('#drain-tunnel-calculator').slideUp();
    });
});