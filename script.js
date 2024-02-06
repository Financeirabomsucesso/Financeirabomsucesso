function calculateLoan() {
    var creditAmount = parseFloat(document.getElementById('creditAmount').value);
    var installments = parseInt(document.getElementById('installments').value);
    var annualInterestRate = 300; // 5% ao ano
    var monthlyInterestRate = annualInterestRate / 100 / 12;

    var totalAmount = creditAmount * (1 + monthlyInterestRate);
    var monthlyInstallment = totalAmount / installments;

    if (!isNaN(totalAmount) && !isNaN(monthlyInstallment)) {
        document.getElementById('result').classList.remove('hidden');
        document.getElementById('totalAmount').innerHTML = 'Valor total do empréstimo: R$ ' + totalAmount.toFixed(2);
        document.getElementById('monthlyInstallment').innerHTML = 'Valor da parcela mensal: R$ ' + monthlyInstallment.toFixed(2);
    } else {
        // Se não houver resultados, oculte a seção.
        document.getElementById('result').classList.add('hidden');
    }
}
