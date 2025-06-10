
function multiply() {
    const FirstNumber = numberOne.value;
    const SecondNumber = numberTwo.value;
    const product = FirstNumber * SecondNumber
    console.log(product);
    answer.innerHTML = product;
}

function Addition() {
    const FirstNumber = Number(numberOne.value);
    const SecondNumber = Number(numberTwo.value);
    const sum = FirstNumber + SecondNumber;
    console.log(sum);
    answer.innerHTML = sum;
}

function subtraction() {
    const FirstNumber = numberOne.value;
    const SecondNumber = numberTwo.value;
    const minus = FirstNumber - SecondNumber;
    console.log(minus);
    answer.innerHTML = minus;
}