//Calculator function to control the operations of the wall/footer calculator
//Imported helper functions
import { convertInchesToFeet, rectangleVolume } from '../module/helper-functions.js';
//Imported validation function
import wallFooterValidate from '../form_validations/wall-footer-validation.js';

//Main calculator function
const calculateWallFooterCubicYards = (e) => {
    //Variable declarations for the inputs that contain the user data
    let $length = $('#wall-footer-length').val();
    let $width = $('#wall-footer-width').val();
    let $height = $('#wall-footer-height').val();
    let $channel = $('#wall-footer-channel').val();

    if (wallFooterValidate(e) != true) {
        //Conditional statements that convert the user data based on the measurement types selected
        if ($('#wall-footer-length-selection').val() == 'wall-footer-length-inches') {
            $length = convertInchesToFeet($length);
        };
        if ($('#wall-footer-width-selection').val() == 'wall-footer-width-inches') {
            $width = convertInchesToFeet($width);
        };
        if ($('#wall-footer-height-selection').val() == 'wall-footer-height-inches') {
            $height = convertInchesToFeet($height);
        };
        if ($('#wall-footer-channel-selection').val() == 'wall-footer-channel-inches') {
            $channel = convertInchesToFeet($channel);
        };

        //Variable declarations to help determine the interior volume
        const innerWallLength = $length - ($channel * 2);
        const innerWallWidth = $width - ($channel * 2);

        //Calculated volume for the wall/footer calculator
        const volume = rectangleVolume($length, $width, $height) - rectangleVolume(innerWallLength, innerWallWidth, $height);

        //Final result being sent to the output
        return $('wall-footer-total-yards').val(Math.floor(volume / 27) + 1);
    };
};

export default calculateWallFooterCubicYards;