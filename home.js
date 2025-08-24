
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

            document.getElementById('account-number').value = '';
            document.getElementById('ammount').value = '';
            document.getElementById('pin-number').value = '';


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

            document.getElementById('cashout-account-number').value = '';
            document.getElementById('cashout-ammount').value = '';
            document.getElementById('cashout-pin-number').value = '';

    })

//  Transfer Money

document.getElementById('transfer-money-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const transferNumber = document.getElementById('transfer-account-number').value;
        const transferAmmount = parseInt(document.getElementById('transfer-ammount').value);
        const availableBalance = parseInt(document.getElementById('available-balance').innerText);
        const password = document.getElementById('pin-number').value

        const validNumber = '01729960935'
        if (transferNumber.length < 11 || transferNumber.length > 11 || transferNumber != validNumber) {
            alert('Please Provide correct account number')
            return;
        }

        const validPin = 'tasfia'
        if (password != validPin) {
            alert('Wrong Password');
            return;
        }

        const aftertransfer = availableBalance - transferAmmount

        document.getElementById('available-balance')
            .innerText = aftertransfer;

            document.getElementById('transfer-account-number').value = '';
            document.getElementById('transfer-ammount').value = '';
            document.getElementById('pin-number').value = '';



    })


//  pay bill 




// toggle feature 

function  hideAllForms(){
    document.getElementById('addmoneyForm').style.display = 'none'
    document.getElementById('cashOutForm').style.display = 'none'
    document.getElementById('transferMoneyForm').style.display = 'none'
    document.getElementById('getBonusForm').style.display = 'none'
    document.getElementById('payBillForm').style.display = 'none'
}


document.getElementById('add-money')
.addEventListener('click', function(){
    hideAllForms();
    document.getElementById('addmoneyForm').style.display = 'block'
})
document.getElementById('cash-Out')
.addEventListener('click', function(){
    hideAllForms();
    document.getElementById('cashOutForm').style.display = 'block'
})
document.getElementById('transfer-money')
.addEventListener('click', function(){
    hideAllForms();
    document.getElementById('transferMoneyForm').style.display = 'block'
})
document.getElementById('get-bonus')
.addEventListener('click', function(){
    hideAllForms();
    document.getElementById('getBonusForm').style.display = 'block'
})
document.getElementById('pay-bill')
.addEventListener('click', function(){
    hideAllForms();
    document.getElementById('payBillForm').style.display = 'block'
})





// add money
// document.getElementById('add-money')
//     .addEventListener('click', function () {
//         document.getElementById('addmoneyForm')
//             .style.display = 'block';
//         document.getElementById('cashOutForm')
//             .style.display = 'none'
//         document.getElementById('transferMoneyForm')
//             .style.display = 'none'
//         document.getElementById('getBonusForm')
//             .style.display = 'none'
//         document.getElementById('payBillForm')
//             .style.display = 'none'
//     })

// // cashout
// document.getElementById('cash-Out')
//     .addEventListener('click', function () {
//         document.getElementById('addmoneyForm')
//             .style.display = 'none';
//         document.getElementById('transferMoneyForm')
//             .style.display = 'none'
//         document.getElementById('getBonusForm')
//             .style.display = 'none'
//         document.getElementById('payBillForm')
//             .style.display = 'none'
//         document.getElementById('cashOutForm')
//             .style.display = 'block'
//     })

// // transfer money
// document.getElementById('transfer-money')
//     .addEventListener('click', function () {
//         document.getElementById('cashOutForm')
//             .style.display = 'none';
//         document.getElementById('addmoneyForm')
//             .style.display = 'none';
//         document.getElementById('getBonusForm')
//             .style.display = 'none'
//         document.getElementById('payBillForm')
//             .style.display = 'none'
//         document.getElementById('transferMoneyForm')
//             .style.display = 'block'
//     })


// //  get bonus
// document.getElementById('get-bonus')
//     .addEventListener('click', function () {
//         document.getElementById('cashOutForm')
//             .style.display = 'none';
//         document.getElementById('addmoneyForm')
//             .style.display = 'none';
//         document.getElementById('transferMoneyForm')
//             .style.display = 'none'
//         document.getElementById('payBillForm')
//             .style.display = 'none'
//         document.getElementById('getBonusForm')
//             .style.display = 'block'
//     })


// // pay Bill  

// document.getElementById('pay-bill')
//     .addEventListener('click', function () {
//         document.getElementById('cashOutForm')
//             .style.display = 'none';
//         document.getElementById('addmoneyForm')
//             .style.display = 'none';
//         document.getElementById('transferMoneyForm')
//             .style.display = 'none'
//         document.getElementById('getBonusForm')
//             .style.display = 'none'
//         document.getElementById('payBillForm')
//             .style.display = 'block'
//     })


