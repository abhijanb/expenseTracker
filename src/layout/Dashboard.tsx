import PendingTask from "./PendingTask";
import QuickAccess from "./QuickAccess";
import RecentExpenses from "./RecentExpenses";
import Bar from "./Bar";
import Layout from "./Layout";
import WeeklySpendBar from "./WeekBar";

const Dashboard = () => {
  
  return (
    <Layout>
      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 space-y-6 z-10">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <PendingTask />
          <RecentExpenses />
        </div>

        <QuickAccess />

        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <Bar   />
          <WeeklySpendBar />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
