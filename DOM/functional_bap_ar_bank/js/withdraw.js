document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdraw_amount = getInputFieldAmountByID('withdraw-amount');
    const prev_withdraw = getElementById('inner-widhtraw');

    const total_withdraw = prev_withdraw + withdraw_amount;
    setElementById('inner-widhtraw',total_withdraw);

    const prev_balance = getElementById('inner-balance');
    const total_balance = prev_balance - withdraw_amount;
    setElementById('inner-balance',total_balance);
})