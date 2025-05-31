import { useState } from "react";

function Apps() {
  const [expenses, setExpenses] = useState([
    { isChecked: false },
    { isChecked: true },
  ]);

  const showDelete = expenses.some((e) => e.isChecked);
  return (
    <>
      {showDelete ? 'Delete' : null}
      {expenses.map((e, i) => {
        return (
          <input
            type="checkbox"
            checked={e.isChecked}
            onChange={(evt) => {
              setExpenses((p) =>
                p.map((e, j) => ({
                  ...e,
                  isChecked: i === j ? evt.target.checked : e.isChecked,
                }))
              );
            }}
          />
        );
      })}
    </>
  );
}
export default Apps