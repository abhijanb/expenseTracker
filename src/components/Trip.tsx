import { Filter } from "lucide-react";
import { Checkbox } from "../components/ui/checkbox";
import { useState } from "react";
import { useForm } from "react-hook-form";
import UseLocalStorage from "../hook/UseLocalStorage";

const trips = () => {
  const [tripsToggle, setToggle] = useState(false);
  const [value,setValue] = UseLocalStorage("trips",[])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const tripAdd = (data) => {
    setValue((prev)=>[...prev,data]);

    
    reset();
    setToggle(false);
  };

  return (<>
      {tripsToggle && (
        <div className="fixed inset-0 z-50 bg-black/40
 flex justify-center items-center">
          <form
            onSubmit={handleSubmit(tripAdd)}
            className="bg-white p-6 rounded-lg shadow-lg space-y-4 w-full max-w-md"
          >
            <h2 className="text-lg font-semibold">Add trip</h2>

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
              <label>Type</label>
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
                <span className="text-red-500 text-sm">{errors.amount?.message}</span>
              )}
            </div>
            <div className="flex flex-col">
              <label>Report</label>
              <input
                type="text"
                step="0.01"
                {...register("report", { required: "Report is required" })}
                className="border p-2 rounded"
              />
              {errors.report && (
                <span className="text-red-500 text-sm">{errors.report?.message}</span>
              )}
            </div>
            <div className="flex flex-col">
              <label>Status</label>
              <select
                {...register("status", { required: "Status is required" })}
                className="border p-2 rounded" defaultValue=""
              >
                 <option value="" disabled>Select status</option>
    <option value="Active">Active</option>
    <option value="Inactive">Inactive</option>
    <option value="Pending">Pending</option>
              </select>
              {errors.status && (
                <span className="text-red-500 text-sm">{errors.status?.message}</span>
              )}
            </div>
            <select name="" id=""></select>

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
          <h2 className="text-xl font-semibold">Trip</h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setToggle(true)}
              className="px-3 py-1 bg-button rounded text-white hover:bg-button-hover"
            >
              Add Trip
            </button>
            <button>
              <Filter className="w-5 h-5 color-icon hover:color-highlight" />
            </button>
          </div>
        </div>

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
        {
value ? value.map((trip)=>(


        <div className="flex flex-row items-center p-3 border-b border-default gap-4">
          <div className="w-6 flex-shrink-0">
            <Checkbox />
          </div>
          <div className="flex-1 flex flex-col">
            <span className="text-sm font-medium text-primary">{trip.date}</span>
            <span className="text-xs text-secondary mt-0.5">{trip.details}</span>
          </div>
          <div className="flex-1">{trip.merchant}</div>
          <div className="w-24 text-right">{trip.amount}</div>
          <div className="flex-1">{trip.report}</div>
          <div className="w-24">{trip.status}</div>
        </div>
)):<p className="text-white">Add trips</p>

        }
        
      </div>
  </>

  );
};

export default trips;
