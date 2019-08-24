$(document).ready(function () {
    $("#showFromLogin").click(function () {
        $('#idLogin').css('display', 'block');
    });

    $("#showFromRegistor").click(function () {
        $('#idRegister').css('display', 'block');
    });

    $("#hideFromLogin").click(function () {
        $('#idLogin').css('display', 'none');
    }); 

    $("#tranregister").click(function () {
        $('#idLogin').css('display', 'none');
        $('#idRegister').css('display', 'block');
    });

    $("#hideFromRegister").click(function () {
        $('#idRegister').css('display', 'none');
    });

    $("#hideError").click(function () {
        $('#box').css('display', 'none');
    });
});