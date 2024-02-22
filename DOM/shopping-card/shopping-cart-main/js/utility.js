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
}


function total_tax(){
    const sub_totalElement = document.getElementById('sub-total');
    const total_sub = parseInt(sub_totalElement.innerText);
    const taxTotalField = document.getElementById('tax-total');
    const total_tax = (total_sub * 0.1).toFixed(2);

    taxTotalField.innerText = total_tax;
}

function total_price(){
    const totalElement = document.getElementById('total-price');

    const sub_totalElement = document.getElementById('sub-total');
    const sub_total = parseInt(sub_totalElement.innerText);

    const taxTotalField = document.getElementById('tax-total');
    const tax_total = parseFloat(taxTotalField.innerText);

    const total = sub_total + tax_total;

    totalElement.innerText = total;
}
