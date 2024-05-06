function generatePin(){
    const pin = generateMath();
    const str = pin + '';
    if(str.length === 4){
        return pin;
    }
    else{
        generatePin();
    }
}


function generateMath(){
    const random = Math.round(Math.random() * 10000);
    return random;
}


document.getElementById('btn-pin').addEventListener('click',function(){
    const showPinElement = document.getElementById('show-pin');
    showPinElement.value = generatePin();
})


document.getElementById('inner-value').addEventListener('click',function(event){
    const number = event.target.innerText;

    const showNumberElement = document.getElementById('show-num');
    const perv_number = showNumberElement.value;

    if(!isNaN(number)){
        const current_number = perv_number + number;
        showNumberElement.value = current_number;
    }
    else{
        if(number === 'C'){
            showNumberElement.value = '';
        }
        else if(number === '<'){
            const split_number = perv_number.split('');
            split_number.pop();
            const final_number = split_number.join('');
            showNumberElement.value = final_number;
        }
    }
    
})


document.getElementById('btn-submit').addEventListener('click',function(){
    const showPinElement = document.getElementById('show-pin');
    const pin = showPinElement.value;

    const showNumberElement = document.getElementById('show-num');
    const number = showNumberElement.value;

    const showSuccess = document.getElementById('match-pin');
    const showFailed = document.getElementById('unmatch-pin');

    if(pin === number){
        showSuccess.style.display = 'block';
        showFailed.style.display = 'none';
    }
    else{
        showSuccess.style.display = 'none';
        showFailed.style.display = 'block';
    }
})