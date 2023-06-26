//Calculator function to control the operations of the drain/tunnel calculator
//Imported helper functions
import { convertInchesToFeet } from "../module/helper-functions.js";

//Main calculator function
const calculateDrainTunnelCubicYards = () => {
    //Variable declarations for the inputs that contain the user data
    let $outerDiameter = $('#drain-tunnel-outer-diameter').val();
    let $innerDiameter = $('#drain-tunnel-inner-diameter').val();
    let $length = $('#drain-tunnel-length').val();
    const pi = Math.PI;

    //Conditional statements that convert the user data based on the measurement types selected
    if ($('#drain-tunnel-outer-diameter-selection').val() == 'drain-tunnel-outer-diameter-inches') {
        $outerDiameter = convertInchesToFeet($outerDiameter);
    };
    if ($('#drain-tunnel-inner-diameter-selection').val() == 'drain-tunnel-inner-diameter-inches') {
        $innerDiameter = convertInchesToFeet($innerDiameter);
    };
    if ($('#drain-tunnel-length-selection').val() == 'drain-tunnel-length-selection') {
        $length = convertInchesToFeet($length);
    };

    //Variables for determining the radiuses from the diameter variables
    const outerRadius = $outerDiameter / 2;
    const innerRadius = $innerDiameter / 2;

    //Variables for determine the volume of the two generated radiuses
    const outerVolume = pi * Math.pow(outerRadius, 2) * $length;
    const innerVolume = pi * Math.pow(innerRadius, 2) * $length;

    //Variable for the total volume of the drain/tunnel
    const volume = outerVolume - innerVolume;

    //Final result being sent to the output
    return $('#drain-tunnel-total-yards').val(Math.floor(volume / 27) + 1);
};

//Calculator function for export
export default calculateDrainTunnelCubicYards;