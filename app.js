// https://www.omnicalculator.com/conversion/tbsp-to-tbsp

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const mlRadio = document.getElementById('mlRadio');
const tbspRadio = document.getElementById('tbspRadio');

let ml;
let tbsp = v; 

// labels of the inpust
const variable = document.getElementById('variable');

mlRadio.addEventListener('click', function() {
  variable.textContent = 'Tbsp';
  tbsp = v;
  result.textContent = '';
});

tbspRadio.addEventListener('click', function() {
  variable.textContent = 'ml';
  ml = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(mlRadio.checked)
    result.textContent = `ml = ${computeml().toFixed(5)}`;

  else if(tbspRadio.checked)
    result.textContent = `Tbsp = ${computetbsp().toFixed(5)}`;
})

// calculation

function computeml() {
  return Number(tbsp.value) * 14.7868;
}

function computetbsp() {
  return Number(ml.value) / 14.7868;
}