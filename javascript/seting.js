let nodeInfor = {};
let reg = /[+-]?([0-9]*[.])?[0-9]+/

function updateNodeInfor() {
    $("#nodeId").bind("change", function () {
        nodeInfor.nodeid = $(this).val();
    });
    $("#nodeTemparate").bind("change", function () {
        nodeInfor.nodeTemparate = $(this).val();
    });
    $("#realTemparate").bind("change", function () {
        nodeInfor.realTemparate = $(this).val();
    });
    nodeInfor.getwayId = $("#getwayid").val();
}

function callUpdateNode() {

    if (!reg.test(nodeInfor.nodeid)) {
        $('#box').css('display', 'block');
        $(".boxClass").find("span").text("id node phải là số");
    }
    else if (!reg.test(nodeInfor.nodeTemparate)) {
        $('#box').css('display', 'block');
        $(".boxClass").find("span").text("nhiệt độ node phải là số");
    }
    else if (!reg.test(nodeInfor.realTemparate)) {
        $('#box').css('display', 'block');
        $(".boxClass").find("span").text("nhiệt độ thực tế phải là số");
    }
    else {
        socket.emit("sendOffset", nodeInfor);
        $('#box').css('display', 'block');
        $(".boxClass").find("span").text("cập nhật thành công!");
    }

}

socket.on("serverSendData", function (dataMqtt) {
    
});

$(document).ready(function () {
    updateNodeInfor();

    $("#nodeSetting").bind("click", function () {
        $('#idNode').css('display', 'block');
    });

    $("#hideNodeConfig").bind("click", function () {
        $("#nodeId").val(0);
        $("#nodeTemparate").val(0);
        $("#realTemparate").val(0);
        $('#idNode').css('display', 'none');
    });

    $("#closeNodeConfig").bind("click", function () {
        $("#nodeId").val(0);
        $("#nodeTemparate").val(0);
        $("#realTemparate").val(0);
    });

    $("#submitNodeConfig").bind("click", function () {
        callUpdateNode();
    });
    
});