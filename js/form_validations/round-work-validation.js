//Round work calculator form validation functions
//Temporary until PHP validation is introduced

//Validation function
const roundWorkValidate = (e) => {
    //Validation for the diameter input
    if ($('#round-work-diameter').val() == "" || isNaN($('#round-work-diameter').val())) {
        $('#round-work-diameter').focus();
        alert('Please enter a valid number for diameter!');
        e.preventDefault();
        return false;
    };
    if ($('#round-work-diameter-selection').val() == "") {
        $('#round-work-diameter-selection').focus();
        alert('Please enter a valid measurement type for diameter!');
        e.preventDefault();
        return false;
    };

    //Validation for the height input
    if ($('#round-work-height').val() == "" || isNaN($('#round-work-height').val())) {
        $('#round-work-height').focus();
        alert('Please enter a valid number for height!');
        e.preventDefault();
        return false;
    };
    if ($('#round-work-height-selection').val() == "") {
        $('#round-work-height-selection').focus();
        alert('Please enter a valid measurement type for height!');
        e.preventDefault();
        return false;
    };

    //Validation for the quantity input
    if ($('#round-work-quantity').val() == "" || isNaN($('#round-work-quantity'))) {
        $('#round-work-quantity').focus();
        alert('Please enter a valid number for quantity!');
        e.preventDefault();
        return false;
    }
};

//Function prepared for export
export default roundWorkValidate;