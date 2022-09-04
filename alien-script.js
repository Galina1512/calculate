const btn = document.querySelector('#btn1');
// const btn2 = document.querySelector('#btn2');
// const rub1 = document.querySelector('#rub1');
// const rub2 = document.querySelector('#rub2');


// rub1.addEventListener('change', calkEuro);

// async function calkEuro() {
//     const result = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json');
//     const resultReceived = await result.json();
//     console.log(resultReceived);

//     let rub1 = document.querySelector('#rub1').value;

//     let rubInEuro = resultReceived.eur.rub;
//     let totalSumEuro = rub1/rubInEuro;
//     document.querySelector('#rub-euro').textContent = totalSumEuro.toFixed(2);
// }


// rub2.addEventListener('keyup', function(e){
//     if (e.keyCode === 13){
//     calkEuroRub();
//     e.preventDefault();
// }
// });

// async function calkEuroRub() {
//     const result = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json');
//     const resultReceived = await result.json();
// console.log(resultReceived)
//     let rub2 = document.querySelector('#rub2').value;

//     let euroInRub = resultReceived.eur.rub;
//     let totalSumRub = rub2*euroInRub;
    
//     document.querySelector('#euro-rub').textContent = totalSumRub.toFixed(2);
// };


// btn.addEventListener('click', function(e){
//     e.preventDefault();
//     rub1.value = '';
//     rub2.value = '';

//     document.querySelector('#rub-euro').textContent='00.00';
//     document.querySelector('#euro-rub').textContent='00.00';

// });

// =============================

const currencyElement_one = document.querySelector('#currency-one');
const currencyElement_two = document.querySelector('#currency-two');
const amountElement_one = document.querySelector('#amount-one');
const amountElement_two = document.querySelector('#amount-two');
const rateElement = document.querySelector('#rate');
const swap = document.querySelector('#swap');
const curentlyday = document.querySelector('.curently-day');


async function calculate() {
  const currency_one = currencyElement_one.value;
  const currency_two = currencyElement_two.value;
  
  const res = await fetch(`https://v6.exchangerate-api.com/v6/6ec5104ce50c3127214a9727/latest/${currency_one}`)
  const resRec =   await res.json();
  console.log(resRec);
  const rate = resRec.conversion_rates[currency_two];

      rateElement.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountElement_two.value = (amountElement_one.value * rate).toFixed(2);
      curentlyday.innerHTML = `${resRec.time_last_update_utc}`;

    }



// Event listeners

currencyElement_one.addEventListener('change', calculate);
amountElement_one.addEventListener('input', calculate);
currencyElement_two.addEventListener('change', calculate);
amountElement_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currencyElement_one.value;
  currencyElement_one.value = currencyElement_two.value;
  currencyElement_two.value = temp;

  calculate();
})

calculate();

