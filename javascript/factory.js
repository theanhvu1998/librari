
let count = 1;

socket.on("serverSendData", function (dataMqtt) {
    dataMqtt.forEach(data => {
            $("#id" + count).text(data);
            count++; 
    });
    count = 1;
});