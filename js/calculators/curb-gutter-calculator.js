//Calculator function to control the operations of the curb/gutter calculator
//Imported helper functions
import { convertInchesToFeet } from "../module/helper-functions.js";
//Import validation function
import curbGutterValidate from "../form_validations/curb-gutter-validation.js";

//Main calculator function
const calculateCurbGutterCubicYards = (e) => {
    //Variable declarations for the inputs that contain the user data
    let $length = $('#curb-length').val();
    let $depth = $('#curb-depth').val();
    let $width = $('#gutter-width').val();
    let $height = $('#curb-height').val();
    let $flag = $('#flag-thickness').val();

    if (curbGutterValidate(e) != true) {
        //Conditional statements that convert the user data based on the measurement types selected
        if ($('#curb-length-selection').val() == 'curb-length-inches') {
            $length = convertInchesToFeet($length);
        };
        if ($('#curb-depth-selection').val() == 'curb-depth-inches') {
            $depth = convertInchesToFeet($depth);
        };
        if ($('#gutter-width-selection').val() == 'gutter-width-inches') {
            $width = convertInchesToFeet($width);
        };
        if ($('#curb-height-selection').val() == 'curb-height-inches') {
            $height = convertInchesToFeet($height);
        };
        if ($('#flag-thickness-selection').val() == 'flag-thickness-inches') {
            $flag = convertInchesToFeet($flag);
        };

        //Variable for determing the volume of the gutter portion
        const gutterVolume = $width * $flag * $length;

        //Helper function to determine the volume of the curb portion
        const curbVolume = () => {
            const height = $height + $flag;
            const volume = height * $depth * $length;
            return volume;
        }

        //Variable for determing the total volume of both the curb and gutter portions together
        const volume = curbVolume() + gutterVolume;

        //Final result being sent to the output
        return $('#curb-gutter-total').val(Math.floor(volume / 27) + 1);
    };
};

//Calculator function for export
export default calculateCurbGutterCubicYards;