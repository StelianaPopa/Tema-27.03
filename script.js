
const plusButton = document.querySelector('.plus-button');
const minusButton = document.querySelector('.minus-button');
const inmultireButton = document.querySelector('.inmultire-button');
const impartireButton = document.querySelector('.impartire-button');
const helpButton = document.querySelector('.help-button');
const resetButton = document.querySelector('.reset-button');
const contorReset = document.querySelector('.contor-reset');
const calculatorNumber = document.querySelector('.calculator-number');

let number = 0;

const updateCalculatorNumber = () => {
    calculatorNumber.innerText = number;
    if (number >= 5) {
        calculatorNumber.style.color = "green";
    }
    if (number > -5 && number < 5) {
        calculatorNumber.style.color = "black";
    }
    if (number <= -5) {
        calculatorNumber.style.color = "red";
    }
    if (number > 10) {
        calculatorNumber.style.fontSize = "64px";
    } else {
        calculatorNumber.style.fontSize = "52px";
    }
};

const addOne = () => {
    number++;
    updateCalculatorNumber();
};
plusButton.addEventListener('click', addOne);

const minusOne = () => {
    number--;
    updateCalculatorNumber();
};
minusButton.addEventListener('click', minusOne);

const inmultesteCuDoi = () => {
    number *= 2;
    updateCalculatorNumber();
};
inmultireButton.addEventListener('click', inmultesteCuDoi);

const imparteLaDoi = () => {
    number /= 2;
    updateCalculatorNumber();
};
impartireButton.addEventListener('click', imparteLaDoi);

const apasaHelp = () => {
    alert ("Instructiune de folosire: La apasarea butonului '+' se va executa adunarea cu 1, la apasarea butonului '-' se va executa scadearea cu 1 la apasarea butonului '*' se va executa inmultirea cu 2, iar la apasarea butonului '/' se va executa impartirea la 2");
};
helpButton.addEventListener('click', apasaHelp);

let nrResetari = 0;
const resetare = () => {
    number = 0; 
    updateCalculatorNumber();
    nrResetari += 1;
    contorReset.innerText = `Calculatorul a fost resetat de ${nrResetari} ori`;
};
resetButton.addEventListener('click', resetare);

