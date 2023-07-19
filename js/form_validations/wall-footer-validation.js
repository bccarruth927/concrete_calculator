//Wall/footer calculator form validation functions
//Temporary until PHP validation is introduced

//Validation function
const wallFooterValidate = (e) => {
    //Validation for the length input
    if ($('#wall-footer-length').val() == "" || isNaN($('#wall-footer-length').val())) {
        $('#wall-footer-length').focus();
        alert('Please enter a valid number for length!');
        e.preventDefault();
        return false;
    };
    if ($('#wall-footer-length-selection').val() == "") {
        $('#wall-footer-length-selection').focus();
        alert('Please select a measurement type for length!');
        e.preventDefault();
        return false;
    };

    //Validation for the width input
    if ($('#wall-footer-width').val() == "" || isNaN($('#wall-footer-width').val())) {
        $('#wall-footer-width').focus();
        alert('Please enter a valid number for width!');
        e.preventDefault();
        return false;
    };
    if ($('#wall-footer-width-selection').val() == "") {
        $('#wall-footer-width-selection').focus();
        alert('Please select a measurement type for width!');
        e.preventDefault();
        return false;
    };

    //Validation for the height input
    if ($('#wall-footer-height').val() == "" || isNaN($('#wall-footer-height').val())) {
        $('#wall-footer-height').focus();
        alert('Please enter a valid number for height!');
        e.preventDefault();
        return false;
    };
    if ($('#wall-footer-height-selection').val() == "") {
        $('#wall-footer-height-selection').focus();
        alert('Please select a valid measurement type for height!');
        e.preventDefault();
        return false;
    };

    //Validation for the channel width input
    if ($('#wall-footer-channel').val() == "" || isNaN($('#wall-footer-channel').val())) {
        $('#wall-footer-channel').focus();
        alert('Please enter a valid number for channel width!');
        e.preventDefault();
        return false;
    };
    if ($('#wall-footer-channel-selection').val() == "") {
        $('#wall-footer-channel-selection').focus();
        alert('Please select a valid measurement type for channel width!');
        e.preventDefault();
        return false;
    };
};

//Function prepared for export
export default wallFooterValidate;