import { useState, useEffect } from 'react';

import { Typography, Box, styled } from '@mui/material';
import './App.css';

import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import Transactions from './components/Transactions';
import NewTransaction from './components/NewTransaction';

const Header = styled(Typography)`
  margin: 20px 0; /* Increased margin for better spacing */
  color: #333; /* Darker text color for better contrast */
  font-size: 48px; /* Larger font size */
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  background-color: #f0f0f0;
  padding: 20px 40px; /* Increased padding for better emphasis */
  border-radius: 10px; /* More rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  transition: background-color 0.3s, color 0.3s; /* Separated transition properties */
  cursor: pointer; /* Change cursor to pointer on hover */
  user-select: none; /* Prevent text selection */
  &:hover {
    background-color: #e0e0e0;
    color: #222; /* Darkened hover text color */
  }
  &:active {
    transform: translateY(2px); /* Add slight downward movement on click */
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
  
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('data'));
    console.log("data : ", storedItems)
    if (storedItems) {
      setTransactions(storedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(transactions));
  }, [transactions]);

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
