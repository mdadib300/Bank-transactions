// Deposit button
document.getElementById('button-deposit').addEventListener('click', function(){
    const depositValue = getInputValues('input-deposit');
    const previousDepositAmount = getInnerText('Deposit');
    const newDepositAmount = depositValue + previousDepositAmount;
    newInnerText('Deposit', newDepositAmount);
    const previousBalance = getInnerText('Amount');
    const currentBalance = depositValue + previousBalance;
    newInnerText('Amount', currentBalance);
    newValues('input-deposit', '')
})