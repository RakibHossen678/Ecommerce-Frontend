import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="inset-0 -z-10 h-full w-full bg-primary-light bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <Navbar />
        <div className="min-h-[calc(100vh-340px)] ">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
