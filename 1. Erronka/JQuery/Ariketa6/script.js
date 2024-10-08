$(document).ready(function () {
    $(document).keydown(function (e) {
        switch (e.key) {
            case "ArrowLeft":
                $('#rocket').css({ 'transform': 'rotate(0deg)' })
                if (e.ctrlKey) {
                    $('#rocket')
                        .css({ 'transform': 'rotate(-45deg)' })
                        .animate({ top: "-=100px", left: "-=100px" }, 500);
                } else if (e.shiftKey) {
                    $('#rocket')
                        .css({ 'transform': 'rotate(-135deg)' })
                        .animate({ top: "+=100px", left: "-=100px" }, 500);
                } else {
                    $('#rocket')
                        .css({ 'transform': 'rotate(-90deg)' })
                        .animate({ left: "-=100px" }, 500);
                }
                break;
            case "ArrowRight":
                $('#rocket').css({ 'transform': 'rotate(0deg)' })
                if (e.ctrlKey) {
                    $('#rocket')
                        .css({ 'transform': 'rotate(45deg)' })
                        .animate({ top: "-=100px", left: "+=100px" }, 500);
                } else if (e.shiftKey) {
                    $('#rocket')
                        .css({ 'transform': 'rotate(135deg)' })
                        .animate({ top: "+=100px", left: "+=100px" }, 500);
                } else {
                    $('#rocket')
                        .css({ 'transform': 'rotate(90deg)' })
                        .animate({ left: "+=100px" }, 500);
                }
                break;
            case "ArrowUp":
                $('#rocket')
                    .css({ 'transform': 'rotate(0deg)' })
                    .animate({ top: "-=100px" }, 500);
                break;
            case "ArrowDown":
                $('#rocket')
                    .css({ 'transform': 'rotate(180deg)' })
                    .animate({ top: "+=100px" }, 500);
                break;
        }
    });

    $('#btn').click(function () {
        $('#rocket').css({
            'top': '0',
            'left': '50%'
        });
    });
})