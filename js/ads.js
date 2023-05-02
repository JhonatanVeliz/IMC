// Cada imagen
const images = document.querySelectorAll('.img__item');

// Funcion que cambia el indice del src de cada img
const rotarImage = ()=>{
    return images.forEach((e)=>{
        let numRandom = Math.floor(Math.random() * 3);
        e.src = `./img/${numRandom}.png`
    });
};

setInterval(rotarImage, 7000);
