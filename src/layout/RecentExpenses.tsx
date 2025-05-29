const Expenses = [
  {
    subject: "Office Supplies keldjfljamsdlfjladkfl",
    employee: "John Smith",
    team: "Marketing",
    amount: "$120.00",
  },
];

const cellClass =
  "min-w-[100px] max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap";

const RecentExpenses = () => {
  return (
    <div className="border border-gray-300 rounded-sm w-full sm:w-[600px] p-2 bg-gray-600">
      <div className="w-full flex justify-center border-b-2 border-gray-300 mb-2">
        <h1 className="text-white font-semibold">Recent Expenses</h1>
      </div>

      {/* Table Header */}
      <div className="flex flex-row justify-between text-gray-300 font-medium mb-1 px-1">
        <div className={cellClass}>Subject</div>
        <div className={cellClass}>Employee</div>
        <div className={cellClass}>Team</div>
        <div className={cellClass}>Amount</div>
      </div>

      {/* Table Rows */}
      <div className="flex flex-col gap-1">
        {Expenses.map((expense, index) => (
          <div
            className="flex flex-row justify-between text-white px-1"
            key={index}
          >
            <div className={cellClass}>{expense.subject}</div>
            <div className={cellClass}>{expense.employee}</div>
            <div className={cellClass}>{expense.team}</div>
            <div className={cellClass}>{expense.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentExpenses;
