document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-amount');
    const withdraw_amount = parseFloat(withdrawField.value);

    const innerWithraw = document.getElementById('inner-widhtraw');
    const current_withdraw = parseFloat(innerWithraw.innerText);

    const total_withdraw = withdraw_amount + current_withdraw;
    innerWithraw.innerText = total_withdraw;

    const balanceField = document.getElementById("inner-balance");
    const current_balance = parseFloat(balanceField.innerText);

    const total_balance = current_balance - withdraw_amount;
    balanceField.innerText = total_balance;

    withdrawField.value = '';
})