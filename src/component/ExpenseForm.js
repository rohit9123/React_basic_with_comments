import { useState } from "react";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [show, setShow] = useState(false);
  //updating the state from previous state(depand on preivous state) -> important
  //handling all the data in object
  //   const [form, setForm] = useState({ title: "", date: "", price: "" });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    //updating the state from previous state(depand on preivous state)
    // setForm((prevState) => {
    //   return { ...prevState, title: event.target.value };
    // });
  };
  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
    //it will not garuntee it will work on lastest data
    // setForm({
    //   ...form,
    //   price: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    //it will not garuntee it will work on lastest data
    // setForm({
    //   ...form,
    //   date: event.target.value,
    // });
  };
  const handleCancle = () => {
    setTitle("");
    setPrice("");
    setDate("");
    setShow(false);
  };
  const submitHandler = (event) => {
    //it will prevent the browser to reload our page

    event.preventDefault();
    const ExpenseDate = { title: title, amount: price, date: new Date(date) };
    props.onsaveExpenseDate(ExpenseDate);
    setDate("");
    setPrice("");
    setTitle("");
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  //two way binding
  //this means we not simply listens for changes but also pass the value to the input
  //value={}
  // const show=

  return (
    <div>
      {!show && <button onClick={handleShow}>Add New Expense</button>}
      {show && (
        <form onSubmit={submitHandler}>
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            //two way binding
            //this means we not simply listens for changes but also pass the value to the input
            //value={}
            value={price}
            onChange={priceChangeHandler}
          />
          <label>date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
          <button onClick={handleCancle}>Cancel</button>
          <button type="submit">AddExpense</button>
        </form>
      )}
    </div>
  );
};
export default ExpenseForm;
