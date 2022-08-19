// withdraw button
document.getElementById('button-withdraw').addEventListener('click', function(){
    const withdrawValue = getInputValues('input-withdraw');
    const previousWithdrawAmount = getInnerText('Withdraw');
    const newWithdrawAmount = withdrawValue + previousWithdrawAmount;
    newInnerText('Withdraw', newWithdrawAmount);
    const previousBalance = getInnerText('Amount');
    const currentBalance = previousBalance - withdrawValue;
    newInnerText('Amount', currentBalance);
    newValues('input-withdraw', '')
})