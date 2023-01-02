let select  = document.querySelector("select");
let check = document.getElementById("result");
let answer = document.getElementById("Answer");
let operators = document.getElementById("operations");

const defaultValues = () => {
    check.addEventListener("click", () => {
        let number1 = document.getElementById("a").value;
        let number2 = document.getElementById("b").value;
        if(number1.length == 0 || number2.length == 0) {
            answer.innerHTML = 0
        }else {
            let solution = Number(number1) + Number(number2);
            answer.innerHTML = solution;
        }
    })
}
defaultValues();
const additionCalculation = () => {
    select.addEventListener("change", () => {
        if(select.value === "Addition") {
            operators.innerText = "+";
            check.addEventListener("click", () => {
                let number1 = document.getElementById("a").value;
                let number2 = document.getElementById("b").value;
                if(number1.length == 0 || number2.length == 0) {
                    answer.innerHTML = 0
                }else {
                    let solution = Number(number1) + Number(number2);
                    answer.innerHTML = solution;
                }
            })
        }
    })
}
additionCalculation();

const substractionCalculation = () => {
    select.addEventListener("change", () => {
        if(select.value === "Substraction") {
            operators.innerText = "-";
            check.addEventListener("click", () => {
                let number1 = document.getElementById("a").value;
                let number2 = document.getElementById("b").value;
                if(number1.length == 0 || number2.length == 0) {
                    answer.innerHTML = 0
                }else {
                    let solution = Number(number1) - Number(number2);
                    answer.innerHTML = solution;
                }
            })
        }
    })
}
substractionCalculation();

const multiplicationCalculation = () => {
    select.addEventListener("change", () => {
        if(select.value === "Multiplication") {
            operators.innerText = "*";
            check.addEventListener("click", () => {
                let number1 = document.getElementById("a").value;
                let number2 = document.getElementById("b").value;
                if(number1.length == 0 || number2.length == 0) {
                    answer.innerHTML = 0
                }else {
                    let solution = Number(number1) * Number(number2);
                    answer.innerHTML = solution;
                }
            })
        }
    })
}
multiplicationCalculation();

const divisionCalculation = () => {
    select.addEventListener("change", () => {
        if(select.value === "Division") {
            operators.innerText = "/";
            check.addEventListener("click", () => {
                let number1 = document.getElementById("a").value;
                let number2 = document.getElementById("b").value;
                if(number1.length == 0 || number2.length == 0) {
                    answer.innerHTML = 0
                }else {
                    let solution = Number(number1) / Number(number2);
                    answer.innerHTML = solution;
                }
            })
        }
    })
}
divisionCalculation();