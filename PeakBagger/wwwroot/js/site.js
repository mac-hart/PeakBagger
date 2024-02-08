$(document).ready(function () {
    $('#calculate').on('click', function () {
        event.preventDefault(); // Prevent default form submission behavior

        var hours = $('#hours').val();

        if (isNaN(hours) || hours <= 0) {
            alert('Please enter a valid positive number for hours.');
            return;
        }

        var hourlyRate = parseFloat($('#hourlyRate').val().replace('$', ''));
        var total = hours * hourlyRate;

        $('#total').val('$' + total.toFixed(2));
    });
});
