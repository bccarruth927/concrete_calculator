//Stairs calculator form validation functions
//Temporary until PHP validation is introduced

//Validation function
const stairsValidate = (e) => {
    
    //Validation for the flight input
    if ($('#stair-flight').val() == "" || isNaN($('#stair-flight').val())) {
        $('#stair-flight').focus();
        alert('Please enter a valid number for flight!');
        e.preventDefault();
        return false;
    };
    if ($('#stair-flight-selection').val() == "") {
        $('#stair-flight-selection').focus();
        alert('Please enter a valid measurement type for flight!');
        e.preventDefault();
        return false;
    };

    //Validation for the width input
    if ($('#stair-width').val() == "" || isNaN($('#stair-width').val())) {
        $('#stair-width').focus();
        alert('Please enter a valid number for width!');
        e.preventDefault();
        return false;
    };
    if ($('#stair-width-selection').val() == "") {
        $('#stair-width-selection').focus();
        alert('Please enter a valid measurement type for width!');
        e.preventDefault();
        return false;
    };

    //Validation for the riser input
    if ($('#stair-riser').val() == "" || isNaN($('#stair-riser').val())) {
        $('#stair-riser').focus();
        alert('Please enter a valid number for riser!');
        e.preventDefault();
        return false;
    };

    //Validation for the tread input
    if ($('#stair-tread').val() == "" || isNaN($('#stair-tread').val())) {
        $('#stair-tread').focus();
        alert('Please enter a valid number for tread!');
        e.preventDefault();
        return false;
    };

    //Validation for the landing input
    if ($('#stair-landing').val() == "" || isNaN($('#stair-landing').val())) {
        $('$stair-landing').focus();
        alert('Please enter a valid number for landing!');
        e.preventDefault();
        return false;
    };
    if ($('#stair-landing-selection').val() == "") {
        $('#stair-landing-selection').focus();
        alert('Please enter a valid measurement type for landing!');
        e.preventDefault();
        return false;
    };
};

//Function prepared for export
export default stairsValidate;