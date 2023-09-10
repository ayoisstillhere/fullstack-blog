import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);
  async function login(ev: { preventDefault: () => void }) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("Wrong Credentials");
    }
  }

  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <form className="max-w-[400px] mx-auto my-0" onSubmit={login}>
      <h1 className="text-center font-bold text-4xl pb-5">Login</h1>
      <input
        type="text"
        placeholder="username"
        className="block mb-[5px] w-[100%] py-[5px] px-[7px] bg-[#fff] border-2 border-[#ddd] rounded-[5px]"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        className="block mb-[5px] w-[100%] py-[5px] px-[7px] bg-[#fff] border-2 border-[#ddd] rounded-[5px]"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button className="w-[100%] block bg-[#555] text-white rounded-[5px] py-[7px]">
        Login
      </button>
    </form>
  );
};

export default LoginPage;
