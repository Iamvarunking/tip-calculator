const billInput = document.getElementById('billTotalInput');

const tipInput = document.getElementById('tipInput');

const perPersonTotalDiv = document.getElementById('perPersonTotal');

const numberOfPeopleDiv = document.getElementById('numberOfPeople');

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
    let bill = Number(billInput.value);
    let tipPercentage = Number(tipInput.value)/100;
    let tipAmount =  tipPercentage * bill;
    let total = bill + tipAmount;
    const perPersonTotal = total/numberOfPeople;
    perPersonTotalDiv.innerText = `${perPersonTotal.toFixed(2)}`;
}

const increasePeople = () => {
    numberOfPeople += 1;
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill();

}

const decreasePeople = () => {
    if(numberOfPeople > 1) {
        numberOfPeople -= 1;
        numberOfPeopleDiv.innerText = numberOfPeople
        calculateBill();
    }
}