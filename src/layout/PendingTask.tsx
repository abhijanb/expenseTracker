import {
  BanknoteArrowDown,
  BanknoteArrowUp,
  CircleDollarSign,
  Clock,
  Plane,
} from "lucide-react";

const Task = [
  {
    icon: Clock,
    name: "Pending Approvals",
    value: Math.floor(Math.random() * 100),
  },
  {
    icon: Plane,
    name: "New Trips Registered",
    value: Math.floor(Math.random() * 100),
  },
  {
    icon: CircleDollarSign,
    name: "Unreported Expenses",
    value: Math.floor(Math.random() * 100),
  },
  {
    icon: BanknoteArrowUp,
    name: "Upcoming Expenses",
    value: Math.floor(Math.random() * 100),
  },
  {
    icon: BanknoteArrowDown,
    name: "Unreported Advances",
    value: Math.floor(Math.random() * 100),
  },
];

const PendingTask = () => {
  return (
    <div className="border border-gray-300 bg-gray-600 rounded-sm w-[300px] p-2">
      <div className="w-full flex justify-center border-b-2 border-gray-300">
        <h1 className="text-white">Pending Task</h1>
      </div>
      <div className="flex flex-col gap-y-3 mt-2">
        {Task.map((data, index) => {
          const Icon = data.icon;
          return (
            <div className="flex flex-row justify-between items-center" key={index}>
              <div className="flex flex-row items-center gap-2 ml-2 mr-2">
                <Icon className="text-white" size={20} />
                <p className="text-white">{data.name}</p>
              </div>
              <p className="text-white">{data.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PendingTask;
