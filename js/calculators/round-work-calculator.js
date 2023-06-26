//Calculator function to control the operations of the round work calculator
//Imported helper functions
import { convertInchesToFeet } from '../module/helper-functions.js';

//Main calculator function
const calculateRoundWorkCubicYards = () => {
    //Variable declarations for the inputs that contain the user data
    let $diameter = $('#round-work-diameter').val();
    let $height = $('#round-work-height').val();
    const $quantity = $('#round-work-quantity').val();
    const pi = Math.PI;

    //Conditional statements that convert the user data based on the measurement types selected
    if ($('#round-work-diameter-selection').val() == 'round-work-diameter-inches') {
        $diameter = convertInchesToFeet($diameter);
    };
    if ($('#round-work-height-selection').val() == 'round-work-height-inches') {
        $height = convertInchesToFeet($height);
    };

    //Variable to convert the diameter data into radius
    const radius = $diameter / 2;

    //Calculated volume for the round work calculator
    const volume = pi * Math.pow(radius, 2) * $height * $quantity;

    //Final result being sent to the output
    return $('#round-work-total-yards').val(Math.floor(volume / 27) + 1);
};

//Calculator function for export
export default calculateRoundWorkCubicYards;