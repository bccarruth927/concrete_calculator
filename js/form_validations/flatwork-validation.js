//Flatwork calculator form validation functions
//Temporary until PHP validation is introduced

//Validation function
const flatworkValidate = (e) => {

    //Validation for the length input
    if ($('#flatwork-length').val() == "" || isNaN($('#flatwork-length').val())) {
        $('#flatwork-length').focus();
        alert('Please enter a valid number for length!');
        e.preventDefault();
        return false;
    };
    if ($('#flatwork-length-selection').val() == "") {
        $('#flatwork-length-selection').focus();
        alert('Please enter a valid measurement type for length!');
        e.preventDefault();
        return false;
    };

    //Validation for the width input
    if ($('#flatwork-width').val() == "" || isNaN($('#flatwork-width').val())) {
        $('#flatwork-width').focus();
        alert('Please enter a valid number for width!');
        e.preventDefault();
        return false;
    };
    if ($('#flatwork-width-selection').val() == "") {
        $('#flatwork-width-selection').focus();
        alert('Please enter a valid measurement type for width!');
        e.preventDefault();
        return false;
    };

    //Validation for the height input
    if ($('flatwork-height').val() == "" || isNaN($('#flatwork-height').val())) {
        $('#flatwork-height').focus();
        alert('Please enter a valid number for height!');
        e.preventDefault();
        return false;
    };
    if ($('#flatwork-height-selection').val() == "") {
        $('#flatwork-height-selection').focus();
        alert('Please enter a valid measurement type for height!');
        e.preventDefault();
        return false;
    }
};

//Function prepared for export
export default flatworkValidate;