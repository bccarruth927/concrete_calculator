//Helper functions JavaScript file

//Helper function to convert inches into feet
const convertInchesToFeet = (value) => {
    return value / 12;
};

//Helper function to determine the volume of a rectangle
const rectangleVolume = (length, width, height) => {
    return length * width * height;
};

const triangularPrismVolume = (length, width, height) => {
    return length * width * height * 0.5;
}

//Helper functions for export
export { convertInchesToFeet, rectangleVolume, triangularPrismVolume };
