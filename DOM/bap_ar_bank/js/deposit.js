document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-amount');
    const current_deoposit = parseFloat(depositField.value);

    
    const prev_deopositFiled = document.getElementById('inner-deposit');
    const prev_deposit = parseFloat(prev_deopositFiled.innerText);

    const total_deposit = prev_deposit + current_deoposit;
    prev_deopositFiled.innerText = total_deposit;

    const balanceField = document.getElementById("inner-balance");
    const current_balance = parseFloat(balanceField.innerText);

    const total_balance = current_balance + current_deoposit;
    balanceField.innerText = total_balance;

    depositField.value = '';
})