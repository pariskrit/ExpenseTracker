import React from "react";
import "./incomeexpense.css";
import { useStateValue } from "../ReactContext/StateProvider";
function IncomeExpense() {
  const [state] = useStateValue();
  const income = state.transactions
    .filter((item) => item.amount > 0)
    .reduce((amount, item) => (amount += item.amount), 0);
  const exp = state.transactions
    .filter((item) => item.amount < 0)
    .reduce((amount, item) => (amount += item.amount), 0);
  // const totalIncome = income.reduce(
  //   (amount, item) => (amount += item.amount),
  //   0
  // );
  // const totalExp = exp.reduce((amount, item) => (amount += item.amount), 0);

  return (
    <div className="incomeexpense">
      <div className="income">
        <strong>INCOME</strong>
        <p>${income}</p>
      </div>
      <div className="expense">
        <strong>EXPENSE</strong>
        <p>${Math.abs(exp)}</p>
      </div>
    </div>
  );
}

export default IncomeExpense;
