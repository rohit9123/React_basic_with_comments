function ExpenseDate(props) {
  const date = props.date;
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();
  console.log(month, day, year);
  return (
    <>
      <div>day</div>
      <div>month</div>
      <div>year</div>
    </>
  );
}
export default ExpenseDate;
