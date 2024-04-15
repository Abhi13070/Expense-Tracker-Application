import { useState } from 'react';

import { Typography, Box, styled } from '@mui/material';
import './App.css';

import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import Transactions from './components/Transactions';
import NewTransaction from './components/NewTransaction';

const Header = styled(Typography)`
  margin: 10px 0;
  color: black;
  font-size: 36px;
  text-transform: uppercase;
  font-weight: bold; /* Adding bold font weight */
  text-align: center; /* Center aligning text */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Adding text shadow for depth */
  /* Adding a background color and padding */
  background-color: #f0f0f0;
  padding: 10px 20px;
  /* Adding border radius for rounded corners */
  border-radius: 5px;
  /* Adding hover effect */
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #e0e0e0;
    color: #333; /* Darkening the text color on hover */
  }
`;

const Component = styled(Box)`
  background: #FFF;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  width: 800px;
  & > div {
    padding: 10px;
    width: 50%;
    height: 70vh;
  }
}
`;

function App() {
  
  const [transactions, setTransactions] = useState([
    { id: 1, text: 'Momos', amount: -20},
    { id: 2, text: 'Salary', amount: 3000},
    { id: 3, text: 'Book', amount: -100},
    { id: 4, text: 'Bonus', amount: 1500 },
  ]);

  const deleteTransaction = (id) => {
    console.log(id);
    setTransactions(transactions.filter(transaction => transaction.id !== id));
    console.log(transactions);
  }

  const addTransaction = (transaction) => {
    setTransactions(transactions => [transaction, ...transactions]);
    console.log(transaction);
    console.log(transactions);
  }


  return (
    <div className="App">
      <Header>Expense Tracker</Header>
      <Component>
        <Box>
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions} />
          <NewTransaction addTransaction={addTransaction}/>
        </Box>
        <Box>
          <Transactions transactions={transactions} deleteTransaction={deleteTransaction}/>
        </Box>
      </Component>
    </div>
  );
}

export default App;
