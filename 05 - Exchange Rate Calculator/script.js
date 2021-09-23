const currancyEl_one = document.getElementById('currancy-one');
const currancyEl_two = document.getElementById('currancy-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');


// Fetch exchange rates and update the DOM
function calculate() {
    const currancy_one = currancyEl_one.value;
    const currancy_two = currancyEl_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/b92a64c151ff34e54c260447/latest/${currancy_one}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
            const rate = data.conversion_rates[currancy_two];
            rateEl.innerText = `1 ${currancy_one} = ${rate} ${currancy_two}`;

            amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
            console.log(rate);


        
    })
    // console.log(currancy_one, currancy_two);
}

function swapRates() {
    swapCurrancy = !swapCurrancy;
    console.log(swapCurrancy);
}

//Event Listeners
// currancyEl_one.addEventListener('change', calculate);
currancyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);

currancyEl_two.addEventListener('change', calculate); 
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
     const temp =  currancyEl_one.value;
     currancyEl_one.value = currancyEl_two.value;
     currancyEl_two.value = temp;
     calculate();
});

console.log(currancyEl_one);

calculate();