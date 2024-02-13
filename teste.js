const muda = document.querySelector('.extras');
const texto = document.querySelector('.texto-sobre');
const mais = document.querySelector(".mais");
const corpo = document.body;

const times = new Array(
    corinthians,
    palmeiras
)


function palmeiras() {
    muda.innerHTML = `<img src="./imagens/palmeiras.png" />`;
    corpo.classList.remove("cor-gremio");
    corpo.classList.remove("cor-corinthians");
    corpo.classList.remove("cor-flamengo");
    corpo.classList.add("cor-palmeiras");
    texto.innerHTML = `<h1><span style="color: black">Palmeiras</span></h1>
    <p style="color:black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales sagittis elit, eu ultrices dui
        iaculis et. Mauris pharetra nisl at sodales gravida. Donec elementum, mi et consequat dictum, diam
        erat malesuada sem, eu efficitur est velit ac ligula. Quisque elit neque, euismod nec dictum non,
        fringilla nec magna</p>`;
    mais.innerHTML = `<h1><span style="color: black">Palmeiras</span></h1>
    <p style="color: black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales sagittis elit, eu ultrices dui
        iaculis et. Mauris pharetra nisl at sodales gravida. Donec elementum, mi et consequat dictum, diam
        erat malesuada sem, eu efficitur est velit ac ligula. Quisque elit neque, euismod nec dictum non,
        fringilla nec magna</p>`;
}

function corinthians() {
    muda.innerHTML = `<img src="./imagens/corinthians.png" />`;
    corpo.classList.remove("cor-gremio");
    corpo.classList.remove("cor-palmeiras");
    corpo.classList.remove("cor-flamengo");
    corpo.classList.add("cor-corinthians");
    texto.innerHTML = `<h1><span style="color: black">Corinthians</span></h1>
    <p style="color: black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales sagittis elit, eu ultrices dui
        iaculis et. Mauris pharetra nisl at sodales gravida. Donec elementum, mi et consequat dictum, diam
        erat malesuada sem, eu efficitur est velit ac ligula. Quisque elit neque, euismod nec dictum non,
        fringilla nec magna</p>`;
    mais.innerHTML = `<h1><span style="color: white">Corinthians</span></h1>
    <p style="color: white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales sagittis elit, eu ultrices dui
        iaculis et. Mauris pharetra nisl at sodales gravida. Donec elementum, mi et consequat dictum, diam
        erat malesuada sem, eu efficitur est velit ac ligula. Quisque elit neque, euismod nec dictum non,
        fringilla nec magna</p>`;
}

function flamengo() {
    muda.innerHTML = `<img src="./imagens/flamengo.png" />`;
    corpo.classList.remove("cor-gremio");
    corpo.classList.remove("cor-corinthians");
    corpo.classList.remove("cor-palmeiras");
    corpo.classList.add("cor-flamengo");
    texto.innerHTML = `<h1><span style="color: black">Flamengo</span></h1>
    <p style="color: black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales sagittis elit, eu ultrices dui
        iaculis et. Mauris pharetra nisl at sodales gravida. Donec elementum, mi et consequat dictum, diam
        erat malesuada sem, eu efficitur est velit ac ligula. Quisque elit neque, euismod nec dictum non,
        fringilla nec magna</p>`;
    mais.innerHTML = `<h1><span style="color: white">Flamengo</span></h1>
    <p style="color: white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales sagittis elit, eu ultrices dui
        iaculis et. Mauris pharetra nisl at sodales gravida. Donec elementum, mi et consequat dictum, diam
        erat malesuada sem, eu efficitur est velit ac ligula. Quisque elit neque, euismod nec dictum non,
        fringilla nec magna</p>`;
}

function gremio() {
    muda.innerHTML = `<img src="./imagens/gremio.png" />`;
    corpo.classList.remove("cor-corinthians");
    corpo.classList.remove("cor-palmeiras");
    corpo.classList.remove("cor-flamengo");
    corpo.classList.add("cor-gremio");
    texto.innerHTML = `<h1><span style="color: purple">Grêmio</span></h1>
    <p style="color: black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales sagittis elit, eu ultrices dui
        iaculis et. Mauris pharetra nisl at sodales gravida. Donec elementum, mi et consequat dictum, diam
        erat malesuada sem, eu efficitur est velit ac ligula. Quisque elit neque, euismod nec dictum non,
        fringilla nec magna</p>`;
    mais.innerHTML = `<h1><span style="color: white">Grêmio</span></h1>
    <p style="color: white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales sagittis elit, eu ultrices dui
        iaculis et. Mauris pharetra nisl at sodales gravida. Donec elementum, mi et consequat dictum, diam
        erat malesuada sem, eu efficitur est velit ac ligula. Quisque elit neque, euismod nec dictum non,
        fringilla nec magna</p>`;
}