//Curb/gutter calculator form validation functions
//Temporary until PHP validation is introduced

//Validation function
const drainTunnelValidate = (e) => {

    //Validation for the outer diameter input
    if ($('#drain-tunnel-outer-diameter').val() == "" || isNaN($('#drain-tunnel-outer-diameter').val())) {
        $('#drain-tunnel-outer-diameter').focus();
        alert('Please enter a valid number for outer diameter!');
        e.preventDefault();
        return false;
    };
    if ($('#drain-tunnel-outer-diameter-selection').val() == "") {
        $('#drain-tunnel-outer-diameter-selection').focus();
        alert('Please select a valid measurement type for outer diameter!');
        e.preventDefault();
        return false;
    };

    //Validation for the inner diameter input
    if ($('#drain-tunnel-inner-diameter').val() == "" || isNaN($('#drain-tunnel-inner-diameter').val())) {
        $('#drain-tunnel-inner-diameter').focus();
        alert('Please enter a valid number for inner diameter!');
        e.preventDefault();
        return false;
    };
    if ($('#drain-tunnel-inner-diameter-selection').val() == "") {
        $('#drain-tunnel-inner-diameter-selection').focus();
        alert('Please select a valid measurement type for inner diameter!');
        e.preventDefault();
        return false;
    };

    //Validation for the length input
    if ($('#drain-tunnel-length').val() == "" || isNaN($('#drain-tunnel-length').val())) {
        $('#drain-tunnel-length').focus();
        alert('Please enter a valid number for length!');
        e.preventDefault();
        return false;
    };
    if ($('#drain-tunnel-length-selection').val() == "") {
        $('#drain-tunnel-length-selection').focus();
        alert('Please select a valid measurement type for length!');
        e.preventDefault();
        return false;
    };
};

//Function prepared for export
export default drainTunnelValidate;