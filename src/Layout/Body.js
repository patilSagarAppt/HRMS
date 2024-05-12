import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "../Components/Sidebar";

const Body = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Body;
