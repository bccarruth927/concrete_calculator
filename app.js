//Global variables for buttons inside the slab/sidewalk calculator
const slabCalcBtn = document.getElementById('slab-btn');
const slabClear = document.getElementById('slab-clear');

//Event listener on the Calculate button for the slab/sidewalk calculator
slabCalcBtn.addEventListener('click', function determineCubicYards() {
    //Helper function to convert inches into feet
    let slabThickness = document.getElementById('slab-thickness').value; //Variable for slab thickness input
    const convertInchesToFeet = () => { //Declared helper function convertInchesToFeet
        return slabThickness / 12;
    }
    //Declared function to convert input measurments into total yardage required for slab project
    const slabLength = document.getElementById('slab-length').value; //Variable for slab length input
    const slabWidth = document.getElementById('slab-width').value; //Variable for slab width input
    const volume = Math.floor(slabLength * slabWidth * convertInchesToFeet()); //Forumla for total volume

    return document.getElementById('slab-total').value = Math.floor(volume / 27); //Final result added to output
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
    //Local variable declaration for the stair riser
    const stairRiser = document.getElementById('stair-riser').value;
    //Helper function to convert the stair riser inches value to feet
    const convertStairRiser = () => {
        return stairRiser / 12;
    };
    //Local variable declaration for the stair tread
    const stairTread = document.getElementById('stair-tread').value;
    //Helper function to convert the stair tread inches value to feet
    const convertStairTread = () => {
        return stairTread / 12;
    };
    //Local variable declaration for the step count
    const stepCount = document.getElementById('step-count').value;
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
    
    //Finding the total cubic yards in steps
    return document.getElementById('stair-total').value = Math.floor(volume / 27);
});