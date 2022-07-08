import "./ExpenseItem.css";
import React, { useState } from "react";
// import "./ExpenseDate";
function ExpenseItem(props) {
  const { amount, date } = props;
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  const [title, setTitle] = useState(props.title);
  // const clickHandler=()=>{
  //   title='not workinf'
  //because nobody calling our ExpenseItem as it is function so our content is changing
  //but never reflect to our function
  // }
  const clickHandler = () => {
    setTitle("changed");
  };

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}>Change Tittle</button>
    </div>
  );
}

export default ExpenseItem;
