//Import helper functions from helper-functions.js
import { convertInchesToFeet } from '../modules/helper-functions.js';

//Global variables for buttons inside the slab/sidewalk calculator
const slabCalcBtn = document.getElementById('slab-btn');
const slabClear = document.getElementById('slab-clear');

//Event listener on the Calculate button for the slab/sidewalk calculator
slabCalcBtn.addEventListener('click', function determineSlabCubicYards() {
    const slabThickness = document.getElementById('slab-height').value; //Variable for slab thickness input
    
    //Declared function to convert input measurments into total yardage required for slab project
    const slabLength = document.getElementById('slab-length').value; //Variable for slab length input
    const slabWidth = document.getElementById('slab-width').value; //Variable for slab width input
    const volume = Math.floor(slabLength * slabWidth * convertInchesToFeet(slabThickness)); //Forumla for total volume

    return document.getElementById('slab-total').value = Math.floor(volume / 27) + 1; //Final result added to output
});

//Event listener on the Clear button for the slab/sidewalk calculator
slabClear.addEventListener('click', function clearSlabCaluclator() {
    const calcIds = ['slab-length', 'slab-width', 'slab-height', 'slab-total'];

    for (let id = 0; id < calcIds.length; id++) {
        document.getElementById(calcIds[id]).value = '';
    }
});

//Global variables for the buttons inside the pier hole/hole calculator
const roundCalcBtn = document.getElementById('round-btn');
const roundClear = document.getElementById('round-clear');

//Event listener on the Calculate button for the pier hole/hole calculator
roundCalcBtn.addEventListener('click', function determineHoleCubicYards() {
    const holeDiameter = document.getElementById('round-diameter').value; //Variable for hole diameter
    const holeHeight = document.getElementById('round-height').value; //Variable for hole height
    const holeRadius = holeDiameter / 2; //Variable for hole radius
    const pi = Math.PI; //Variable assigned to Math PI object
    const volume = pi * Math.pow(holeRadius, 2) * holeHeight; //Variable for total volume of hole

    return document.getElementById('round-total').value = Math.floor(volume / 27) + 1;
})

//Event Listener on the Clear button for the pier hole/hole calculator
roundClear.addEventListener('click', function clearHoleCalculator() {
    const calcIds = ['round-diameter', 'round-height', 'round-total'];
    
    for (let id = 0; id < calcIds.length; id++) {
        document.getElementById(calcIds[id]).value = '';
    }
});

//Global variables for buttons inside the wall/footer calculator
const wallCalcBtn = document.getElementById('wall-btn');
const wallClear = document.getElementById('wall-clear');

//Event listener on the Calculate button for the wall/footer calculator
wallCalcBtn.addEventListener('click', function determineWallCubicYards() {
    const wallLength = document.getElementById('wall-length').value; //Variable for wall length
    const wallWidth = document.getElementById('wall-width').value; //Variable for wall width
    const wallHeight = document.getElementById('wall-height').value; //Variable for wall height
    const channelWidth = document.getElementById('wall-channel').value; //Variable for channel width
    
    //Helper function to find the total area volume of the wall/footer project
    const totalAreaVolume = () => {
        return wallLength * wallWidth * wallHeight;
    };
    const innerWallLength = wallLength - (channelWidth * 2); //Variable for inner wall length
    const innerWallWidth = wallWidth - (channelWidth * 2); //Variable for inner wall width
    
    //Helper function to find the inner volume area
    const innerAreaVolume = () => {
        return innerWallLength * innerWallWidth * wallHeight;
    };
    const volume = totalAreaVolume() - innerAreaVolume(); //Variable for wall/footer volume

    return document.getElementById('wall-total').value = Math.floor(volume / 27) + 1; //Final result added to output
});

//Event listener on the Clear button for the wall/footer calculator
wallClear.addEventListener('click', function clearWallCalculator() {
    const calcIds = ['wall-length', 'wall-width', 'wall-height', 'wall-channel', 'wall-total'];

    for (let id = 0; id < calcIds.length; id++) {
        document.getElementById(calcIds[id]).value = '';
    }
});

//Gloabl variables for buttons inside the stair calculator
const stairCalcBtn = document.getElementById('stair-btn');
const stairClear = document.getElementById('stair-clear');

//Event listener on the Calculate button for the stair calculator
stairCalcBtn.addEventListener('click', function determineStairCubicYards() {
    const stairBaseLength = document.getElementById('stair-length').value; //Variable for base of stairs length
    const stairBaseWidth = document.getElementById('stair-width').value; //Variable for base of stairs width
    const stairBaseHeight = document.getElementById('stair-height').value; //Variable for base of stairs height
    //Helper function to find the volume of the stair base triangular prism
    const determineStairBaseTriangularPrism = () => {
        return stairBaseLength * stairBaseWidth * stairBaseHeight * 0.5;
    };
    const stairRiser = document.getElementById('stair-riser').value; //Variable for the stair riser
    const stairTread = document.getElementById('stair-tread').value; //Variable for the stair tread
    const stepCount = document.getElementById('step-count').value; //Variable for the step count
    
    //Helper function to determine the volume of a single step
    const determineVolumeOfStep = () => {
        return stairBaseWidth * convertInchesToFeet(stairRiser) * convertInchesToFeet(stairTread) * 0.5;
    };
    
    //Helper function to determine the volume of all steps in the set of stairs
    const determineTotalVolumeOfSteps = () => {
        return determineVolumeOfStep() * stepCount;
    };
    //Finding the total volume of the stair base triangular prism and the total volume of all stairs
    const volume = determineStairBaseTriangularPrism() + determineTotalVolumeOfSteps();
    
    return document.getElementById('stair-total').value = Math.floor(volume / 27) + 1; //Final result added to output
});

//Event Listener for the Clear button for the stairs calculator
stairClear.addEventListener('click', function clearStairCalculator() {
    const calcIds = ['stair-length', 'stair-width', 'stair-height', 'stair-riser', 'stair-tread', 'step-count', 'stair-total'];
    
    for (let id = 0; id < calcIds.length; id++) {
        document.getElementById(calcIds[id]).value = '';
    }
});

//Global variables for the buttons in the curb/gutter calculator
const curbCalcBtn = document.getElementById('curb-btn');
const curbClear = document.getElementById('curb-clear');

//Event Listener on the Calculate button for the curb calculator
curbCalcBtn.addEventListener('click', function determineCurbCubicYards() {
    const curbLength = document.getElementById('curb-length').value; //Variable for the curb length
    const curbDepth = document.getElementById('curb-depth').value; //Variable for the curb depth
    const gutterWidth = document.getElementById('gutter-width').value; //Variable for the gutter width
    const curbHeight = document.getElementById('curb-height').value; //Variable for the curb height
    const flagThickness = document.getElementById('flag-thickness').value; //Variable for the flag thickness
    //Helper function to convert inches to feet
    const convertInchesToFeet = (value) => {
        return value / 12;
    }
    //Helper function to determine the total volume of the "curb" section
    const curbVolume = () => {
        const height = convertInchesToFeet(curbHeight) + convertInchesToFeet(flagThickness);
        const volume = height * convertInchesToFeet(curbDepth) * curbLength;
        return volume;
    }
    //Variable declaration for the total volume of the "gutter" section
    const gutterVolume = convertInchesToFeet(gutterWidth) * convertInchesToFeet(flagThickness) * curbLength;
    //Finding the total volume of the curb and gutter sections together
    const volume = curbVolume() + gutterVolume; //Total volume of the curb and gutter sections

    return document.getElementById('curb-total').value = Math.floor(volume / 27) + 1; //Final result added to output
});

//Event Listener for the Clear button on the curb/gutter calculator
curbClear.addEventListener('click', function clearCurbCalculator() {
    const calcIds = ['curb-length', 'curb-depth', 'gutter-width', 'curb-height', 'flag-thickness', 'curb-total'];

    for (let id = 0; id < calcIds.length; id++) {
        document.getElementById(calcIds[id]).value = '';
    }
});

//Global variables for the buttons in the drain/tunnel calculator
const drainCalcBtn = document.getElementById('drain-btn');
const drainClear = document.getElementById('drain-clear');

//Event Listener on the Calculate button for the drain/tunnel calulator
drainCalcBtn.addEventListener('click', function determineDrainCubicYards() {
    const outerDiameter = document.getElementById('outer-diameter').value; //Variable for outer diameter
    const innerDiameter = document.getElementById('inner-diameter').value; //Variable for inner diameter
    const drainLength = document.getElementById('drain-length').value; //Variable for total length of drain/tunnel
    const outerRadius = outerDiameter / 2; //Variable for outer radius
    const innerRadius = innerDiameter / 2; //Variable for inner radius
    const pi = Math.PI; //Variable for PI object
    const outerVolume = pi * Math.pow(outerRadius, 2) * drainLength; //Variable for outer volume total
    const innerVolume = pi * Math.pow(innerRadius, 2) * drainLength; //Variable for inner volume total
    const volume = outerVolume - innerVolume; //Variable for total drain volume

    return document.getElementById('drain-total').value = Math.floor(volume / 27) + 1; //Final result added to output
});

//Event Listener on the Clear button for the drain/tunnel calculator
drainClear.addEventListener('click', function clearDrainCalculator() {
    const calcIds = ['outer-diameter', 'inner-diameter', 'drain-length', 'drain-total'];

    for (let id = 0; id < calcIds.length; id++) {
        document.getElementById(calcIds[id]).value = '';
    }
});