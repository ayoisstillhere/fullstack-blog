import { useState } from "react";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function register(ev: { preventDefault: () => void }) {
    ev.preventDefault();
    await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
  }
  return (
    <form className="max-w-[400px] mx-auto my-0" onSubmit={register}>
      <h1 className="text-center font-bold text-4xl pb-5">Register</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
        className="block mb-[5px] w-[100%] py-[5px] px-[7px] bg-[#fff] border-2 border-[#ddd] rounded-[5px]"
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
        className="block mb-[5px] w-[100%] py-[5px] px-[7px] bg-[#fff] border-2 border-[#ddd] rounded-[5px]"
      />
      <button className="w-[100%] block bg-[#555] text-white rounded-[5px] py-[7px]">
        Register
      </button>
    </form>
  );
};

export default RegisterPage;
