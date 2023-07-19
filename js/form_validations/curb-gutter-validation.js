//Curb/gutter calculator form validation functions
//Temporary until PHP validation is introduced

//Validation function
const curbGutterValidate = (e) => {

    //Validation for the length input
    if ($('#curb-length').val() == "" || isNaN($('#curb-length').val())) {
        $('curb-length').focus();
        alert('Please enter a valid number for length!');
        e.preventDefault();
        return false;
    };
    if ($('#curb-length-selection').val() == "") {
        $('#curb-length-selection').focus();
        alert('Please select a valid measurement type for length!');
        e.preventDefault();
        return false;
    };

    //Validation for the curb depth input
    if ($('#curb-depth').val() == "" || isNaN($('#curb-depth').val())) {
        $('#curb-depth').focus();
        alert('Please enter a valid number for curb depth!');
        e.preventDefault();
        return false;
    };
    if ($('#curb-depth-selection').val() == "") {
        $('#curb-depth-selection').focus();
        alert('Please select a valid measurement type for curb depth!');
        e.preventDefault();
        return false;
    };

    //Validation for the gutter width
    if ($('#gutter-width').val() == "" || isNaN($('#gutter-width').val())) {
        $('#gutter-width').focus();
        alert('Please enter a valid number for gutter width!');
        e.preventDefault();
        return false;
    };
    if ($('#gutter-width-selection').val() == "") {
        $('#gutter-width').focus();
        alert('Please select a valid measurement type for gutter width!');
        e.preventDefault();
        return false;
    };

    //Validation for the curb height input
    if ($('#curb-height').val() == "" || isNaN($('#curb-height').val())) {
        $('#curb-height').focus();
        alert('Please enter a valid number for curb height!');
        e.preventDefault();
        return false;
    };
    if ($('#curb-height-selection').val() == "") {
        $('#curb-height-selection').focus();
        alert('Please select a valid measurement type for curb height!');
        e.preventDefault();
        return false;
    };

    //Validation for the flag thickness input
    if ($('#flag-thickness').val() == "" || isNaN($('#flag-thickness').val())) {
        $('#flag-thickness').focus();
        alert('Please enter a valid number for flag thickness!');
        e.preventDefault();
        return false;
    };
    if ($('#flag-thickness-selection').val() == "") {
        $('#flag-thickness-selection').focus();
        alert('Please select a valid measurement type for flag-thickness!');
        e.preventDefault();
        return false;
    };
};

//Function prepared for export
export default curbGutterValidate;