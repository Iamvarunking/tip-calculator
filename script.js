
    const billInput = document.getElementById('billTotalInput');

    const tipInput = document.getElementById('tipInput');

    const perPersonTotalDiv = document.getElementById('perPersonTotal');

    const numberOfPeopleDiv = document.getElementById('numberOfPeople');

    let numberOfPeople = Number(numberOfPeopleDiv.innerText);

    const clear = () => {
        billInput.value = ''
        tipInput.value = ''
        perPersonTotalDiv.innerText = '₹0.00'
        numberOfPeopleDiv.innerText = '1'
    }

    const calculateBill = () => {
        let bill = Number(billInput.value);
        if(/[0-9]/.test(bill) == false ){
            alert("please enter a valid amount")
            clear()
            return
        }
        let tip = Number(tipInput.value)
        let tipPercentage = tip/100;
        if(/[0-9]/.test(tip) == false ){
            alert("please enter a valid percentage")
            clear()
            return
        }
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
