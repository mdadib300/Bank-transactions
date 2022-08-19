// function of value
function getInputValues(inputId){
    const inputFieldAmount = document.getElementById(inputId);
    const inputFieldAmountString = inputFieldAmount.value;
    const inputFieldAmountValue = parseFloat(inputFieldAmountString);
    return inputFieldAmountValue;
}
// function of inner text
function getInnerText(textId){
    const amount = document.getElementById(textId);
    const amountString = amount.innerText;
    const amountValue = parseFloat(amountString);
    return amountValue;
}
// function of new inner texts
function newInnerText(previous, present){
    const oldAmount = document.getElementById(previous);
    oldAmount.innerText = present;
}
// function of new values
function newValues(previous2, present2){
    const oldAmount2 = document.getElementById(previous2);
    oldAmount2.value = present2;
}