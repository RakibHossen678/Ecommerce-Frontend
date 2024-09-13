import { CgProfile } from "react-icons/cg";
import { GrServices } from "react-icons/gr";
import { LiaUsersCogSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-full bg-gradient-to-b from-purple-500 to-primary text-white">
      <aside className="w-full p-5 flex flex-col gap-6 pt-10">
        <Link to="/dashboard">
          <div className="text-lg font-semibold flex items-center gap-4 transition-all duration-300 hover:bg-primary p-3 rounded-md hover:scale-105">
            <CgProfile size={25} /> Dashboard
          </div>
        </Link>

        <Link to="/dashboard/profile">
          <div className="text-lg font-semibold flex items-center gap-4 transition-all duration-300 hover:bg-primary p-3 rounded-md hover:scale-105">
            <CgProfile size={25} /> Profile
          </div>
        </Link>

        <Link to="/dashboard/services">
          <div className="text-lg font-semibold flex items-center gap-4 transition-all duration-300 hover:bg-primary p-3 rounded-md hover:scale-105">
            <GrServices size={25} /> Services
          </div>
        </Link>

        <Link to="/dashboard/allUser">
          <div className="text-lg font-semibold flex items-center gap-4 transition-all duration-300 hover:bg-primary p-3 rounded-md hover:scale-105">
            <LiaUsersCogSolid size={25} /> All User
          </div>
        </Link>
      </aside>
    </div>
  );
};

export default Sidebar;
