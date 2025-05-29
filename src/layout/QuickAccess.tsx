import { Button } from "../components/ui/button";

const QuickAccess = () => {
  return (
    <div className="w-full bg-gray-600 rounded-lg border-2 border-gray-200 p-4 space-y-4">
      <h1 className="text-white text-lg font-semibold border-b border-gray-400 pb-1">
        Quick Access
      </h1>
      <div className="flex flex-col sm:flex-row flex-wrap gap-2">
        <Button className="flex-1 sm:flex-none">+ New Expense</Button>
        <Button className="flex-1 sm:flex-none">+ New Receipt</Button>
        <Button className="flex-1 sm:flex-none">+ Create Receipt</Button>
        <Button className="flex-1 sm:flex-none">+ Create Trip</Button>
      </div>
    </div>
  );
};

export default QuickAccess;
