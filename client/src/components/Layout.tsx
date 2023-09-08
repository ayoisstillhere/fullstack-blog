import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <main className="p-[10px] max-w-[700px] mx-auto my-0">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Layout;
