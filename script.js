function multiply() {
    const FirstNumber = numberOne.value;
    const SecondNumber = numberTwo.value;
    const product = FirstNumber * SecondNumber
    console.log(product);
    answer.innerHTML = product;
}

function Addition() {
    const ThirdNumber = Number(numberThree.value);
    const FourthNumber = Number(numberFour.value);
    const sum = ThirdNumber + FourthNumber;
    console.log(sum);
    answer.innerHTML = sum;
}

function subtraction() {
    const FifthNumber = numberFive.value;
    const SixthNumber = numberSix.value;
    const minus = FifthNumber - SixthNumber;
    console.log(minus);
    answer.innerHTML = minus;
}