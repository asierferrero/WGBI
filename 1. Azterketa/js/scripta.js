$(document).ready(function () {
    $(("a.nav-link")).hover(
        function (e) {
            e.preventDefault();
            $("a.nav-link").animate({ "font-size": "20" }, 500);
        },
        function () {
            $("a.nav-link").animate({ "font-size": "16" }, 500);
        }
    );

    $("button").click(balidatu);
});

function balidatu() {
    $(".needs-validation").on("submit", function (e) {
        if (!this.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.preventDefault();
            var checkbox = $("[name='linea']");
            if (checkbox[0].checked || checkbox[1].checked) {
                if ($("#selectOpcion option:selected").html() != "Aukeratu nora nahi duzun joan....") {
                    irudiaIzkutatu();
                    bidaiakBistaratu();
                }
            } else {
                alert('Gutxienez hotelak edo hegazkinak aukeratu behar duzu')
            }
        }
        $(this).addClass("was-validated");
    });
}

// ES5
// function bidaiakBistaratu() {
//     var url = "bidaiak.json";
//     $.ajax({
//         type: "GET",
//         url: url,
//         success: function (data) {
//             bidaiak = data;
//             testua = "";
//             for (i = 0; i < bidaiak.length; i++) {
//                 testua += "<li>" + bidaiak[i].ibilbidea + "</li>";
//             }
//             $("#zerrenda").html(testua);
//         },
//     });
// }

// function irudiaIzkutatu() {
//     $('#irudia').slideToggle();
// }

// function irudiaBistaratu() {
//     $('#irudia').show();
// }

// ES6 - Arrow function erabiliz
bidaiakBistaratu = () => {
    var url = "bidaiak.json";
    $.ajax({
        type: "GET",
        url: url,
        // Arrow function erabili hemen ere
        success: (data) => {
            bidaiak = data;
            testua = "";
            for (i = 0; i < bidaiak.length; i++) {
                testua += "<li>" + bidaiak[i].ibilbidea + "</li>";
            }
            $("#zerrenda").html(testua);
        },
    });
}

irudiaIzkutatu = () => {
    $('#irudia').slideToggle();
}

irudiaBistaratu = () => {
    $('#irudia').show();
}