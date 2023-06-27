// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the form and list elements
    const form = document.getElementById('budget-form');
    const expenseList = document.getElementById('expense-list');
    const totalExpense = document.getElementById('total-expense');
  
    // Add form submission event listener
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Get the expense name and amount
      const expenseNameInput = document.getElementById('expense-name');
      const expenseAmountInput = document.getElementById('expense-amount');
      const expenseName = expenseNameInput.value;
      const expenseAmount = parseFloat(expenseAmountInput.value);
  
      if (expenseName && expenseAmount) {
        // Create a new list item for the expense
        const listItem = document.createElement('li');
        listItem.textContent = expenseName + ': $' + expenseAmount.toFixed(2);
  
        // Append the list item to the expense list
        expenseList.appendChild(listItem);
  
        // Clear the input fields
        expenseNameInput.value = '';
        expenseAmountInput.value = '';
  
        // Update the total expense
        updateTotalExpense();
      }
    });
  
    // Function to update the total expense
    function updateTotalExpense() {
      const expenses = expenseList.querySelectorAll('li');
      let total = 0;
  
      for (let i = 0; i < expenses.length; i++) {
        const expenseAmountText = expenses[i].textContent.split(': $')[1];
        total += parseFloat(expenseAmountText);
      }
  
      totalExpense.textContent = total.toFixed(2);
    }
  });