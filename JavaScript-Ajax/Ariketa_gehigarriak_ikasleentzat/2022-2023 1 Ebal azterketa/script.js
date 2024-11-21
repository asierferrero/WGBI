$(document).ready(function () {
    $("#form").hide();

    $('#img').click(function (e) {
        e.preventDefault();
        $('#img')
            .css({ 'opacity': '1', 'height': '10px' })
            .animate({ 'opacity': '0.5', 'height': '100px' }, 2000)
    });

    $('#erakutsi').click(function (e) {
        e.preventDefault();
        if ($('#herrialde option:selected').html() === 'Aukeratu') {
            alert('Herrialdea aukeratu behar duzu')
        } else {
            errezetakErakutsi()
        }
    });

    $('.needs-validation').on('submit', function (e) {
        if (!this.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }
        $(this).addClass('was-validated');
    });

    $("#berria").click(function () {
        $("#form").toggle();
    });
});

function errezetakErakutsi() {
    var url = 'cookpad.json';
    $.ajax({
        type: "GET",
        url: url,
        success: function (data) {
            datuak = data;
            argazkiak = "";
            for (i = 0; i < datuak.length; i++) {
                if (datuak[i].herrialdea == $('#herrialde option:selected').html()) {
                    var errezetak = [];
                    errezetak = datuak[i].errezetak;
                    for (j = 0; j < errezetak.length; j++) {
                        argazkiak += "<img class='irudia' src=" + errezetak[j].izena + " >";
                    }
                }
            }
            $("#irudiak").html(argazkiak);
        }
    });
}