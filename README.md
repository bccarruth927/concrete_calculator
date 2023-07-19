# Concrete Calculator

This project was designed to provide solutions to a common necessity within the construction industry. Concrete is used in a variety of construction projects but the
total amount required for projects varies based on the type of project and the scale of the project. Concrete is manufactured and delievered based on cubic yards. 
Contractors utilize various forumlas to caluclate the cubic yardage for their project though ordering to much or to little can have consequences related to costs. 
This project was built to address the issue of calculating the cubic yardage by providing a range of different calculators that contractors can used based on their
intended project. Instead of determining the cubic yardage themselves they simply gather a few measurements related to their project and input them to the caluclator.
The caluclator then gives them a result which is the cubic yardage they need to complete their project.

## Features

This project currently has six available calculators.

- Flatwork Calculator
- Round Work Calculator
- Wall/Footer Calculator
- Stairs Calculator
- Curb/Gutter Calculator
- Drain/Tunnerl Calculator

Additional calculators will be added if the need arises however these six satisfy the majority of concrete based construction projects.

### Other Features

While the calculators are the main features of the project additional features have been incorporated into each one to ensure the best user experience

- Validation on all input and select fields
  - Each blank input field has been scripted to produce an error if the user leaves the field blank or enters a non-numerical character.
  - Each select field has been scripted to throw an error if the user fails to select a measurement option.
- The **Reset** button has been designed to reset all values in the calculator to their default state.
- Visual images have been provided below each calculator to give the user a visual of the project and what each calculator input corresponds to.

**Example image**

![3D visual model of a slab](/imgs/flatwork-diagram.png)

## How to Use

Using each individual calculator is simple

1. The user determines which calculator best matches their project.
2. The user then enters a numerical value into the blank input field.
   - The value entered should be the measurement that corresponds to the label which is to the left of the blank input field.
3. The user then selects a measurement option from the select field.
   - The select field is to the right of the blank input field.
4. The user then hits the **Calculate** button on the calculator.
5. The result of the user's numerical inputs and selected measurements is returned to the blank input field labeled **Total**.

## Technologies Used

Completion of this project used the following programming languages and applications.

- HTML5
- CSS
- JavaScript (jQuery.js)
- Adobe Illustrator
