var sushiak = [];
var erak = true;
$(document).ready(function () {
    $("#erosiForm").hide();
    $("#erakutsi").click(Balidatu);
    $("#erosi").click(erosiErakutsi);
});
function Balidatu() {
    if ($("#mota option:selected").html() == "Aukeratu") {
        alert("Bidalketa mota aukeratu behar duzu");
    } else {
        sushiErakutsi();
    }
}
function sushiErakutsi() {
    $("#erosiForm").hide();
    if (erak == true) {
        /*Ajax erabili sushia irakurtzeko*/
        var url = "sushi.json";
        $.ajax({
            type: "GET",
            url: url,
            success: function (data) {
                sushiak = data;
                testua = "";
                for (i = 0; i < sushiak.length; i++) {
                    testua +=
                        "<img class='irudia' src=Irudiak/" + sushiak[i].izena + " >";
                }
                $("#irudiak").html(testua);
                $("#erakutsi").html("Sushi Izkutatu");
                erak = false;
            },
        });
    } else {
        $("#irudiak").html("");
        erak = true;
        $("#erakutsi").html("Sushi Erakutsi");
    }
}
function erosiErakutsi() {
    $("#irudiak").html("");
    erak = true;
    $("#erakutsi").html("Sushi Erakutsi");
    $("#erosiForm").show();
}
