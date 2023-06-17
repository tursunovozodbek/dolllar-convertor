document.addEventListener('DOMContentLoaded', function() {
    const convertButton = document.getElementById('convertButton');
    const resultContainer = document.getElementById('resultContainer');
    const dollarInput = document.getElementById('dollarInput');
  
    convertButton.addEventListener('click', function() {
      const dollarAmount = parseFloat(dollarInput.value);
      if (!isNaN(dollarAmount)) {
        const sumAmount = dollarAmount * 10500; // Assuming 1 dollar = 10500 sum
        resultContainer.textContent = `${dollarAmount} dollars is equal to ${sumAmount} sum.`;
      } else {
        resultContainer.textContent = 'Invalid input. Please enter a valid dollar amount.';
      }
    });
  });
  