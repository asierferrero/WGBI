const kamisetak = [
    {id:6, src:"images/6.jpg"},
    {id:9, src:"images/9.jpg"},
    {id:11, src:"images/11.jpg"}
]

let kamisetaId = 0;

function aurrera() {
    kamisetaId = (kamisetaId + 1) % kamisetak.length;
    document.getElementById('argazkia').src = kamisetak[kamisetaId].src;
    document.getElementById('kamiseta').innerText = "Kamiseta " + kamisetak[kamisetaId].id;
    // if (kamisetaId < kamisetak.length - 1) {
    //     kamisetaId++;
    //     document.getElementById('argazkia').src = kamisetak[kamisetaId].src;
    //     document.getElementById('kamiseta').innerText = "Kamiseta " + kamisetak[kamisetaId].id;
    // }
}

function atzera() {
    kamisetaId = (kamisetaId - 1 + kamisetak.length) % kamisetak.length;
    document.getElementById('argazkia').src = kamisetak[kamisetaId].src;
    document.getElementById('kamiseta').innerText = "Kamiseta " + kamisetak[kamisetaId].id;
    // if (kamisetaId < kamisetak.length + 1) {
    //     kamisetaId--;
    //     document.getElementById('argazkia').src = kamisetak[kamisetaId].src;
    //     document.getElementById('kamiseta').innerText = "Kamiseta " + kamisetak[kamisetaId].id;
    // }
}