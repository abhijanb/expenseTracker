import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const QuickAccess = () => {
  return (
    <div className="w-full bg-gray-600 rounded-lg border-2 border-gray-200 p-4 space-y-4">
      <h1 className="text-white text-lg font-semibold border-b border-gray-400 pb-1">
        Quick Access
      </h1>
      <div className="flex flex-col sm:flex-row flex-wrap gap-2">
        <Link  to={"/expenses"}><Button className="flex-1 sm:flex-none">+ New Expense</Button></Link>
        <Link to={"/trips"}><Button className="flex-1 sm:flex-none">+ Create Trip</Button></Link>
      </div>
    </div>
  );
};

export default QuickAccess;
