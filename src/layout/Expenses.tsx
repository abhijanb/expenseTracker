import { Filter, Trash } from "lucide-react";
import { Checkbox } from "../components/ui/checkbox";
import Layout from "./Layout";
import { useState } from "react";
import { useForm } from "react-hook-form";
import UseLocalStorage from "../hook/UseLocalStorage";
import { Button } from "../components/ui/button";

// 1. Define Expense type
type Expense = {
  id: number;
  details: string;
  merchant: string;
  amount: number;
  report: string;
  status: string;
  date?: string;
  ischecked: boolean;
};

const Expenses = () => {
  const [expensesToggle, setToggle] = useState(false);

  // 2. UseLocalStorage with type
  const [value, setValue] = UseLocalStorage<Expense[]>("expenses", []);

  // 3. Typed useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Expense>();

  const toggle = value.some((e) => e.ischecked === true);

  // 4. Typed form submit
  const expenseAdd = (data: Expense) => {
    data.id = value.length;
    data.ischecked = false;
    setValue((prev) => [...prev, data]);
    reset();
    setToggle(false);
  };

  return (
    <Layout>
      {expensesToggle && (
        <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-center">
          <form
            onSubmit={handleSubmit(expenseAdd)}
            className="bg-white p-6 rounded-lg shadow-lg space-y-4 w-full max-w-md"
          >
            <h2 className="text-lg font-semibold">Add Expense</h2>

            <div className="flex flex-col">
              <label>Details</label>
              <input
                type="text"
                {...register("details", { required: "Details must be entered" })}
                className="border p-2 rounded"
              />
              {errors.details && (
                <p className="text-red-500 text-sm">{errors.details.message}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label>Merchant</label>
              <input
                type="text"
                {...register("merchant", { required: "Merchant is required" })}
                className="border p-2 rounded"
              />
              {errors.merchant && (
                <span className="text-red-500 text-sm">{errors.merchant.message}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label>Amount</label>
              <input
                type="number"
                step="0.01"
                {...register("amount", { required: "Amount is required" })}
                className="border p-2 rounded"
              />
              {errors.amount && (
                <span className="text-red-500 text-sm">{errors.amount.message}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label>Report</label>
              <input
                type="text"
                {...register("report", { required: "Report is required" })}
                className="border p-2 rounded"
              />
              {errors.report && (
                <span className="text-red-500 text-sm">{errors.report.message}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label>Status</label>
              <input
                type="text"
                {...register("status", { required: "Status is required" })}
                className="border p-2 rounded"
              />
              {errors.status && (
                <span className="text-red-500 text-sm">{errors.status.message}</span>
              )}
            </div>

            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setToggle(false)}
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="p-4 sm:p-6 space-y-4 bg-main text-primary">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Expenses</h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setToggle(true)}
              className="px-3 py-1 bg-button rounded text-white hover:bg-button-hover"
            >
              Add Expenses
            </button>
            <button>
              <Filter className="w-5 h-5 color-icon hover:color-highlight" />
            </button>
          </div>
        </div>

        {toggle && (
          <div className="flex justify-end">
            <Button className="hover:border hover:border-red-300">
              <Trash />
            </Button>
          </div>
        )}

        {/* Table Header */}
        <div className="flex flex-row items-center p-3 border-b border-default text-secondary uppercase text-sm font-medium gap-4">
          <div className="w-6 flex-shrink-0">
            <Checkbox disabled />
          </div>
          <div className="flex-1">Details</div>
          <div className="flex-1">Merchant</div>
          <div className="w-24 text-right">Amount</div>
          <div className="flex-1">Report</div>
          <div className="w-24">Status</div>
        </div>

        {/* Table Rows */}
        {value.length > 0 ? (
          value.map((expense, index) => (
            <div key={index} className="flex flex-row items-center p-3 border-b border-default gap-4">
              <div className="w-6 flex-shrink-0">
                <Checkbox
                  checked={expense.ischecked}
                  onCheckedChange={(checked) => {
                    setValue((prev) =>
                      prev.map((p, i) =>
                        index === i ? { ...p, ischecked: !!checked } : p
                      )
                    );
                  }}
                />
              </div>
              <div className="flex-1 flex flex-col">
                <span className="text-sm font-medium text-primary">{expense.date}</span>
                <span className="text-xs text-secondary mt-0.5">{expense.details}</span>
              </div>
              <div className="flex-1">{expense.merchant}</div>
              <div className="w-24 text-right">{expense.amount}</div>
              <div className="flex-1">{expense.report}</div>
              <div className="w-24">{expense.status}</div>
            </div>
          ))
        ) : (
          <p>Add expenses</p>
        )}
      </div>
    </Layout>
  );
};

export default Expenses;
