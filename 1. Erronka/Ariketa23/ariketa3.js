const images = [
    'img/saludo1.jpg',
    'img/saludo2.jpg',
    'img/saludo3.jpg',
    'img/saludo4.jpg'
];

const container = document.getElementById('images-container');
const message = document.getElementById('message');
const button = document.getElementById('button');
kont = 0;

button.addEventListener('click', () => {
    if (kont == 4) {
        message.textContent = "Ezin dira irudi gehiago gehitu";
    } else {
        const img = document.createElement('img');
        img.src = images[kont];
        container.appendChild(img);
        kont++;
    }
});

container.addEventListener('dblclick', (e) => {
    if (e.target.tagName === 'img') {
        e.target.remove();
        e.target.push()
        message.textContent = '';
        kont--;
    }
});
