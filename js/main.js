//Main JavaScript file linked to index.html
//Import calculator functions
import calculateCurbGutterCubicYards from './calculators/curb-gutter-calculator.js';
import calculateDrainTunnelCubicYards from './calculators/drain-tunnel-calculator.js';
import calculateFlatworkCubicYards from './calculators/flatwork-calculator.js';
import calculateRoundWorkCubicYards from './calculators/round-work-calculator.js';
import calculateStairsCubicYards from './calculators/stairs-calculator.js';
import calculateWallFooterCubicYards from './calculators/wall-footer-calculator.js';

$(document).ready(() => {
    //Hide all calculator containers when the web app loads
    $('#flatwork-calculator').hide();
    $('#round-work-calculator').hide();
    $('#wall-footer-calculator').hide();
    $('#stairs-calculator').hide();
    $('#curb-gutter-calculator').hide();
    $('#drain-tunnel-calculator').hide();



    //Event handlers attached to the carets of the calculator containers
    $('#flatwork-calculator-caret').on('click', (event) => {
        $('#flatwork-calculator').slideToggle();
        $(event.currentTarget).closest('.title').toggleClass('title-border').toggleClass('active-title');
    });
    $('#round-work-calculator-caret').on('click', (event) => {
        $('#round-work-calculator').slideToggle();
        $(event.currentTarget).closest('.title').toggleClass('title-border').toggleClass('active-title');
    });
    $('#wall-footer-calculator-caret').on('click', (event) => {
        $('#wall-footer-calculator').slideToggle();
        $(event.currentTarget).closest('.title').toggleClass('title-border').toggleClass('active-title');
    });
    $('#stairs-calculator-caret').on('click', (event) => {
        $('#stairs-calculator').slideToggle();
        $(event.currentTarget).closest('.title').toggleClass('title-border').toggleClass('active-title');
    });
    $('#curb-gutter-calculator-caret').on('click', (event) => {
        $('#curb-gutter-calculator').slideToggle();
        $(event.currentTarget).closest('.title').toggleClass('title-border').toggleClass('active-title');
    });
    $('#drain-tunnel-calculator-caret').on('click', (event) => {
        $('#drain-tunnel-calculator').slideToggle();
        $(event.currentTarget).closest('.title').toggleClass('title-border').toggleClass('active-title');
    });



    //Event handlers attached to the calculator containers that hides the containers when mouse leaves it (desktop only)
    /*
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
    */



    //Event handlers attached to the form submit buttons that calculate the data provided by the user
    $('#submit-flatwork-data').on('click', calculateFlatworkCubicYards);
    $('#submit-round-work-data').on('click', calculateRoundWorkCubicYards);
    $('#submit-wall-footer-data').on('click', calculateWallFooterCubicYards);
    $('#submit-stair-data').on('click', calculateStairsCubicYards);
    $('#submit-curb-gutter-data').on('click', calculateCurbGutterCubicYards);
    $('#submit-drain-tunnel-data').on('click', calculateDrainTunnelCubicYards);
});