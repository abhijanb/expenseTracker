import { Filter } from "lucide-react";
import { Checkbox } from "../components/ui/checkbox";

const Content = () => {
  return (
    <div className="p-4 sm:p-6 space-y-4 bg-main text-primary">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Expenses</h2>
        <div className="flex items-center space-x-4">
          <button className="px-3 py-1 bg-button rounded text-white hover:bg-button-hover">
            Add Expenses
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
      <div className="flex flex-row items-center p-3 border-b border-default gap-4">
        <div className="w-6 flex-shrink-0">
          <Checkbox />
        </div>
        <div className="flex-1 flex flex-col">
          <span className="text-sm font-medium text-primary">2025-05-29</span>
          <span className="text-xs text-secondary mt-0.5">Food Cat</span>
        </div>
        <div className="flex-1">Merchant Name</div>
        <div className="w-24 text-right">$345</div>
        <div className="flex-1">When Added</div>
        <div className="w-24">Not Paid</div>
      </div>

      <div className="flex flex-row items-center p-3 border-b border-default gap-4">
        <div className="w-6 flex-shrink-0">
          <Checkbox />
        </div>
        <div className="flex-1 flex flex-col">
          <span className="text-sm font-medium text-primary">2025-05-28</span>
          <span className="text-xs text-secondary mt-0.5">Travel</span>
        </div>
        <div className="flex-1">Another Merchant</div>
        <div className="w-24 text-right">$120</div>
        <div className="flex-1">Yesterday</div>
        <div className="w-24">Paid</div>
      </div>
    </div>
  );
};

export default Content;
