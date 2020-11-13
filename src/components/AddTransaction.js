import React, { useState } from "react";
import { useStateValue } from "../ReactContext/StateProvider";
import "./addtransaction.css";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [{}, dispatch] = useStateValue();

  const changeText = (e) => setText(e.target.value);

  const changeAmount = (e) => setAmount(e.target.value);

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "Add_Item",
      payload: {
        id: Math.floor(Math.random() * 1000),
        text,
        amount: parseInt(amount),
      },
    });
    setText("");
    setAmount("");
  };
  return (
    <div className="addTransaction">
      <strong>Add Transaction</strong>
      <form onSubmit={formSubmit}>
        <label>Text</label>
        <br />
        <input
          placeholder="enter text.."
          type="text"
          value={text}
          onChange={changeText}
        />
        <br />
        <label>Amount</label>
        <br />
        <input
          placeholder="enter amount.."
          type="text"
          value={amount}
          onChange={changeAmount}
        />
        <br />
        <button type="Submit">Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
