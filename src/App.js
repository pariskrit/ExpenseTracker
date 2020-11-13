import React, { useEffect } from "react";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import Transaction from "./components/Transactions";
import AddTransaction from "./components/AddTransaction";
import { StateProvider } from "./ReactContext/StateProvider";
import { reducer, initialState } from "./ReactContext/reducer";
import axios from "axios";
import "./App.css";

function App() {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => console.log(response));
  }, []);
  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      <div className="app">
        <header className="app__header">
          <h4>Expense Tracker</h4>
        </header>
        <Balance />
        <IncomeExpense />
        <Transaction />
        <AddTransaction />
      </div>
    </StateProvider>
  );
}

export default App;
