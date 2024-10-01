function displayData() {
    let zuzendu = document.querySelector('input[name="zuzendu"]:checked').value;
    let izena = document.getElementById("izena").value;
    let abizena = document.getElementById("abizena").value;
    let helbidea = document.getElementById("helbidea").value;
    let hiria = document.getElementById("hiria").value;
    let gustokoa = document.querySelector('input[name="gustokoa"]:checked').value;

    let displayArea = document.getElementById("displayData");
    displayArea.innerHTML = `
        <p>Zuzentzeko era: ${zuzendu}</p>
        <p>Izena: ${izena}</p>
        <p>Abizena: ${abizena}</p>
        <p>Helbidea: ${helbidea}</p>
        <p>Hiria: ${hiria}</p>
        <p>Gustokoena: ${gustokoa}</p>
    `;
}

function updateImage() {
    let zuzendu = document.querySelector('input[name="zuzendu"]:checked').value;
    let imageElement = document.getElementById("personImage");

    if (zuzendu === "Jauna") {
        imageElement.src = "caraHombre.jpg";
        imageElement.alt = "Jauna";
    } else if (zuzendu === "Andere") {
        imageElement.src = "caraMujer.jpg";
        imageElement.alt = "Anderea";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let radioButtons = document.querySelectorAll('input[name="zuzendu"]');
    radioButtons.forEach(function(radio) {
        radio.addEventListener('change', updateImage);
    });
})

function clearData() {
    document.getElementById("myForm").reset();
    document.getElementById("displayData").innerHTML = "";
}