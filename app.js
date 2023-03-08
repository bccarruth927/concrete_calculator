//Import helper functions from helper-functions.js
import { convertInchesToFeet, totalRectangleVolume, totalTriangularPrismVolume, simpleMultiply } from '../modules/helper-functions.js';
//Import calculators object from objects.js
//import { calculators } from '../modules/object.js';

//Global variables for buttons inside the slab/sidewalk calculator
const slabCalcBtn = document.getElementById('slab-btn');
const slabClear = document.getElementById('slab-clear');

//Event listener on the Calculate button for the slab/sidewalk calculator
slabCalcBtn.addEventListener('click', function determineSlabCubicYards() {
    
    //Local variables for the slab/sidewalk calculator
    const slabLength = document.getElementById('slab-length').value;
    const slabWidth = document.getElementById('slab-width').value;
    const slabHeight = document.getElementById('slab-height').value;
    
    //Calculated volume for the slab/sidewalk calculator
    const volume = Math.floor(slabLength * slabWidth * convertInchesToFeet(slabHeight));

    //Final result being sent to the output
    return document.getElementById('slab-total').value = Math.floor(volume / 27) + 1;
});

//Event listener on the Clear button for the slab/sidewalk calculator
slabClear.addEventListener('click', function clearSlabCaluclator() {

    //Array containing the string ids of all inputs needing data reset
    const calcIds = ['slab-length', 'slab-width', 'slab-height', 'slab-total'];

    //For loop iterating through the calcIds array and converting their values to an empty string
    for (let id = 0; id < calcIds.length; id++) {
        document.getElementById(calcIds[id]).value = '';
    }
});

//Global variables for the buttons inside the hole/pier hole/roundwork calculator
const roundCalcBtn = document.getElementById('round-btn');
const roundClear = document.getElementById('round-clear');

//Event listener on the Calculate button for the hole/pier hole/round work calculator
roundCalcBtn.addEventListener('click', function determineHoleCubicYards() {
    
    //Local variables for the hole/pier hole/ roundwork calculator
    const holeDiameter = document.getElementById('round-diameter').value;
    const holeHeight = document.getElementById('round-height').value;
    const holeRadius = holeDiameter / 2;
    const pi = Math.PI;

    //Calculated volume for the hole/pier hole/round work calculator
    const volume = pi * Math.pow(holeRadius, 2) * holeHeight;

    //Final result being sent to the output
    return document.getElementById('round-total').value = Math.floor(volume / 27) + 1;
})

//Event Listener on the Clear button for the pier hole/hole calculator
roundClear.addEventListener('click', function clearHoleCalculator() {

    //Array containing the string ids of all inputs needing data reset
    const calcIds = ['round-diameter', 'round-height', 'round-total'];

    //For loop iterating through the calcIds array and converting their values to an empty string
    for (let id = 0; id < calcIds.length; id++) {
        document.getElementById(calcIds[id]).value = '';
    }
});

//Global variables for buttons inside the wall/footer calculator
const wallCalcBtn = document.getElementById('wall-btn');
const wallClear = document.getElementById('wall-clear');

//Event listener on the Calculate button for the wall/footer calculator
wallCalcBtn.addEventListener('click', function determineWallCubicYards() {

    //Local variables for the wall/footer calculator
    const wallLength = document.getElementById('wall-length').value;
    const wallWidth = document.getElementById('wall-width').value;
    const wallHeight = document.getElementById('wall-height').value;
    const channelWidth = document.getElementById('wall-channel').value;
    const innerWallLength = wallLength - (channelWidth * 2);
    const innerWallWidth = wallWidth - (channelWidth * 2);
    
    //Calculated volume for the wall/footer calculator
    const volume = totalRectangleVolume(wallLength, wallWidth, wallHeight) - totalRectangleVolume(innerWallLength, innerWallWidth, wallHeight);

    //Final result being sent to the output
    return document.getElementById('wall-total').value = Math.floor(volume / 27) + 1;
});

//Event listener on the Clear button for the wall/footer calculator
wallClear.addEventListener('click', function clearWallCalculator() {

    //Array containing the string ids of all inputs needing data reset
    const calcIds = ['wall-length', 'wall-width', 'wall-height', 'wall-channel', 'wall-total'];

    //For loop iterating through the calcIds array and converting their values to an empty string
    for (let id = 0; id < calcIds.length; id++) {
        document.getElementById(calcIds[id]).value = '';
    }
});

//Gloabl variables for buttons inside the stair calculator
const stairCalcBtn = document.getElementById('stair-btn');
const stairClear = document.getElementById('stair-clear');

//Event listener on the Calculate button for the stair calculator
stairCalcBtn.addEventListener('click', function determineStairCubicYards() {

    //Local variables for the stairs calculator
    const stairBaseLength = document.getElementById('stair-length').value;
    const stairBaseWidth = document.getElementById('stair-width').value;
    const stairBaseHeight = document.getElementById('stair-height').value;
    const stairRiser = document.getElementById('stair-riser').value;
    const stairTread = document.getElementById('stair-tread').value;
    const stepCount = document.getElementById('step-count').value;
    const singleStepVolume = totalTriangularPrismVolume(stairBaseWidth, convertInchesToFeet(stairRiser), convertInchesToFeet(stairTread));

    //Finding the total volume of the stair base triangular prism and the total volume of all stairs together
    const volume = totalTriangularPrismVolume(stairBaseLength, stairBaseWidth, stairBaseHeight) + simpleMultiply(singleStepVolume, stepCount);
    
    //Final result sent to the output
    return document.getElementById('stair-total').value = Math.floor(volume / 27) + 1;
});

//Event Listener for the Clear button for the stairs calculator
stairClear.addEventListener('click', function clearStairCalculator() {

    //Array containing the string ids of all inputs needing data reset
    const calcIds = ['stair-length', 'stair-width', 'stair-height', 'stair-riser', 'stair-tread', 'step-count', 'stair-total'];
    
    //For loop iterating through the calcIds array and converting their values to an empty string
    for (let id = 0; id < calcIds.length; id++) {
        document.getElementById(calcIds[id]).value = '';
    }
});

//Global variables for the buttons in the curb/gutter calculator
const curbCalcBtn = document.getElementById('curb-btn');
const curbClear = document.getElementById('curb-clear');

//Event Listener on the Calculate button for the curb calculator
curbCalcBtn.addEventListener('click', function determineCurbCubicYards() {

    //Local variables for the curb/gutter calculator
    const curbLength = document.getElementById('curb-length').value;
    const curbDepth = document.getElementById('curb-depth').value;
    const gutterWidth = document.getElementById('gutter-width').value;
    const curbHeight = document.getElementById('curb-height').value;
    const flagThickness = document.getElementById('flag-thickness').value;
    const gutterVolume = convertInchesToFeet(gutterWidth) * convertInchesToFeet(flagThickness) * curbLength;
    
    //Helper function to determine the total volume of the "curb" section
    const curbVolume = () => {
        const height = convertInchesToFeet(curbHeight) + convertInchesToFeet(flagThickness);
        const volume = height * convertInchesToFeet(curbDepth) * curbLength;
        return volume;
    }

    //Finding the total volume of the curb and gutter sections together
    const volume = curbVolume() + gutterVolume;

    //Final result sent to the input
    return document.getElementById('curb-total').value = Math.floor(volume / 27) + 1;
});

//Event Listener for the Clear button on the curb/gutter calculator
curbClear.addEventListener('click', function clearCurbCalculator() {

    //Array containing the string ids of all inputs needing data reset
    const calcIds = ['curb-length', 'curb-depth', 'gutter-width', 'curb-height', 'flag-thickness', 'curb-total'];

    //For loop iterating through the calcIds array and converting their values to an empty string
    for (let id = 0; id < calcIds.length; id++) {
        document.getElementById(calcIds[id]).value = '';
    }
});

//Global variables for the buttons in the drain/tunnel calculator
const drainCalcBtn = document.getElementById('drain-btn');
const drainClear = document.getElementById('drain-clear');

//Event Listener on the Calculate button for the drain/tunnel calulator
drainCalcBtn.addEventListener('click', function determineDrainCubicYards() {
    const outerDiameter = document.getElementById('outer-diameter').value;
    const innerDiameter = document.getElementById('inner-diameter').value;
    const drainLength = document.getElementById('drain-length').value;
    const outerRadius = outerDiameter / 2;
    const innerRadius = innerDiameter / 2;
    const pi = Math.PI;
    const outerVolume = pi * Math.pow(outerRadius, 2) * drainLength;
    const innerVolume = pi * Math.pow(innerRadius, 2) * drainLength;

    //Calculated volume of the drain/tunnel
    const volume = outerVolume - innerVolume;

    return document.getElementById('drain-total').value = Math.floor(volume / 27) + 1; //Final result added to output
});

//Event Listener on the Clear button for the drain/tunnel calculator
drainClear.addEventListener('click', function clearDrainCalculator() {

    //Array containing the string ids of all inputs needing data reset
    const calcIds = ['outer-diameter', 'inner-diameter', 'drain-length', 'drain-total'];

    //For loop iterating through the calcIds array and converting their values to an empty string
    for (let id = 0; id < calcIds.length; id++) {
        document.getElementById(calcIds[id]).value = '';
    }
});