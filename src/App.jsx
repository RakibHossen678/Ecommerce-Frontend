import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-340px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
