import React, { useEffect, useState } from "react";

type Expense = {
  date: string;
  details: string;
  merchant: string;
  amount: string | number;
  report: string;
  status: string;
  ischecked: boolean;
};

type CheckboxProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
};

const Checkbox: React.FC<CheckboxProps> = ({ checked, onCheckedChange, disabled = false }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onCheckedChange(e.target.checked)}
      disabled={disabled}
      className="w-4 h-4"
    />
  );
};

const RecentExpenses: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("expenses");
    try {
      const parsed = stored ? JSON.parse(stored) : [];
      if (Array.isArray(parsed)) {
        // Ensure all items have `ischecked` property
        const enriched = parsed.map((item: any) => ({
          ...item,
          ischecked: false,
        }));
        setExpenses(enriched);
      } else {
        console.warn("Invalid expenses format in localStorage.");
      }
    } catch (e) {
      console.error("Error parsing expenses from localStorage:", e);
    }
  }, []);

  return (
    <div className="border border-gray-300 rounded-sm w-full sm:w-[800px] p-4 bg-gray-600">
      <div className="w-full flex justify-center border-b-2 border-gray-300 mb-4">
        <h1 className="text-white font-semibold text-lg">Recent Expenses</h1>
      </div>

      {/* Table Header */}
      <div className="flex flex-row items-center p-3 border-b border-gray-400 text-gray-200 uppercase text-sm font-medium gap-4">
       
        <div className="flex-1">Details</div>
        <div className="flex-1">Merchant</div>
        <div className="w-24 text-right">Amount</div>
        <div className="flex-1">Report</div>
        <div className="w-24">Status</div>
      </div>

      {/* Table Rows */}
      {expenses.length > 0 ? (
        expenses.map((expense, index) => (
          <div key={index} className="flex flex-row items-center p-3 border-b border-gray-500 gap-4 text-white">
            
            <div className="flex-1 flex flex-col">
              <span className="text-sm font-medium">{expense.date}</span>
              <span className="text-xs text-gray-300 mt-0.5">{expense.details}</span>
            </div>
            <div className="flex-1">{expense.merchant}</div>
            <div className="w-24 text-right">{expense.amount}</div>
            <div className="flex-1">{expense.report}</div>
            <div className="w-24">{expense.status}</div>
          </div>
        ))
      ) : (
        <p className="text-white mt-4">No expenses found.</p>
      )}
    </div>
  );
};

export default RecentExpenses;
