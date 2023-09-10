import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    fetch("http://localhost:4000/profile", { credentials: "include" });
  }, []);
  return (
    <header className="flex justify-between mb-[50px] items-center mt-[20px]">
      <Link to="/" className="font-bold text-[1.8rem]">
        TechTrials
      </Link>
      <nav className="flex gap-[15px]">
        <Link to="/login" className="no-underline text-inherit">
          Login
        </Link>
        <Link to="/register" className="no-underline text-inherit">
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
