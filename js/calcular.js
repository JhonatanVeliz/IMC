// difinir si el valor de result es en mobile o en desktop
let result;
let form;
let btnDelete;
let peso;
let altura;
if (screen.width >= '992') {
    result = document.querySelector('#resultDesktop');
    form = document.querySelector('#formDesktop');
    btnDelete = document.querySelector('#deleteDesktop');
    // Valor de los inputs
    peso = document.querySelector('#peso');
    altura = document.querySelector('#altura');
} else {
    result = document.querySelector('#resultMobile');
    form = document.querySelector('#formMobile');
    btnDelete = document.querySelector('#deleteMobile');
    // Valor de los inputs
    peso = document.querySelector('#pesoMobile');
    altura = document.querySelector('#alturaMobile');
}

// Valor de los botones calcular
const calcular = document.querySelectorAll('.calcular');



// agrega y elimina la clase al boton delete del div result
const classListAddClear = () => {
    btnDelete.classList.toggle('result__icon--active');
}

// CALCULA EL IMC
const calcularIMC = () => {

    let pesoValue = parseInt(peso.value) / 2.2046;
    let alturaValue = parseFloat(altura.value) * 2;

    const resultado = (pesoValue / alturaValue);

    if (isNaN(resultado)) {
        result.textContent = 'No Valido';
    } else {
        result.textContent = resultado.toFixed(2);
    }
    form.reset();
    classListAddClear();
};

// EJECUTAR " calcularIMC () "
calcular.forEach((e) => {
    e.addEventListener('click', calcularIMC);
})

// Limpia el textContent del div result
const limpiarResult = () => {
    result.textContent = 'Resultado';
    classListAddClear();
}
btnDelete.addEventListener('click', limpiarResult);