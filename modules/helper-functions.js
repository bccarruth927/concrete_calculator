//Helper function to convert Inches to Feet
const convertInchesToFeet = value => {
    return value / 12;
}

//Helper function to find the total volume of a rectangular area
const totalRectangleVolume = (length, width, height) => {
    return length * width * height;
}

//Helper function to find the total volume of a triangular prism
const totalTriangularPrismVolume = (length, width, height) => {
    return length * width * height * 0.5;
}

//Helper function to multiply two variables together
const simpleMultiply = (value1, value2) => {
    return value1 * value2;
}

//Exporting helper functions

export { convertInchesToFeet, totalRectangleVolume, totalTriangularPrismVolume, simpleMultiply };