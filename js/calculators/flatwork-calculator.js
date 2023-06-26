//Calculator function to control the operations of the flatwork calculator
//Imported helper functions
import { convertInchesToFeet } from '../module/helper-functions.js';

//Main calculator function
const calculateFlatworkCubicYards = () => {
    //Variable declarations for the inputs that contain the user data
    let $length = $('#flatwork-length').val();
    let $width = $('#flatwork-width').val();
    let $height = $('#flatwork-height').val();

    //Conditional statements that convert the user data based on the measurement types selected
    if ($('#flatwork-length-selection').val() == 'flatwork-length-inches') {
        $length = convertInchesToFeet($length);
    };
    if ($('#flatwork-width-selection').val() == 'flatwork-width-inches') {
        $width = convertInchesToFeet($width);
    };
    if ($('#flatwork-height-selection').val() == 'flatwork-height-inches') {
        $height = convertInchesToFeet($height);
    };

    //Calculated volume for the flatwork calculator
    const volume = Math.floor($length * $width * $height);

    //Final result being sent to the output
    return $('#flatwork-total-yards').val(Math.floor(volume /27) + 1);
};

//Calculator function for export
export default calculateFlatworkCubicYards;