function caseNumberUpdate(flag){
    const caseInputField = document.getElementById('case-number');
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

function updateCasePrice(case_num){
    const total_price = case_num * 59;
    const casePriceElement = document.getElementById('case-price');
    casePriceElement.innerText = total_price;
}


document.getElementById('btn-plus').addEventListener('click',function(){
   const case_num = caseNumberUpdate(true);
   updateCasePrice(case_num);

   sub_total(59,true);
   total_tax();
   total_price();
})


document.getElementById('btn-minus').addEventListener('click',function(){
    const case_num = caseNumberUpdate(false);
    updateCasePrice(case_num);

    sub_total(59,false);
    total_tax();
    total_price();
})