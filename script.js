const button = document.getElementById('cnvt');
const button2 = document.getElementById('reset');

const inputNum = document.getElementById('inputNum');
const inputTemp = document.getElementById('tempInput');

const clResult = document.getElementById('cl');
const fhResult = document.getElementById('fh');
const kvResult = document.getElementById('kv');

function convert() {
    const tempNum = parseFloat(inputNum.value);
    const temp = inputTemp.value;
  
    if (temp === 'C') {
        cl = tempNum;
        fh = (tempNum * 9/5) + 32;
        kv = tempNum + 273.15;
    } else if (temp === 'F') {
        cl = (tempNum - 32) * 5/9;
        fh = tempNum;
        kv = (tempNum - 32) * 5/9 + 273.15;
    } else if (temp === 'K') {
        cl = tempNum - 273.15;
        fh = (tempNum - 273.15) * 9/5 + 32;
        kv = tempNum;
    }    
    clResult.value = cl.toFixed(2);
    fhResult.value = fh.toFixed(2);
    kvResult.value = kv.toFixed(2);
}
function reset() {
    clResult.value = "°C";
    fhResult.value = "°F";
    kvResult.value = "K";
}
button.addEventListener('click', convert);

button2.addEventListener('click', reset);