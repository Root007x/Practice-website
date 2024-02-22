function phoneNumberUpdate(flag){
    const caseInputField = document.getElementById('phone-number');
    let caseNumber = caseInputField.value;

    
    if(flag){
        caseNumber++;
    }
    else{
        caseNumber--;
    }

    caseInputField.value = caseNumber;
    return caseNumber;
}

function updatePhonePrice(case_num){
    const total_price = case_num * 1219;
    const casePriceElement = document.getElementById('phone-price');
    casePriceElement.innerText = total_price;
    return total_price;
}

function sub_total(total_price,flag){
    const sub_totalElement = document.getElementById('sub-total');
    let sub_total;
    if(flag){
        sub_total = parseInt(sub_totalElement.innerText) + total_price;
    }
    else{
        sub_total = parseInt(sub_totalElement.innerText) - total_price;
    }
    sub_totalElement.innerText = sub_total;
    return sub_total;
}

document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const phone_number = phoneNumberUpdate(true);
    updatePhonePrice(phone_number);

    sub_total(1219,true);
    total_tax();
    total_price();
})


document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const phone_number = phoneNumberUpdate(false);
    updatePhonePrice(phone_number);

    sub_total(1219,false);
    total_tax();
    total_price();
})