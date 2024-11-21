$(document).ready(function () {
    $("#esteka").click(function (e) {
        e.preventDefault();
        $("#kapa").load("edukia-ajax.html");
    });
})