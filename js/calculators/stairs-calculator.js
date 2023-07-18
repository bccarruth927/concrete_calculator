//Calculator function to control the operations of the stairs calculator
//Imported helper functions
import { convertInchesToFeet } from '../module/helper-functions.js';

//Main calculator function
const calculateStairsCubicYards = () => {
    //Variable declarations for the inputs that contain the user data
    const $flight = $('#stair-flight').val();
    const $width = $('#stair-width').val();
    const $riser = convertInchesToFeet($('#stair-riser').val());
    const $tread = convertInchesToFeet($('#stair-tread').val());
    const $landing = $('#stair-landing').val();

    //Conditional statements that convert the user data based on the measurement types selected
    if ($('#stair-flight-selection').val() == 'stair-flight-inches') {
        $flight = convertInchesToFeet($flight);
    };
    if ($('#stair-width-selection').val() == 'stair-width-inches') {
        $width = convertInchesToFeet($width);
    };
    if ($('#stair-landing-selection').val() == 'stair-landing-inches') {
        $landing = convertInchesToFeet($landing);
    };

    console.log($riser);
    console.log($tread);

    //Functions for the steps
    const numSteps = $flight / $riser;
    console.log(numSteps);

    //const numRisers = numSteps;

    const stepVolume = 0.5 * $tread * $riser * $width;
    console.log(stepVolume);

    const totalStepVolume = numSteps * stepVolume;
    console.log(totalStepVolume);

    //Functions for the waist slab
    const horizontalWaistSlab = $tread * numSteps;
    console.log(horizontalWaistSlab);

    const inclinedLengthWaistSlab = Math.sqrt(Math.pow($flight, 2) + Math.pow(horizontalWaistSlab, 2));
    console.log(inclinedLengthWaistSlab);

    const waistSlabVolume = inclinedLengthWaistSlab * $width * $riser;
    console.log(waistSlabVolume);

    //Functions for the landing platform
    const landingVolume = $landing * $width * $riser;
    console.log(landingVolume);

    //Functions to determine the total volume
    const flightVolume = totalStepVolume + waistSlabVolume;
    console.log(flightVolume);

    const volume = flightVolume + landingVolume;
    console.log(volume);

    //Final result being sent to the output
    return $('#stair-total-yards').val(Math.floor(volume / 27) + 1);
};

//Calculator function for export
export default calculateStairsCubicYards;