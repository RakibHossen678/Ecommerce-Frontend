import DashboardNavbar from "../../components/DashboardNav";
import AllUsers from "./Allusers";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  return (
    <div>
      
      <div className="flex flex-col md:flex-row min-h-screen ">
        <div className="w-full md:w-[18%] lg:w-[15%] shadow-lg">
          <Sidebar />
        </div>

        <main className="w-full md:w-[82%] lg:w-[85%] p-4 md:p-8 bg-gray-50 overflow-auto">
        <div className="mb-4">
        <DashboardNavbar />
        </div>
          <div className="bg-white w-full shadow-md rounded-lg p-4 ">
            <AllUsers />
          </div>
        </main>
      </div>
    </div>
  );
}
