
// add money feature
document.getElementById("add-money-btn")
    .addEventListener('click', function (e) {
        e.preventDefault();
        console.log('btn click')

        const bank = document.getElementById('bank-select').value;
        const accountNumber = document.getElementById('account-number').value;
        const ammount = parseInt(document.getElementById('ammount').value);
        const password = document.getElementById('pin-number').value;
        const availableBalance = parseInt(document.getElementById('available-balance').innerText);

        // console.log(bank, accountNumber, ammount, password, availableBalance)




        const validNumber = '01729960935'
        if (accountNumber.length < 11 || accountNumber.length > 11 || accountNumber != validNumber) {
            alert('Please Provide correct account number')
            return;
        }

        const validPin = 'tasfia'
        if (password != validPin) {
            alert('Wrong Password');
            return;
        }


        const updateAvailableBalance = availableBalance + ammount;

        document.getElementById('available-balance')
            .innerText = updateAvailableBalance;


    })

// cashout feature
document.getElementById('cashout-btn')
    .addEventListener('click', function (e) {
        e.preventDefault()
        const cashOutNumber = document.getElementById('cashout-account-number').value
        const cashOutAmmount = parseInt(document.getElementById('cashout-ammount').value)
        const password = document.getElementById('cashout-pin-number').value

        const availableBalance = parseInt(document.getElementById('available-balance').innerText);

        const validCashoutNumber = '01729960935'
        if (cashOutNumber.length < 11 || cashOutNumber.length > 11 || cashOutNumber != validCashoutNumber) {
            alert('Please Provide correct account number')
            return;
        }

        const validPin = 'tasfia'
        if (password != validPin) {
            alert('Wrong Password');
            return;
        }
        const afterCashOut = availableBalance - cashOutAmmount;
        document.getElementById('available-balance')
            .innerText = afterCashOut;

    })



// toggle feature 
document.getElementById('add-money')
    .addEventListener('click', function () {
        document.getElementById('addmoneyForm')
            .style.display = 'block';
        document.getElementById('cashOutForm')
            .style.display = 'none'
    })
document.getElementById('cash-Out')
    .addEventListener('click', function () {
        document.getElementById('addmoneyForm')
            .style.display = 'none';
        document.getElementById('cashOutForm')
            .style.display = 'block'
    })
