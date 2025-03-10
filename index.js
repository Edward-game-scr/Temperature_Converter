const myTextbox = document.getElementById("myTemperature");
const C_to_F = document.getElementById("C_to_F");
const F_to_C = document.getElementById("F_to_C");
const myBtn = document.getElementById("MyBtn");
const result = document.getElementById("result");

let temp;

function convert() {

    if(C_to_F.checked) {

        temp = Number(myTextbox.value);
        temp = temp * 9/6 + 32;
        result.textContent = temp.toFixed(1) + " Fehrenheit";

    }
    else if(F_to_C.checked) {

        temp = Number(myTextbox.value);
        temp = 5/9 * (temp - 32);
        result.textContent = temp.toFixed(1) + " Celcius";

    }
    else {

        result.textContent = "Select a unit";

    }

}