import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { House,BanknoteArrowDown, Bus ,PlaneLanding  } from "lucide-react";
interface Sidebar {
  name: string;
  icon: React.ReactNode;
  link: string;
}
const sidebars: Sidebar[] = [
  {
    name: "Home",
    icon: <House />,
    link: "/",
  },
  {
    name: "Expenses",
    icon: <BanknoteArrowDown />,
    link: "/expenses",
  },
  {
    name: "Trips",
    icon: <Bus />,
    link: "/trips",
  }
  // ,
  // {
  //   name: "Approval",
  //   icon: <PlaneLanding  />,
  //   link: "/approval",
  // },
];

const SidebarLink = () => {
  return (
    <div className="text-white">
      <Avatar />

      <div className="space-y-2 flex flex-col mt-4">
        {sidebars.map((sidebar, index) => (
          <Link
            to={sidebar.link}
            key={index}
            className="p-2 flex items-center rounded-lg hover:bg-gray-600 transition duration-300"
          >
            <span className="mr-2">{sidebar.icon}</span>
            <span>{sidebar.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};


export default SidebarLink;
