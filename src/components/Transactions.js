import React from "react";
import "./transaction.css";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { useStateValue } from "../ReactContext/StateProvider";

function Transactions() {
  const [state, dispatch] = useStateValue();

  const deleteItem = (id) => {
    dispatch({
      type: "Delete_Item",
      payload: id,
    });
  };
  return (
    <div className="transactions">
      <strong>History</strong>
      {state.transactions.length === 0 ? (
        <h3>No Items</h3>
      ) : (
        state.transactions.map((item) => (
          <div
            className={
              item.amount < 0
                ? "transaction__itemexpense"
                : "transaction__itemincome"
            }
            key={item.id}
          >
            <span onClick={() => deleteItem(item.id)}>
              <DeleteForeverOutlinedIcon />
            </span>

            <p>{item.text}</p>
            <p>{item.amount}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Transactions;
