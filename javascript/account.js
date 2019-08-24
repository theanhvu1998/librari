const socket = io();
let originUser = {};
let userInfor = {};

function updateUserInfor() {
    $("#usernameInfor").bind("change", function () {
        userInfor.username = $(this).val();
    });
    $("#getwayidInfor").bind("change", function () {
        userInfor.getwayid = $(this).val();
    });
    $("#nodesInfor").bind("change", function () {
        userInfor.nodes = $(this).val();
    });
    $("#addressInfor").bind("change", function () {
        userInfor.address = $(this).val();
    });
    $("#phoneNumberInfor").bind("change", function () {
        userInfor.phone = $(this).val();
    });
}

function callUpdateUser() {
    $.ajax({
        url: "/user/update",
        type: "put",
        cache: false,
        data: userInfor,
        success: function (result) {
            $('#box').css('display', 'block');
            $(".boxClass").find("span").text(result.message);
            originUser = Object.assign(originUser, userInfor);
        },
        error: function (error) {
            $('#box').css('display', 'block');
            $(".boxClass").find("span").text(error.responseText);
        },
    });
}

$(document).ready(function () {

    updateUserInfor();
    originUser = {
        username: $("#usernameInfor").val(),
        getwayid: $("#getwayidInfor").val(),
        nodes: $("#nodesInfor").val(),
        address: $("#addressInfor").val(),
        phone: $("#phoneNumberInfor").val(),
    };

    $("#accountSetting").click(function () {
        $('#idAccount').css('display', 'block');
    });

    $("#submitAccount").click(function () {
        callUpdateUser();      
    });

    $("#closeAccount").click(function () {
        $("#usernameInfor").val(originUser.username);
        $("#getwayidInfor").val(originUser.getwayid);
        $("#nodesInfor").val(originUser.nodes);
        $("#addressInfor").val(originUser.address);
        $("#phoneNumberInfor").val(originUser.phone);
    });

    $("#hideAccount").click(function () {
        $("#usernameInfor").val(originUser.username);
        $("#getwayidInfor").val(originUser.getwayid);
        $("#nodesInfor").val(originUser.nodes);
        $("#addressInfor").val(originUser.address);
        $("#phoneNumberInfor").val(originUser.phone);
        $('#idAccount').css('display', 'none');
    });

    $("#hideError").click(function () {
        $('#box').css('display', 'none');
        location.reload();
    });
});