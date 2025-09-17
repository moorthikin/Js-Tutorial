//checked method is return true or false value

const myCheckedbox = document.getElementById('my-checkbox');
const myvisaButton = document.getElementById('my-visa-button');
const myMasterCardButton = document.getElementById('my-mastercard-button');
const myRupaycardButton = document.getElementById('my-Rupaycard-button');
const mypayButton = document.getElementById('payment-conf-btn');
const mysubscribeText = document.getElementById('my-subs-text');
const myPaymentText = document.getElementById('my-pay-text');


mypayButton.onclick = function(){

    if(myCheckedbox.checked){
        mysubscribeText.innerText = `You are subscribed!`;
    }
    else {
        mysubscribeText.innerText = `You are not subscribed!`;
    }

    if(myvisaButton.checked){
        myPaymentText.innerText = `You are Paying using Visa Card :)`
    }
    else if(myMasterCardButton.checked){
        myPaymentText.innerText = `You are Paying using Master Card :)`
    }
    else if(myRupaycardButton.checked){
        myPaymentText.innerText = `You are Paying using Rupay Card :)`
    }
    
}



