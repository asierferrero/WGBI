$(document).ready(function () {
    $(document).keydown(function (e) {
        switch (e.key) {
            case "ArrowLeft":
                $('#rocket').animate({left:"-=100px"}, 500);
                break;
            case "ArrowRight":
                $('#rocket').animate({left:"+=100px"}, 500);
                break;
            case "ArrowUp":
                $('#rocket').animate({top:"-=100px"}, 500);
                break;
            case "ArrowDown":
                $('#rocket').animate({top:"+=100px"}, 500);
                break;
        }
    });
})