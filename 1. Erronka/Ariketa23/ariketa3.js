const images = [
    'img/saludo1.jpg',
    'img/saludo2.jpg',
    'img/saludo3.jpg',
    'img/saludo4.jpg'
];

let imageIndex = 0;
const maxImages = images.length;
const container = document.getElementById('images-container');
const message = document.getElementById('message');
const button = document.getElementById('show-image-btn');

button.addEventListener('click', () => {
    if (imageIndex < maxImages) {
        const img = document.createElement('img');
        img.src = images[imageIndex];
        img.alt = `Imagen ${imageIndex + 1}`;
        container.appendChild(img);
        imageIndex++;
    } else {
        message.textContent = "Ezin dira irudi gehiago gehitu";
    }
});

container.addEventListener('dblclick', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.remove();
        message.textContent = '';
    }
});
