import { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";

export const ExpenseTracer = () => {
  const [formData, setFormData] = useState({});
  const { addTransaction } = useAddTransaction();

  const addData = () => {
    addTransaction(formData.item, Number(formData.amount), formData.type);
  };
  function handelChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  console.log(formData);
  return (
    <>
      <h1 className="text-purple-500">Expense Tracker Page</h1>
      <form>
        <input
          type="text"
          placeholder="item"
          name="item"
          onChange={handelChange}
        />
        <input
          type="number"
          placeholder="amount"
          name="amount"
          onChange={handelChange}
        />
        <input
          type="text"
          placeholder="type"
          name="type"
          onChange={handelChange}
        />
      </form>
      <button onClick={addData}>Add Transaction</button>
    </>
  );
};
