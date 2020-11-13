import React from "react";

export const initialState = {
  transactions: [
    { id: 1, text: "car", amount: -100 },
    { id: 2, text: "book", amount: 200 },
    { id: 3, text: "salary", amount: 300 },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "Delete_Item":
      return {
        ...state,
        transactions: state.transactions.filter(
          (item) => item.id !== action.payload
        ),
      };
    case "Add_Item":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};
