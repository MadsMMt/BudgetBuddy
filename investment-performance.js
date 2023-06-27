// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the form and result elements
    const form = document.getElementById('investment-form');
    const resultElement = document.getElementById('performance-result');
    const captionElement = document.getElementById('performance-caption');
  
    // Add form submission event listener
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Get the initial investment and current value
      const initialInvestmentInput = document.getElementById('initial-investment');
      const currentValueInput = document.getElementById('current-value');
      const initialInvestment = parseFloat(initialInvestmentInput.value);
      const currentValue = parseFloat(currentValueInput.value);
  
      if (initialInvestment && currentValue) {
        // Calculate the investment performance
        const performance = (currentValue - initialInvestment) / initialInvestment;
        const performancePercentage = (performance * 100).toFixed(2);
  
        // Display the performance result
        resultElement.textContent = `Investment Performance: ${performancePercentage}%`;
  
        // Determine the caption based on performance
        if (performance > 0) {
          captionElement.textContent = 'Your investment is doing well!';
          captionElement.style.color = 'green';
        } else if (performance < 0) {
          captionElement.textContent = 'Your investment is not doing well.';
          captionElement.style.color = 'red';
        } else {
          captionElement.textContent = 'Your investment is holding steady.';
          captionElement.style.color = 'blue';
        }
      }
    });
  });