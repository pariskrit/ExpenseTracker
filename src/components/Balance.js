import React, { useEffect, useState } from "react";
import "./balance.css";
import { useStateValue } from "../ReactContext/StateProvider";
function Balance() {
  const [state] = useStateValue();

  const balance = state.transactions.reduce(
    (amount, item) => (amount += item.amount),
    0
  );

  const handleMouseOver = () => {
    document.getElementById("balance").innerHTML = "Save Some Money Dude!";
  };

  const handleMouseOut = () => {
    document.getElementById("balance").innerHTML = "Your Balance";
  };
  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="balance"
    >
      <h5 id="balance">YOUR BALANCE</h5>
      <h1>${balance}</h1>
    </div>
  );
}

export default Balance;
