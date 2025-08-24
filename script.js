document.getElementById('login-btn')
    .addEventListener('click', function (e) {
        e.preventDefault() // form  এর কারণে অটো রিলোড অফ করতে,without type operator//

        const mobileNumber = '01729960935';
        const pinNumber = 'tasfia';
        const mobileNumberValue = document.getElementById('mobile-number').value;
        const pinNumberValue = document.getElementById('pin-number').value;


        if (mobileNumberValue == mobileNumber && pinNumberValue == pinNumber) {
            window.location.href="./home.html"
        }
        else {
            alert('invalid credential')
        }
        


    })