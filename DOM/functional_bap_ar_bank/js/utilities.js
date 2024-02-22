function getInputFieldAmountByID(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    inputField.value = "";
    return inputValue;
}

function getElementById(getId){
    const getField = document.getElementById(getId);
    const getValue = parseFloat(getField.innerText);
    return getValue;
}

function setElementById(setId,amount){
    const setFiled = document.getElementById(setId);
    setFiled.innerText = amount;
}