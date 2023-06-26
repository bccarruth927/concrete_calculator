//Calculator function to control the operations of the stairs calculator
//Imported helper functions
import { convertInchesToFeet, triangularPrismVolume } from '../module/helper-functions.js';

//Main calculator function
const calculateStairsCubicYards = () => {
    //Variable declarations for the inputs that contain the user data
    let $length = $('#stair-base-length').val();
    let $width = $('#stair-base-width').val();
    let $height = $('#stair-base-height').val();
    let $riser = $('#stair-riser').val();
    let $tread = $('#stair-tread').val();
    const count = $('#step-count').val();

    //Conditional statements that convert the user data based on the measurement types selected
    if ($('#stair-base-length-selection').val() == 'stair-base-length-inches') {
        $length = convertInchesToFeet($length);
    };
    if ($('#stair-base-width-selection').val() == 'stair-base-width-inches') {
        $width = convertInchesToFeet($width);
    };
    if ($('#stair-base-height-selection').val() == 'stair-base-height-inches') {
        $height = convertInchesToFeet($height);
    };
    if ($('#stair-tread-selection').val() == 'stair-tread-inches') {
        $tread = convertInchesToFeet($tread);
    };

    //Variable to calculate the volume of a single step
    const singleStepVolume = triangularPrismVolume($width, convertInchesToFeet($riser), $tread);

    //Calculated volume for the stairs calculator
    const volume = triangularPrismVolume($length, $width, $height) + (singleStepVolume * count);

    //Final result being sent to the output
    return $('#stair-total-yards').val(Math.floor(volume / 27) + 1);
};

//Calculator function for export
export default calculateStairsCubicYards;