import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [username, setUsername] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4000/profile", { credentials: "include" }).then(
      (response) => {
        response.json().then((userInfo) => {
          setUsername(userInfo.username);
        });
      }
    );
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUsername(null);
  }

  return (
    <header className="flex justify-between mb-[50px] items-center mt-[20px]">
      <Link to="/" className="font-bold text-[1.8rem]">
        TechTrials
      </Link>
      <nav className="flex gap-[15px]">
        {username && (
          <>
            <Link to="/create">Create New Post</Link>
            <a
              href="/logout"
              className="no-underline text-inherit"
              onClick={logout}
            >
              Logout
            </a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login" className="no-underline text-inherit">
              Login
            </Link>
            <Link to="/register" className="no-underline text-inherit">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
