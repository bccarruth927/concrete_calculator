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