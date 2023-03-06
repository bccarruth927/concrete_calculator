//Global variables for buttons inside the slab/sidewalk calculator
const slabCalcBtn = document.getElementById('slab-btn');
const slabClear = document.getElementById('slab-clear');

//Event listener on the Calculate button for the slab/sidewalk calculator
slabCalcBtn.addEventListener('click', function determineSlabCubicYards() {
    //Helper function to convert inches into feet
    let slabThickness = document.getElementById('slab-height').value; //Variable for slab thickness input
    const convertInchesToFeet = () => { //Declared helper function convertInchesToFeet
        return slabThickness / 12;
    }
    //Declared function to convert input measurments into total yardage required for slab project
    const slabLength = document.getElementById('slab-length').value; //Variable for slab length input
    const slabWidth = document.getElementById('slab-width').value; //Variable for slab width input
    const volume = Math.floor(slabLength * slabWidth * convertInchesToFeet()); //Forumla for total volume

    return document.getElementById('slab-total').value = Math.floor(volume / 27) + 1; //Final result added to output
});

//Event listener on the Clear button for the slab/sidewalk calculator
slabClear.addEventListener('click', function clearSlabCaluclator() {
    document.getElementById('slab-length').value = '';
    document.getElementById('slab-width').value = '';
    document.getElementById('slab-height').value = '';
    document.getElementById('slab-total').value = '';
});

//Global variables for the buttons inside the pier hole/hole calculator
const holeCalcBtn = document.getElementById('pier-btn');
const holeClear = document.getElementById('pier-clear');

//Event listener on the Calculate button for the pier hole/hole calculator
holeCalcBtn.addEventListener('click', function determineHoleCubicYards() {
    const holeDiameter = document.getElementById('pier-diameter').value; //Variable for hole diameter
    const holeHeight = document.getElementById('pier-height').value; //Variable for hole height
    const holeRadius = holeDiameter / 2; //Variable for hole radius
    const pi = Math.PI; //Variable assigned to Math PI object
    const volume = pi * Math.pow(holeRadius, 2) * holeHeight; //Variable for total volume of hole

    return document.getElementById('pier-total').value = Math.floor(volume / 27) + 1;
})

//Event Listener on the Clear button for the pier hole/hole calculator
holeClear.addEventListener('click', function clearHoleCalculator() {
    document.getElementById('pier-diameter').value = '';
    document.getElementById('pier-height').value = '';
    document.getElementById('pier-total').value = '';
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
    document.getElementById('wall-length').value = '';
    document.getElementById('wall-width').value = '';
    document.getElementById('wall-height').value = '';
    document.getElementById('wall-channel').value = '';
    document.getElementById('wall-total').value = '';
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
    //Helper function to convert the stair riser inches value to feet
    const convertStairRiser = () => {
        return stairRiser / 12;
    };
    const stairTread = document.getElementById('stair-tread').value; //Variable for the stair tread
    //Helper function to convert the stair tread inches value to feet
    const convertStairTread = () => {
        return stairTread / 12;
    };
    const stepCount = document.getElementById('step-count').value; //Variable for the step count
    //Helper function to determine the volume of a single step
    const determineVolumeOfStep = () => {
        return stairBaseWidth * convertStairRiser() * convertStairTread() * 0.5;
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
    document.getElementById('stair-length').value = '';
    document.getElementById('stair-width').value = '';
    document.getElementById('stair-height').value = '';
    document.getElementById('stair-riser').value = '';
    document.getElementById('stair-tread').value = '';
    document.getElementById('step-count').value = '';
    document.getElementById('stair-total').value = '';
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
    document.getElementById('curb-length').value = '';
    document.getElementById('curb-depth').value = '';
    document.getElementById('gutter-width').value = '';
    document.getElementById('curb-height').value = '';
    document.getElementById('flag-thickness').value = '';
    document.getElementById('curb-total').value = '';
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
    document.getElementById('outer-diameter').value = '';
    document.getElementById('inner-diameter').value = '';
    document.getElementById('drain-length').value = '';
    document.getElementById('drain-total').value = '';
});