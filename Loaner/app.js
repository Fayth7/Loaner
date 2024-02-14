const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let loanTransactions = [];

// Route to handle loan transactions
app.post('/loanTransaction', (req, res) => {
  const loanTransaction = req.body;

  // Validate the required fields
  if (!loanTransaction.reportInfo || !loanTransaction.reportInfo.reportItems) {
    return res.status(400).json({ error: 'Invalid loan transaction data' });
  }

  // Add the loan transaction to the list
  loanTransactions.push(loanTransaction);

  res.status(201).json({ message: 'Loan transaction created successfully' });
});

// Route to retrieve all loan transactions
app.get('/loanTransactions', (req, res) => {
  res.json({ loanTransactions });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
