document.getElementById('btn-deposit').addEventListener('click',function(){
    const deposit_amount = getInputFieldAmountByID('deposit-amount');
    const prev_deposit = getElementById('inner-deposit');

    const total_deposit = prev_deposit + deposit_amount;
    setElementById('inner-deposit',total_deposit);

    const prev_balance = getElementById('inner-balance');
    const total_balance = prev_balance + deposit_amount;
    setElementById('inner-balance',total_balance);

})