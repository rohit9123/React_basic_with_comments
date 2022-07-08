import React from "react";
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    //how to send data from child to parent
    // 1-> we have to create the function and the send to the child
    // 2-> then whenever we want to add some data we simply add and it automatically
    //     reach to the parent
    props.onAddExpense(expenseData);
  };
  return (
    <div>
      <ExpenseForm onsaveExpenseDate={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
