import {
  BanknoteArrowDown,
  CircleDollarSign,
  Clock,
  Plane,
} from "lucide-react";
import { useEffect, useState } from "react";

type Trip = {
  id: string;
  status: string;
};

type ExpenseOrAdvance = {
  id: number;
  ischecked: boolean; // use this for reported check
  status: string;
};

type Approval = {
  id: number;
  status: string; // example: "pending", "active", etc.
};

const PendingTask = () => {
  const [tripData, setTripData] = useState<Trip[]>([]);
  const [unreportedExpenses, setUnreportedExpenses] = useState(0);
  const [unreportedAdvances, setUnreportedAdvances] = useState(0);
  const [pendingApprovals, setPendingApprovals] = useState(0);

  const safeParse = <T,>(key: string): T[] => {
    try {
      const data = localStorage.getItem(key);
      if (!data) return [];
      return JSON.parse(data) as T[];
    } catch {
      return [];
    }
  };

  useEffect(() => {
    const trips = safeParse<Trip>("trips");
    const expenses = safeParse<ExpenseOrAdvance>("expenses");
    const advances = safeParse<ExpenseOrAdvance>("advances");
    const approvals = safeParse<Approval>("approvals");

    setTripData(trips);

    // unreported = ischecked === false
    setUnreportedExpenses(expenses.filter((e) => e.ischecked === false).length);
    setUnreportedAdvances(advances.filter((a) => a.ischecked === false).length);

    // pending approvals = status === "pending"
    setPendingApprovals(approvals.filter((a) => a.status === "pending").length);
  }, []);

  const Task = [
    {
      icon: Plane,
      name: "New Trips Registered",
      value: tripData.length,
    },
    {
      icon: CircleDollarSign,
      name: "Unreported Expenses",
      value: unreportedExpenses,
    },
    {
      icon: BanknoteArrowDown,
      name: "Unreported Advances",
      value: unreportedAdvances,
    },
    {
      icon: Clock,
      name: "Pending Approvals",
      value: pendingApprovals,
    },
  ];

  return (
    <div className="border border-gray-300 bg-gray-600 rounded-sm w-[300px] p-2">
      <div className="w-full flex justify-center border-b-2 border-gray-300">
        <h1 className="text-white font-semibold">Pending Task</h1>
      </div>
      <div className="flex flex-col gap-y-3 mt-2">
        {Task.map((data, index) => {
          const Icon = data.icon;
          return (
            <div
              className="flex flex-row justify-between items-center"
              key={index}
            >
              <div className="flex flex-row items-center gap-2 ml-2 mr-2">
                <Icon className="text-white" size={20} />
                <p className="text-white">{data.name}</p>
              </div>
              <p className="text-white font-medium">{data.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PendingTask;
