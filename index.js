const array_concursantes = [
    //'kamila Villablanca'-GANADORA
    'Daniela Salvador Caballero',
    'LeoGarcia01',
    'Gaspak',
    'Oxmar Yamith',
    'Mauro Toranzo',
    'Gerardo Garcia Hernandez',
    'Pierre Zurita Ramirez',
    'Pierre Zurita Ramirez',
    'Daniela Salvador Caballero',
    'samp play',
    'Eduardo Joel Paucarpura Sanchez',
    'Anthony Espino',
    'Jordan Team',
    'Gerardo Garcia Hernandez',
    'Anthony Espino',
    'Oxmar Yamith',
    'Oxmar Yamith',
    'Oxmar Yamith',
    'Oxmar Yamith',
    'Oxmar Yamith',
    'Gerardo Garcia Hernandez',
    'TheComicalCanadian'
];

let canvas = document.getElementById("idcanvas");
let context = canvas.getContext("2d");
let center = canvas.width / 2;

context.beginPath();
context.moveTo(center, center);
context.arc(center, center, center, 0, 2 * Math.PI);
context.lineTo(center, center);
context.fillStyle = '#33333333';
context.fill();

context.beginPath();
context.moveTo(center, center);
context.arc(center, center, center - 10, 0, 2 * Math.PI);
context.lineTo(center, center);
context.fillStyle = 'black';
context.fill();

for (let i = 0; i < array_concursantes.length; i++) {
    context.beginPath();
    context.moveTo(center, center);
    context.arc(center, center, center - 20, i * 2 * Math.PI / array_concursantes.length, (i + 1) * 2 * Math.PI / array_concursantes.length);
    context.lineTo(center, center);
    context.fillStyle = random_color();
    context.fill();

    context.save();
    context.translate(center, center);
    context.rotate(3 * 2 * Math.PI / (5 * array_concursantes.length) + i * 2 * Math.PI / array_concursantes.length);
    context.translate(-center, -center);
    context.font = "13px Comic Sans MS";
    context.textAlign = "right";
    context.fillStyle = "white";
    context.fillText(array_concursantes[i], canvas.width - 30, center);
    context.restore();
}

let pos_ini = 0;
let clic = 0;
let movement;

function sortear() {
    if (clic == 0) {
        movement = setInterval(function() {
            pos_ini += 10;
            canvas.style.transform = 'rotate(' + pos_ini + 'deg)';
        }, 10);
        clic = 1;
        document.getElementById("idestado").innerHTML = "Detener";
    } else {
        clearInterval(movement);
        clic = 0;
        document.getElementById("idestado").innerHTML = "Sortear";
    }
}

function random_color() {
    let ar_digit = ['2', '3', '4', '5', '6', '7', '8', '9'];
    let color = '';
    for (let i = 0; i < 6; i++) {
        let pos = Math.round(Math.random() * (ar_digit.length - 1));
        color += ar_digit[pos];
    }
    return '#' + color;
}
