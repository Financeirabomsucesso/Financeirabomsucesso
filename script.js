function calculateLoan() {
    var creditAmount = parseFloat(document.getElementById('creditAmount').value);
    var installments = parseInt(document.getElementById('installments').value);
    var interestRate = 0.25; // 5% ao ano

    var totalAmount = creditAmount * (1 + interestRate);
    var monthlyInstallment = totalAmount / installments;

    document.getElementById('totalAmount').innerHTML = 'Valor total do empréstimo: R$ ' + totalAmount.toFixed(2);
    document.getElementById('monthlyInstallment').innerHTML = 'Valor da parcela mensal: R$ ' + monthlyInstallment.toFixed(2);
}
