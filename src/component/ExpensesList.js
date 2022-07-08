import ExpenseItem from "./ExpenseItem";
//conditional rendering
const ExpensesList = (props) => {
  console.log(props.data);
  if (props.data.length === 0) {
    return <p>No expense found</p>;
  }
  return (
    <div>
      {props.data.map((datas) => {
        return (
          <ExpenseItem
            key={datas.id}
            title={datas.title}
            amount={datas.amount}
            date={datas.date}
          ></ExpenseItem>
        );
      })}
    </div>
  );
};

export default ExpensesList;
