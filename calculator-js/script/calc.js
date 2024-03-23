let calculation = localStorage.getItem("calculation") || "";

localStorage.getItem(JSON.parse(JSON.stringify(calculation)));

function calculate(value) {
    calculation += value;
    console.log(calculation);
    localStorage.setItem("calculation", calculation);
}

function displayOutput() {
    document.querySelector(".js-display").innerHTML = `${calculation}`;
}

function defaultOutput() {
    document.querySelector('.js-display').innerHTML = `0`;
}

function clearCalculation(){
  calculation = "";
  defaultOutput();
}
