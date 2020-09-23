import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

  const incomeAmounts = incomeTransactions.map(
    incomeTransaction => incomeTransaction.incomeAmount
  );

  const expenseAmounts = expenseTransactions.map(
    expenseTransaction => expenseTransaction.expenseAmount
  );

  const totalIncome = incomeAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const totalExpenses = expenseAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="balance">
      <h2>Your Budget</h2>
      <h3>{(totalIncome - totalExpenses).toFixed(2)} DT</h3>
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>+{totalIncome} DT</p>
        </div>
        <div className="minus">
          <h3>Expenses</h3>
          <p>-{totalExpenses} DT</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
