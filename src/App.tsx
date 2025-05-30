import Dashboard from "./layout/Dashboard";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Expenses from "./layout/Expenses";
import Trip from "./layout/Trip";

const App = () => {
  return (
    <div className="w-screen h-screen flex bg-main">
<BrowserRouter>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/trips" element={<Trip />} />
        {/* <Route path="/approval" element={<Approval />} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
